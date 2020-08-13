import React from 'react';

import { useStateValue } from '../StateProvider'

import '../styles/CheckoutProduct.css'

const CheckoutProduct = ({ id, title, image, price, rating }) => {

  const [ { basket }, dispatch ] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  const ratingLoop = (rating) => {
    const stars = [];
    let rate = rating;
    while (rate > 0) {
      stars.push(<p>⭐</p>);
      rate--;
    }
    return stars;
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={ image } alt={ title } />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">{ratingLoop(rating)}</div>

      <button onClick={ removeFromBasket }>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
