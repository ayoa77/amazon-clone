import getProducts from './api/getProducts';

export const initialState = {
  basket: [],
  products: getProducts(),
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((acc, item) => item.price + acc, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SEARCH_PRODUCTS':
      const searchedProducts = getProducts(action.query);
      state.products = searchedProducts;
      return { ...state };
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'ADD_TO_BASKET':
      return { ...state, basket: [ ...state.basket, action.item ] };
    case 'REMOVE_FROM_BASKET':
      const newBasket = [ ...state.basket ];
      const index = newBasket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${ action.id }) as it's not in the basket.`
        );
      }

      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
