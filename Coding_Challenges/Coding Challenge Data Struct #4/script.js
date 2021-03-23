"using strict";
/*
Coding Challenge #4

>Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. 

>The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

:Test data (pasted to textarea, including spaces):
 underscore_case 
first_name 
  Some_Variable
calculate_AGE
 delayed_departure

:Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

:Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/
////////////////////////////////////////////////
// creating a text area and setting attributes
let txtArea0 = document.createElement("textarea");
txtArea0.id = "txtAreaID";
txtArea0.className = "txtAreaClass";

////////////////////////////////////////////////
// creating a new button and setting attributes
let btn0 = document.createElement("button");
btn0.id = "btnID";
btn0.className = "btnClass";
////////////////////////////////////////////////
// add elements to document
document.body.append(txtArea0);
document.body.append(btn0);
////////////////////////////////////////////////
// getting elements and storing them
const tA = document.querySelector("#txtAreaID");
const btn = document.querySelector("#btnID");
let text = "";
////////////////////////////////////////////////
// getting text content
tA.addEventListener("input", function () {
  text = this.value;
});
////////////////////////////////////////////////
// btn event handler
btn.addEventListener(
  "click",
  function (e) {
    myFunction();
  },
  {
    once: false,
  }
);

const myFunction = function () {
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
};

////////////////////////////////////////////////
/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/
////////////////////////////////////////////////
// const myFunction = function () {
//   const namesUpper = [];
//   const rows = text.split("\n");
//   for (const a of rows) {
//     const a1 = a.toLowerCase();
//     const a2 = row.split("_");
//     for (const n of a2) {
//       namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//   }
//   const [lower, upper] = namesUpper;
//   const n = lower.replace(lower[0], lower[0].toLowerCase());
//   console.log(n + upper);
//   console.log(rows);
// };
