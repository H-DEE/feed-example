import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Feed from "./";
import { getDataFromAPI } from "../../utils";
import {
  DEFAULT_SEARCH_STR,
  SORT_OPTIONS,
  DEFAULT_SORT,
  MOCK_DATA_URL,
} from "../../constants";
import './Feed.scss';

export const FeedContext = React.createContext();

class FeedProvider extends Component {
  state = {
    cardsData: []
  };

  async componentDidMount() {
    try {
      const cardsData = await getDataFromAPI(MOCK_DATA_URL);
      this.setState({
        cardsData
      });
    } catch (err) {
      console.error("Mock Data GET request failed", err);
    }
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
    this.props.history.push(
      `/${sortConfig}/${searchStr || DEFAULT_SEARCH_STR}`
    );
  }

  render() {
    const { searchStr, sortBy } = this.props.match.params;
    
    return (
      <FeedContext.Provider
        value={{
          cardsData: this.state.cardsData,
          searchStr: searchStr || DEFAULT_SEARCH_STR,
          sortBy: sortBy || DEFAULT_SORT,
          setSearchStr: (str) => this.setSearchStr(str),
          setSortConfig: (sort) => this.setSortConfig(sort),
          sortOptions: SORT_OPTIONS,
        }}
      >
        <Feed />
      </FeedContext.Provider>
    );
  }
}

FeedProvider.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default FeedProvider;
