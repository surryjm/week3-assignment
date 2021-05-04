import React, { Component } from 'react';
import './Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

class Logo extends Component {

  render() {
    return (
      <div className="logo">
        <FontAwesomeIcon icon={faAirbnb} />
      </div>
    )
  }
}

export default Logo; 