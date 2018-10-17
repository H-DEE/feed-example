import React from 'react';
import { FeedContext } from '../../containers/Feed/Feed.context';

import './Search.scss';

const Search = () => (
  <FeedContext.Consumer>
    {({ searchStr, setSearchStr }) => (
      <div className="search-wrapper">
        <div className="search-box">
          <input
            type="text"
            name="search"
            className="search-bar"
            placeholder="Filter items..."
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </div>
      </div>
    )}
  </FeedContext.Consumer>
);

export default Search;