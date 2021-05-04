// import React, { Component } from 'react';
// //import Airbnb from './Airbnb/Airbnb';
// //import airbnbs from '../_data/airbnbs.json';
// import PropTypes from 'prop-types';

// class CartItem extends Component {
//   static propTypes = {
//     airbnbItems: PropTypes.arrayOf(
//       PropTypes.shape({
//         airbnbItem: PropTypes.string,
//         airbnbItemTitle: PropTypes.string
//       })
//     )
//   }
  
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     airbnbItems: [
//   //       { airbnbItem: '', airbnbItemTitle: '' }
//   //     ]
//   //   };
//   // }

//   // addToCart = (index, data) => {
//   //   //console.log(index, data.title);
//   //   return () => {
//   //     const title = data.title;
//   //     this.setState({
//   //       airbnbItems: [...this.state.airbnbItems, {airbnbItem: index, airbnbItemTitle: title}],
//   //     });
//   //   }
//   // }

//   render() {
//     //console.log(this.state);
//     const cartItems = this.props.airbnbItems.map((cartItem, index) => {
//     console.log(cartItem.airbnbItemTitle, cartItem.airbnbItem);
//     return <div key={index}>{cartItem.airbnbItemTitle}</div>;
// });

//     return (
//       <div>{cartItems}</div>
//     )
//   }
// }

// export default CartItem; 