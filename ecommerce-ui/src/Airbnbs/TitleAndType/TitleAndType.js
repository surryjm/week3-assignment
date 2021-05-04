import React, { Component } from 'react';
import './TitleAndType.css';
import PropTypes from 'prop-types';

class TitleAndType extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    houseType: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    paymentDescription: PropTypes.string.isRequired
  }

  render() {
    const { title, houseType, city, country, paymentDescription } = this.props;

    return (
      <div className="title-and-text">
        <p className="light-gray">{houseType} in {city}, {country}</p>
        <h3>{title}</h3>
        <p className="light-gray">{paymentDescription}</p>
      </div>
    )
  }
}

export default TitleAndType; 