import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search';
import Sort from "../../components/Sort";
import FeedCard from "../../components/FeedCard";
// import FeedTable from "../../components/FeedTable";
import FlexTable from "../../components/FlexTable";

import {
  CARDS_PER_PAGE,
  DEFAULT_SEARCH_STR,
  SORT_OPTIONS,
  DEFAULT_SORT,
  MOCK_DATA_URL
} from "../../constants";
import {
  customSort,
  getDataFromAPI,
} from "../../utils";
import './Feed.scss';

class Feed extends Component {
  state = {
    cardsData: [],
  }
  
  async componentDidMount() {
    try {
      const cardsData = await getDataFromAPI(MOCK_DATA_URL);
      this.setState({
        cardsData
      });
    } catch (err) {
      console.error('Mock Data GET request failed', err);
    }
  }

  /**
   * Get a filtered list of cards based on search string and sort type specified
   * @param seachStr - Search string passed as part of route params. Default DEFAULT_SEARCH_STR
   * @param sortBy - Sort method passed as part of route params. Default DEFAULT_SORT
   * @returns arr - List of cards after search and sort filters applied and sliced as per CARDS_PER_PAGE value
   */
  getFilteredCards(searchStr = DEFAULT_SEARCH_STR, sortBy = DEFAULT_SORT) {
    const filteredItems = this.state.cardsData.filter(
      obj =>
        obj.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        obj.description.toLowerCase().includes(searchStr.toLowerCase())
    );

    return customSort(filteredItems, sortBy).slice(0, CARDS_PER_PAGE);
  }

  /**
   * Callback trigger to update route params with entered search string
   * @param str - Updated string
   * @returns null
   */
  setSearchStr(str) {
    const { sortBy } = this.props.match.params;
    this.props.history.push(`/${sortBy || DEFAULT_SORT}/${str}`);
  }

  /**
   * Callback trigger to update route params with selected sort method
   * @param sortConfig - sort selection
   * @returns null
   */
  setSortConfig(sortConfig) {
    const { searchStr } = this.props.match.params;
    this.props.history.push(`/${sortConfig}/${searchStr || DEFAULT_SEARCH_STR}`);
  }

  render() {
    const { searchStr, sortBy } = this.props.match.params;
    const filteredData = this.getFilteredCards(searchStr, sortBy);

    return (
      <main role="main" className="feed-container">
        <header className="flexi-header">
          <h1>Feed</h1>
          <Search
            searchStr={searchStr || DEFAULT_SEARCH_STR}
            setSearchStr={str => this.setSearchStr(str)}
          />
          <Sort
            sort={sortBy || DEFAULT_SORT}
            sortOptions={SORT_OPTIONS}
            setSortConfig={config => this.setSortConfig(config)}
          />
        </header>
        <section className="cards-container">
          {filteredData.map((card, i) => (
            <FeedCard key={i} cardDetails={card} />
          ))}
        </section>
        <h2>Cards Table</h2>
        {/* Scrollable Table
        <section>
          <FeedTable data={filteredData} />
        </section> 
        */}
        <section>
          <FlexTable data={filteredData} />
        </section>
      </main>
    );
  }
}

Feed.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Feed;