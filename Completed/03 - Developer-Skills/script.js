// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [45, -2, -6, -1, 'error', 9, 13, -8, 15, 14, 9, 5];

// 1) Understanding the Problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// What is a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp arr
// - Find min value in temp arr
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitudeNew);

// max = 3
// is 3 > 3) false
// moves to next position of loop
// is 7 > 3) true so max is now 7

//-| USING BREAKPOINT IN SOURCES to Debug   ;
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX BUG
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND BUG
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG
console.log(measureKelvin());
*/
//-| USING CHROME DEBUGGER TO FIX BUG      ;
/*
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  // let max = temps[0];
  // let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// BUG IDENTIFY
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
*/
//:Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
/*
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!
*/
//? TEST DATA 1: [17, 21, 23]
//? TEST DATA 2: [12, 5, -5, 0, 4]

//> 1) Understanding the problem
//> - Array transformed to string, separated by ...
//> - What is the X days? Answer: index + 1

//> 2) Breaking up into sub-problems
//> - Transform array into string
//> - Transform each element to string with ºC
//> - Strings needs to contain day (index + 1)
//> - Add ... between elements and start and end of string
//> - Log string to console

/*
const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i];
    const days = i + 1;
    const temp = String(arr[i]);
    if (days === 1) {
      console.log(`... ${tmp}°C in ${days} day ...`);
    } else {
      console.log(`... ${tmp}°C in ${days} days ...`);
    }
  }
};

console.log(printForecast(t1, t2));
*/

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}°C ... ${data1[1]}°C... ${data1[3]}°C...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
*/
