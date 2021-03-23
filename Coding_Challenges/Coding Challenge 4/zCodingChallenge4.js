/////////////////////////////
// Coding Challenge 4

/*
Steven wants to build a very simple tip calculator for when he goes eating in a resturaunt. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement.

2. Print a string to the console containing the bill value, the tip and the final value (bill + tip).
*/

// const bill = 275;
// const bill2 = 40;
// const bill3 = 430;

// let tip;



// console.log(`Bill 1: You have eaten £${bill} worth of food! You must tip them ${bill < 50 || bill > 300 ? '20%' : '15%'} or get 7 years bad luck! This brings the total to £${bill < 50 || bill > 300 ? 0.2 * bill : 0.15 * bill + bill}`);


// console.log(`Bill 2: You have eaten £${bill2} worth of food! You must tip them ${bill2 < 50 || bill2 > 300 ? '20%' : '15%'} or get 7 years bad luck! This brings the total to £${bill2 < 50 || bill2 > 300 ? 0.2 * bill2 : 0.15 * bill2 + bill2}`);


// console.log(`Bill 3: You have eaten £${bill3} worth of food! You must tip them ${bill3 < 50 || bill3 > 300 ? '20%' : '15%'} or get 7 years bad luck! This brings the total to £${bill3 < 50 || bill3 > 300 ? 0.2 * bill3 : 0.15 * bill3 + bill3 }`);

// Second try:  bill >= 50 && <= 300 ? '20%' : '15%' why doesnt this work

// WOOOOOOh i Did this alone!
// Now i will resume the video and show how i am supposed to do it. :D
// I have just noticed the first one worked but the other two did not!


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);





