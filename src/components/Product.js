import React from 'react';
import '../styles/Product.css';
import { useStateValue } from '../StateProvider'

const Product = ({ id, title, image, price, rating }) => {
  const [ { products }, dispatch ] = useStateValue();

  const addToBasket = () => {
    dispatch({ type: 'ADD_TO_BASKET' ,
    item: { id, title, image, price, rating }
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {ratingLoop(rating)}
        </div>
      </div>
        <img src={ image } alt={ title } />
        <button onClick={ addToBasket }>Add to Basket</button>
    </div>
  );
};

export default Product;
