'use strict';
//-| Execution Context;
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, your ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1991 && birthYear <= 1996) {
    var millenial = true;
    const firstName = `Steven`;
    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }
    output = 'NEW OUTPUT';
  }
  console.log(output);
  console.log(millenial);
  // console.log(add(2, 3)); // works without strict mode

  printAge();
  return age;
}

const firstName = 'Ben';
calcAge(1991);
*/

//-| Hoisting: ;
//: Makes some types of variables usable in the code before they are declared;

//-| TDZ = Temporal Dead Zone
//: jS executes line by line;
//: Dead Zone in a function before const / let, exists;
/**/
/**/
// console.log(me);
// console.log(job); // in temporal dead zone;
// console.log(year);
/**/
/*
var me = 'Ben';
let job = 'wasteman';
const year = 1991;
*/
/**/
//-| Functions;
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
/**/
/*
function addDecl(a, b) {
  return a + b;
}
/*
const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

//-| Hoisting Example                        ;
// Our if statement is written in the Temporal Dead Zone;
// var variables are hoisted and placed at the top as undefine;
// deleteShoppingCart is executed because it is a function declaration;
// Function Declarations are HOISTED;
// Undefined is a falsy value;
// The if statement executes with 0 products;

//:GHOST:
//: var numbProducts = undefined;
/*
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log();
console.log();
*/
//-|                                         ;
/**/
/**/
/**/
//-|                                         ;
/**/
//-| 'this' keyWord                          ;
//> (this.variable)                          ;
//> Created for every execution context      ;
//> Takes the value of (points to) the owner ;
//> Within function 'this' keyword is used   ;

//: Method 👉 this = <Object calling the method>
/* Object that is calling the method */
//: Simple function call 👉 this = undefined;
/* If in 'strict mode' the above would point 
to window (in the browser);*/
//: Arrow functions 👉 this = <surrounding function>
/* this of surround function (lexical this) */
//: Event Listener 👉 this = <DOM element>
/*<DOM element that the handler is attached to>*/
//-|                                         ;
/**/
/**/
/**/
//-|                                         ;
/**/
// console.log(this);
/**/
/*
const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(this);
};
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const ben = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
ben.calcAge();

const matilda = {
  year: 2017,
};
*/
//-| Swapping ownership of function          ;
// matilda.calcAge = ben.calcAge;
// matilda.calcAge();
// const f = ben.calcAge;
// f(); // there is no owner of this function;
//-|                                         ;
/**/
//-|    Regular Function Vs Arrow Function   ;
/**/
//-|                                         ;
//> All of this is in the global scope!      ;
/*
const ben = {
  firstName: 'Ben',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
ben.greet();
*/
//BUG; //! NEVER USE ARROW FUNCTION IN A METHOD;
//* Arrow Functions use it's parents 'this'  ;
//BUG; //! var will create a undefined variable in the global scope;
//-|                                         ;
//-|           Arguments keyword             ;
//-|                                         ;
/**/
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);
*/
//BUG; //! arguments keyword only works in regular expressions;
/*
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/
//-|                                         ;
//-|      Primitive Vs Reference Types       ;
//-|                                         ;
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Ben',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/
//-|                                         ;
//-|    Primitive Vs Objects in Practice     ;
//-|                                         ;
/**/
// Primitive types:
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Reference types:
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// Copying objects:
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
