'use strict';
//////////////////////////////////////////////////////////////////
//-|  Constructor Function + New Operator                        ;
//////////////////////////////////////////////////////////////////
/** 
- Arrow functions do not work because we need our own THIS KEYWORD
- Call constructor functions using 'new'
- Capitalize the name of the {Instance} 

// 1. New {} is created
// 2. function's called |this keyword set to the newly created {}
// 3. {} linked to prototype
// 4. function automatically return {}


// #1. Classes are not hoisted
// #2. Classes are first-class citizens
// #3. Classes are executed in 'strict mode';
*/
//////////////////////////////////////////////////////////////////
//>                                                              ;
//////////////////////////////////////////////////////////////////
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ben = new Person('Ben', 1991);
const giselle = new Person('Giselle', 1960);
const lewis = new Person('Lewis', 1992);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

ben.calcAge();
giselle.calcAge();
lewis.calcAge();

console.log(Person.prototype);
console.log(ben.__proto__);
console.log(ben.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(giselle));
// Honest name: Prototype of linked objects
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(ben.species, lewis.species);
*/
/*
    This shows that 'firstName' is a property of 'ben'
*/

// console.log(ben.hasOwnProperty('firstName'));
/* 
      Species is not a property of 'ben' because it is not really inside the ben object. However it has access to it because it's in the prototype property    of person.
*/
// console.log(ben.hasOwnProperty('species'));
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/* 
      Person.prototype is NOT the prototype of Person, but all the
      objects created through the Person function.
*/
//////////////////////////////////////////////////////////////////
//-| The NEW Operator.                                           ;
//////////////////////////////////////////////////////////////////
/*
  1.  And empty {object} is created
  2.  this.keyword in constructor function call is set to the new object.
  3.  The new object is linked (__proto__property) to the constructor
      function's prototype property.
  4.  The new object is returned from the constructor function call.
*/
/*
console.log(ben.__proto__); // Person.prototype
console.log(ben.__proto__.__proto__); // Object.prototype
console.log(ben.__proto__.__proto__.__proto__); // End of chain

console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 6, 6, 8, 2, 5];
console.log(arr.__proto__); // Array Property
console.log(arr.__proto__ === Array.prototype);
// Array.prototype inherits object properties
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

//> Class expression
/*
const PersonCl = class {};
*/
//> Class declaration
/*
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet = function () {
    console.log(`Hey ${this.firstName}`);
  };
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
*/

//////////////////////////////////////////////////////////////////
//-| SETTERS & GETTERS - PROPERTIES                              ;
//////////////////////////////////////////////////////////////////
