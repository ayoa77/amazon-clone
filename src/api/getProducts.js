import { PRODUCTS } from '../data';

const getProducts = (query = '') => {
  const getShuffledArr = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [ newArr[ i ], newArr[ rand ] ] = [ newArr[ rand ], newArr[ i ] ];
    }
    return newArr;
  };
  // if query regex for availabe PRoducts
  const searchedProducts = (products, query) => {
    if (query) {
      console.log(query);
      return products.filter((prod) => {
        return prod.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    } else return getShuffledArr(products);
  };

  const products = searchedProducts(PRODUCTS, query);

  // return PRoducts
  return products;
};

export default getProducts;
