import React, { Component } from 'react';
import './AirbnbList.css';
import Airbnb from '../Airbnb/Airbnb';
import Logo from '../Logo/Logo';

class AirbnbList extends Component {

  render() {
    return (
      <div className="container">
        <div className="row header-underline">
          <Logo />
        </div>
        <Airbnb/>
      </div>
    )
  }
}

export default AirbnbList; 