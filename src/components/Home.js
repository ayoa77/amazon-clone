import React, { useState } from 'react';
import Product from './Product';

import { useStateValue } from '../StateProvider';

import randomBanner from '../api/getBanner.js'

import '../styles/Home.css';

function Home() {

  const [ { products } ] = useStateValue();
  const BANNER = randomBanner();

  return (
    <div className="home">
      <img src={ BANNER } alt="amazon banner" className="home__image" />
      <div className="home__row">
        {products.map((item, i) => {
       return <Product
          key={ i }
          id={ products[ i ].id }
          title={ products[ i ].title }
          price={ products[ i ].price }
          rating={ products[ i ].rating }
          image={ products[ i ].image }
        />;
        })}
      </div>
    </div>
  );
}

export default Home;

// https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MjJkZGVlZDYt/MjJkZGVlZDYt-NjhkODU5NzIt-w1242._CB410698583_SY300_.jpg
