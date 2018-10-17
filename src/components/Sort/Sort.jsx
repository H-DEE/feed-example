import React from "react";
import { FeedContext } from "../../containers/Feed/Feed.context";

import "./Sort.scss";

const Sort = () => (
  <FeedContext.Consumer>
    {({ sortBy, sortOptions, setSortConfig }) => (
      <div className="sort-wrapper">
        <div className="label">Sort by:</div>
        <div className="select-box">
          <select value={sortBy} onChange={e => setSortConfig(e.target.value)}>
            {sortOptions.map((opt, i) => (
              <option key={opt.value} value={opt.value}>
                {opt.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    )}
  </FeedContext.Consumer>
);

export default Sort;
