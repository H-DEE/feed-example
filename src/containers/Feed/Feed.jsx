import React, { Component } from 'react';

import { FeedContext } from './Feed.context';
import Search from '../../components/Search';
import Sort from "../../components/Sort";
import FeedCard from "../../components/FeedCard";
// import FeedTable from "../../components/FeedTable";
import FlexTable from "../../components/FlexTable";
import {
  CARDS_PER_PAGE,
  DEFAULT_SEARCH_STR,
  DEFAULT_SORT,
} from "../../constants";
import {
  customSort,
} from "../../utils";
import './Feed.scss';

class Feed extends Component {
  /**
   * Get a filtered list of cards based on search string and sort type specified
   * @param seachStr - Search string passed as part of route params. Default DEFAULT_SEARCH_STR
   * @param sortBy - Sort method passed as part of route params. Default DEFAULT_SORT
   * @returns arr - List of cards after search and sort filters applied and sliced as per CARDS_PER_PAGE value
   */
  getFilteredCards(cardsData = [], searchStr = DEFAULT_SEARCH_STR, sortBy = DEFAULT_SORT) {
    const filteredItems = cardsData.filter(
      obj =>
        obj.name.toLowerCase().includes(searchStr.toLowerCase()) ||
        obj.description.toLowerCase().includes(searchStr.toLowerCase())
    );

    return customSort(filteredItems, sortBy).slice(0, CARDS_PER_PAGE);
  }

  render() {
    return (
      <FeedContext.Consumer>
        {({ cardsData, searchStr, sortBy }) => {
          const filteredData = this.getFilteredCards(cardsData, searchStr, sortBy);

          return (
            <main role="main" className="feed-container">
              <header className="flexi-header">
                <h1>Feed</h1>
                <Search />
                <Sort />
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
        }}
      </FeedContext.Consumer>
    )    
  }
}

export default Feed;
