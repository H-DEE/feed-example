import React, { Component } from 'react';
import Search from '../../components/Search';
import Sort from "../../components/Sort";
import FeedCard from "../../components/FeedCard";
import FeedTable from "../../components/FeedTable";

import {
  CARDS_PER_PAGE,
  DEFAULT_SEARCH_STR,
  SORT_OPTIONS,
  DEFAULT_SORT,
} from "../../constants";
import {
  updateLocalStorage,
  fetchFromLocalStorage,
  customSort,
} from "../../utils";
import CardsData from '../../static/mock_data.json';
import './Feed.css';

class Feed extends Component {
  state = {
    searchStr: DEFAULT_SEARCH_STR,
    sort: DEFAULT_SORT
  };

  componentDidMount() {
    const cachedState = fetchFromLocalStorage();
    if (cachedState) {
      this.setState(cachedState);
    }
  }

  /**
   * Get a filtered list of cards based on search string and sort type specified
   * @returns arr - List of cards after search and sort filters applied and sliced as per CARDS_PER_PAGE value
   */
  getFilteredCards() {
    const filteredItems = CardsData.filter(
      obj =>
        obj.name.toLowerCase().includes(this.state.searchStr.toLowerCase()) ||
        obj.description
          .toLowerCase()
          .includes(this.state.searchStr.toLowerCase())
    );

    return customSort(filteredItems, this.state.sort).slice(0, CARDS_PER_PAGE);
  }

  /**
   * Callback trigger to update state with new search string, and update localStorage as well
   * @param str - Updated string
   * @returns null
   */
  setSearchStr(str) {
    this.setState(
      {
        searchStr: str
      },
      () => updateLocalStorage(this.state)
    );
  }

  /**
   * Callback trigger to update state with sort method selected, and update localStorage as well
   * @param sortConfig - sort selection
   * @returns null
   */
  setSortConfig(sortConfig) {
    this.setState(
      {
        sort: sortConfig
      },
      () => updateLocalStorage(this.state)
    );
  }

  render() {
    const { searchStr, sort } = this.state;
    const filteredData = this.getFilteredCards();

    return (
      <main role="main" className="feed-container">
        <h1>Feed</h1>
        <div className="filter-wrapper">
          <Search
            searchStr={searchStr}
            setSearchStr={str => this.setSearchStr(str)}
          />
          <Sort
            sort={sort}
            sortOptions={SORT_OPTIONS}
            setSortConfig={config => this.setSortConfig(config)}
          />
        </div>
        <section className="cards-container">
          {filteredData.map((card, i) => (
            <FeedCard key={i} cardDetails={card} />
          ))}
        </section>
        <h2>Cards Table</h2>
        <section>
          <FeedTable data={filteredData} />
        </section>
      </main>
    );
  }
}

export default Feed;