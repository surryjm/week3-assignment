import React, { Component } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Cart extends Component {

  render() {
    return (
      <div className="cart align-right">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    )
  }
}

export default Cart; 