import React from 'react';
import PropTypes from 'prop-types';

import './FlexTable.scss';

const FlexTable = ({ data }) => {
  return (
    <div className="flex-table-wrapper">
      {
        data.length > 0 &&
        <>
          <div className="table-head">
            <div className="th-cell">Name</div>
            <div className="th-cell">Image</div>
            <div className="th-cell">Description</div>
            <div className="th-cell">Date</div>
          </div>
          <div className="table-body">
            {
              data.map((row, i) => (
                <div className="table-row" key={i}>
                  <div className="td-cell">{row.name}</div>
                  <div className="td-cell td-img">
                    <img
                      src={row.image}
                      alt={row.name}
                      className="cell-img"
                    />
                  </div>
                  <div className="td-cell">{row.description}</div>
                  <div className="td-cell">{new Date(row.date).toLocaleString()}</div>
                </div>
              ))
            }
          </div>
        </>
      }
    </div>
  );
};

FlexTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FlexTable;