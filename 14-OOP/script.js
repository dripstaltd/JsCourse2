'use strict';
//////////////////////////////////////////////////////////////////
//-|  Constructor Function + New Operator                        ;
//////////////////////////////////////////////////////////////////
/** 
- Arrow functions do not work because we need our own THIS KEYWORD
- Call constructor functions using 'new'

// 1. New {} is created
// 2. function's called |this keyword set to the newly created {}
// 3. {} linked to prototype
// 4. function automatically return {}
*/
//////////////////////////////////////////////////////////////////
//>                                                              ;
//////////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ben = new Person('Ben', 1991);
const giselle = new Person('Giselle');

console.log(ben);
