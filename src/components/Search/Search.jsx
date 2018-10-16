import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({ searchStr, setSearchStr }) => {
  return (
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
  );
};

Search.propTypes = {
  searchStr: PropTypes.string,
  setSearchStr: PropTypes.func.isRequired,
};

export default Search;