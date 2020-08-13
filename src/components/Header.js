import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

import '../styles/Header.css';
import { queryHelpers } from '@testing-library/react';

function Header() {
  const [ query, setQuery ] = useState('');
  const [ focus, setFocus ] = useState('');
  const [ { basket, user }, dispatch ] = useStateValue();

  const onBlur = () => {
    setFocus(false);
  };
  const onFocus = () => {
    setFocus(true);
  };

  const login = () => {
    // this works with App.js/onEffect to signout & update dom
    if (user) {
      auth.signOut();
    }
  };

  const searchProducts = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_PRODUCTS', query: query });
  };

  const onChangeQuery = (e) => setQuery(e.target.value);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon's Logo and link to the home page"
        ></img>
      </Link>
      <form className="header__search" onSubmit={ searchProducts }>
        <input
          type="text"
          className="header__searchInput"
          onFocus={ onFocus }
          onBlur={ onBlur }
          value={ query }
          onChange={ onChangeQuery }
        />
        <SearchIcon className="header__searchIcon" />
      </form>
      <div className={ 'header__nav' }>
        <Link to={ !user && '/login' } className="header__link">
          <div onClick={ login } className="header__option">
            {/* <span
              className={ `header__optionLineOne ${
                focus ? 'fadeIn' : 'fadeOut'
              }` }
            >
              {' '}
              Hello {user?.email},
            </span> */}
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        {/* <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns </span>
            <span className="header__optionLineTwo"> & Orders </span>
          </div>
        </Link> */}
        {/* <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Your </span>
            <span className="header__optionLineTwo"> Prime </span>
          </div>
        </Link> */}
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
