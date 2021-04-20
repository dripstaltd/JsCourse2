// Exporting module
// console.log('Exporting Module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Product: ${product}\nQuantity: ${quantity}  added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Product: ${product}\nQuantity: ${quantity}  added to cart`);
}

// C:\WINDOWS\System32\cmd.exe
