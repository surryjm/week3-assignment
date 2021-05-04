import React, { Component } from 'react';
import './Airbnb.css';
import Image from '../Image/Image';
import Payment from '../Payment/Payment';
import Ratings from '../Ratings/Ratings';
import TitleAndType from '../TitleAndType/TitleAndType';
import airbnbs from '../../_data/airbnbs.json';
import AddToCart from '../AddToCart/AddToCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Airbnb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airbnbItems: [
        { airbnbItem: '', airbnbItemTitle: '', airbnbCost: '' }
      ],
      total: 0
    };
  }

  addToCart = (index, data) => {
      const title = data.title + ':';
      const costDisplay = data.payment.cost;
      let currentTotal = this.state.total;
      this.setState({
        airbnbItems: [...this.state.airbnbItems, {airbnbItem: index, airbnbItemTitle: title, airbnbCost: costDisplay}],
        total: currentTotal + data.payment.cost
      });
  }

  deleteCartItem = (index) => {
      const itemTotal = this.state.airbnbItems[index].airbnbCost;
      const updatedTotal = this.state.total - itemTotal;
      const updatedAirbnbItems = [
        ...this.state.airbnbItems.slice(0, index),
        ...this.state.airbnbItems.slice(index + 1)
      ];
      this.setState({
        airbnbItems: updatedAirbnbItems,
        total: updatedTotal
      });
  }

  render() {
    let airbnbsList = airbnbs;
    const cartItems = this.state.airbnbItems.map((cartItem, index) => {

      if (index) {
        return (
          <div className="cart-item" key={index}>
            <span className="row align-bottom space-between">{cartItem.airbnbItemTitle} ${cartItem.airbnbCost}
              <FontAwesomeIcon className="trash-icon align-center" 
                icon={faTrashAlt} 
                onClick={(e) => this.deleteCartItem(index)} />
            </span>
          </div>
          )
        }
    });
    //console.log(this.state);

    return (
      <div className='airbnb-and-cart'>
        <div className='cart-items'>
          <h2>Items in Cart</h2>
          <div>{cartItems}</div>
          <h3>Total: ${this.state.total}</h3>
        </div>
        <div className="column airbnbs-column">
        {airbnbsList.map((data, index) => {

          return (
            <div key={index} className="airbnbContainer row">
              <div>
                <Image 
                  imageSrc={data.image}
                  altText={data.title}
                  isSuperhost={data.host.isSuperhost}
                />
              </div>
              <div className="full-width column space-between">
                <div className="row space-between">
                  <div className="align-left">
                    <TitleAndType 
                      houseType={data.houseType}
                      city={data.location.city}
                      country={data.location.country}
                      title={data.title}
                      paymentDescription={data.payment.description}
                    />
                  </div>
                  <div onClick={(e) => this.addToCart(index, data)}>
                    <AddToCart />
                  </div> 
                </div>
                <div className="row space-between">
                  <Ratings 
                    stars={data.rating.stars}
                    reviews={data.rating.reviews}
                  />
                  <Payment 
                    cost={data.payment.cost}
                  />
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Airbnb; 