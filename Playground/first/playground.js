"use strict";

// > Declaring a couple things first, using 'let' as they will change with user input;
/*
let ns;
let dw;
let bs;
let tc;
const bsS = (10, 25, 30, 50, 60, 70, 80, 100, 120, 150, 200);
*/
//-| Final Calculation
/*
const nel = (a, b, c) => (a * b) / c;
*/
//-| Pre Calculations depending on user input
/*
function bAdjust(a, b, c) {}
*/
//>                                                                        ;
//-| Coding challenge ideas:                                               ;
//>                                                                        ;
//>                                                                        ;
//> -Challenge #1:                                                         ;
//>                                                                        ;
//> Determine students current stage of the course                         ;
//> Set an empty variable tag called 'tag' ?                               ;
//> Place them in the same pool as other students at the same level        ;
//> Students must work together to help each other before asking for help  ;
//> But not students who are further ahead than they are                   ;
//>                                                                        ;

//>                                                                        ;
//>                          Challenge #2:                                 ;
//>                                                                        ;
/*
const colorPickerArr = [
  "BC 7C 0F",
  "B8 73 10",
  "C3 88 1B",
  "2D 11 0B",
  "0C 21 0F",
  "15 1F 2A",
  "49 49 28",
  "4A 4B 2B",
  "5E 62 37",
  "54 5B 3D",
  "64 67 3A",
  "5E 5D 36",
  "4F 4D 2C",
  "49 47 27",
];
*/
//-| Setting Colors to the Numbers on Roulette Wheel;
/*
let rG = "";
let rB = "";
let colorIs = [];
*/
//-| Looping through colorPickerArr;
/*
for (let i = 0; i < colorPickerArr.length; i++) {
  // Grabbing 1st Character in array
  const charOne = colorPickerArr[i].charAt(colorPickerArr[i].length - 8);
  if (
    charOne === "B" ||
    charOne === "C" ||
    charOne === "4" ||
    charOne === "5" ||
    charOne === "6"
  ) {
    colorIs.push("Yellow");
  }
  if (charOne === "2") {
    colorIs.push("Red");
  }
  if (charOne === "0") {
    colorIs.push("Green");
  }
  if (charOne === "1") {
    colorIs.push("Blue");
  }
  console.log(colorIs);
}
*/
let yellow;
let blue;
let green;
let red;

let colorIs = [];

//-| Second try with what i have learnt with destructuring >>
const colorPickerArr = [
  "BC 7C 0F",
  "B8 73 10",
  "C3 88 1B",
  "2D 11 0B",
  "0C 21 0F",
  "15 1F 2A",
  "49 49 28",
  "4A 4B 2B",
  "5E 62 37",
  "54 5B 3D",
  "64 67 3A",
  "5E 5D 36",
  "4F 4D 2C",
  "49 47 27",
];

const arr = colorPickerArr;
let eCP = [];
let temp = [];
let cT = [];
const colors = [[yellow], [blue], [red], [green]];

let yellowOne = [];

for (let i = 0; i < colorPickerArr.length; i++) {
  const spin = colorPickerArr[i];
  eCP.push(spin.replace(/\s/g, ""));
}
console.log(eCP);

for (let i = 0; i < eCP.length; i++) {
  const charOne = eCP[i].charAt(eCP[i].length - 6);

  if ((charOne === "B", "C")) {
    console.log("Yellow");
  }
  // element 1 has been selected      >>
  // what do i want to do with it?    >>
  else if (
    charOne === "B" ||
    charOne === "C" ||
    charOne === "4" ||
    charOne === "5" ||
    charOne === "6"
  ) {
    colorIs.push("Yellow");
  }
  if (charOne === "2") {
    colorIs.push("Red");
  }
  if (charOne === "0") {
    colorIs.push("Green");
  }
  if (charOne === "1") {
    colorIs.push("Blue");
  }
  console.log(colorIs);
  colorIs.push(charOne);
}

console.log(temp);
