import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Payment.css';

class Payment extends Component {
  static propTypes = {
    cost: PropTypes.number.isRequired
  }

  render() {
    const { cost } = this.props;

    return (
      <p><span className="bold">${cost}</span> / night</p>
    )
  }
}

export default Payment; 