import React from 'react';
import PropTypes from 'prop-types';

import './FeedTable.scss';

const FeedTable = ({ data }) => {
  return <div className="scroll-overlay">
    <div className="table-wrapper">
      <table className="feed-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => <tr key={i}>
            <td className="card-name">{row.name}</td>
            <td className="card-img-wrap">
              <img
                src={row.image}
                alt={row.name}
                className="cell-img"
              />
            </td>
            <td className="card-desc">{row.description}</td>
            <td className="card-date">{new Date(row.date).toLocaleString()}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </div>;
};

FeedTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FeedTable;