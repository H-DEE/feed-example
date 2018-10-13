import React from "react";
import PropTypes from "prop-types";

import "./Sort.css";

const Sort = ({ sort, sortOptions, setSortConfig }) => {
  return (
    <div className="sort-wrapper">
      <div className="label">Sort by:</div>
      <div className="select-box">
        <select value={sort} onChange={(e) => setSortConfig(e.target.value)}>
          {
            sortOptions.map((opt, i) => (
              <option key={opt.value} value={opt.value}>{opt.title}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
};

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
  sortOptions: PropTypes.array.isRequired,
  setSortConfig: PropTypes.func.isRequired,
};

export default Sort;
