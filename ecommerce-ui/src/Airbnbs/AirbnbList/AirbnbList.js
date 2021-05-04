import React, { Component } from 'react';
import './AirbnbList.css';
import Airbnb from '../Airbnb/Airbnb';
//import Cart from '../Cart/Cart';
import Logo from '../Logo/Logo';

class AirbnbList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     airbnbItems: [
  //       { airbnbItem: '', airbnbItemTitle: '', airbnbCost: '' }
  //     ],
  //     total: 0
  //   };
  // }

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