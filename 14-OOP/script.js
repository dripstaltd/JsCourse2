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
*/
//////////////////////////////////////////////////////////////////
//>                                                              ;
//////////////////////////////////////////////////////////////////

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

/*
    This shows that 'firstName' is a property of 'ben'
*/
console.log(ben.hasOwnProperty('firstName'));
/* 
    Species is not a property of 'ben' because it is not really inside the ben object. However it has access to it because it's in the prototype property    of person.
*/
console.log(ben.hasOwnProperty('species'));
