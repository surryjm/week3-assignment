import React, { Component } from 'react';
import './AddToCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class AddToCart extends Component {

  render() {
    return <FontAwesomeIcon icon={faPlus} />
  }
}

export default AddToCart; 