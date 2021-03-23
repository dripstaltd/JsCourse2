/**
 *> Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently;
 *
 *> Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team);
 *> A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!;
 * 
 *TODO 1: Create an arrow function 'calcAverage' to calculate the average of 3 scores;
 *#2: Use the function to calculate the average for both teams;
 *TODO 3: Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to console, together with the victory points, according to the rule above. Example "Koalas win (30 vs. 13)";
 *#4: Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2;
 *TODO 5: Ignore draws this time;
 */
//-| TEST DATA 1:              
//> Dolphins Score 44, 23 and 71;
//> Koalas score 65, 54 and 49; 
//-| TEST DATA 2: 
//> Dolphins score;
//> Koalas score;

'use strict'; 

// const calcAverage = teamsAverage(score1, score2, score3) =>   / 3;

// // console.log(calcAverage);

// function calcAver(score1, score2, score3) {
//   const calCit = score1 + score2 + score3 / 3;
//   console.log(calCit);
//   return calCit;
// }
// // const calcAverage = calcAver(44, 23, 71) = avgDolphins;
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgDolphins * 2) {
    
//   } else if (avgKoalas > avgDolphins * 2) {
    
//   } else (-1) 
//     return `Unfortunately neither teams qualify a win!`;
//   }

// const data1Dolphins = data1Dolphins(44, 23, 71);
// const data2Dolphins = data2Dolphins(85, 54, 41);
// const data1Koalas = data1Koalas(65, 54, 49);
// const data2Koalas = data2Koalas(23, 34, 27);

// const calcAverage = calcAverage(44 + 23 + 71 / 3) => calcAverage;

// data1();

// console.log(data1Koalas);


//> Function to calculate the average of the 3 scores;
const calcAverage = (a, b, c) => (a + b + c) / 3;

//>Test 1 data
let scoreDolphins = calcAverage(44, 23, 71); //?changed from const to let
let scoreKoalas = calcAverage(65, 54, 49); //?changed from const to let
//>Test 2 data
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

const checkWinner = function (d, k) {
  if (d >= 2 * k) {
    console.log(`Dolphins win 🤑(${d} vs. ${k})`);
  } else if (k >= 2 * d) {
    console.log(`Koalas win 🤑(${k} vs. ${d})`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
// checkWinner(2, 200);

//>Test 2 data 2.0
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);




