import React from 'react';
import PropTypes from 'prop-types';

import './FeedCard.css';

const FeedCard = ({ cardDetails }) => {
  return (
    <article className="card-wrapper">
      <div className="card">
        <h3>{cardDetails.name}</h3>
        <img
          src={cardDetails.image}
          alt={cardDetails.name}
          className="card-img"
        />
        <p>{cardDetails.description}</p>
        <small>{new Date(cardDetails.date).toLocaleString()}</small>
      </div>
    </article>
  );
};

FeedCard.propTypes = {
  cardDetails: PropTypes.object.isRequired,
};

export default FeedCard;