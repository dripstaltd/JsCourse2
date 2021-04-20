// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing Module');
// addToCart('Bread', 5);
// console.log(price, tq);

// console.log('Importing Module');
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('Bread', 5);
// console.log(`Total: £${ShoppingCart.totalPrice}.00`);
// import add, { totalPrice as price, tq } from './shoppingCart.js';
/*
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 7);
add('apples', 4);
console.log(cart);
*/
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product}: ${quantity} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${product}: ${quantity}  ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    shippingCost,
  };
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
*/
/*
//: Export nodejs
export.addTocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product}: ${quantity} added to cart`);
};
//: Import nodejs
const { addTocart } = require('./shoppingCart.js');
*/

// -| Command Line ;

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;

console.log(stateDeepClone);
