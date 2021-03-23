//-|                                                                ;
//-|                    Coding Challenge 6                          ;
//>                                                                 ;
//:1 Create an array 'bills' Containing all 10 test bill values     ;
//:2 Create empty arrays for 'tips' + 'totals'                      ;
//:3 Use 'calcTip' function in a for loop for all 10 calculations   ;
//> tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//> totals=[bills[0]+tips[0],bills[1] + tips[1], bills[2] + tips[2]];
//>                                                                 ;
'use strict';
//-| Creating an array for all 10 bills                             ;
// const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//-| Creating an empty array to hold 'tips'                         ;
// let tips = [];
// -| Creating an empty array to hold 'totals'                       ;
// let totals = [];
//-| calcTip Function                                               ;
// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
//-| Creating a for loop                                            ;
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
//   console.log(`Bill ${(i + 1)}:`);
//   console.log(`£${bills[i]}! The total is £${totals[i]} which includes the £${tips[i]} tip 💵`);
//   console.log('---------------------------------');
// };



//> Now Following the Video Tutorial to Recap                       ;
//-| calcTip Function                                               ;
const calcTip = function(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
//-| Creating an array for all 10 bills                             ;
const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//-| Creating an empty array to hold 'tips'                         ;
const tips = [];
//-| Creating an empty array to hold 'totals'                       ;
const totals = [];
//-| Creating a for loop                                            ;
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
  console.log(totals);
  
}

//! BONUS ROUND:

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
