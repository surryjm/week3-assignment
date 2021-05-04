import React, { Component } from 'react';
import './Ratings.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


class Ratings extends Component {
  static propTypes = {
    stars: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
  }

  render() {
    const { stars, reviews } = this.props;

    return (
      <div>
        <span className="star"><FontAwesomeIcon icon={faStar} /></span>{stars} <span className="light-gray">({reviews} reviews)</span>
      </div>
    )
  }
}

export default Ratings; 