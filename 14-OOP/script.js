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

//////////////////////////////////////////////////////////////////
//-| INSTANCE METHODS                                            ;
//////////////////////////////////////////////////////////////////
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

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.greet();

const walter = new PersonCl('Walter', 1965);
*/
//////////////////////////////////////////////////////////////////
//-| SETTERS & GETTERS - DATA PROPERTIES                         ;
//////////////////////////////////////////////////////////////////
//> Functions that get or set a property                         ;
//////////////////////////////////////////////////////////////////
/*
const account = {
  owner: 'ben',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
console.log(jessica.age);
*/
//////////////////////////////////////////////////////////////////
//-| STATIC METHODS                                              ;
//////////////////////////////////////////////////////////////////
/*
PersonCl.hey = function () {
  console.log(`Hey there 🖐️`);
  console.log(this);
};
PersonCl.hey();
*/

//////////////////////////////////////////////////////////////////
//-| OBJECT.CREATE                                               ;
//////////////////////////////////////////////////////////////////
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

//////////////////////////////////////////////////////////////////
//-| Inheritance Between "Classes": Constructor Functions        ;
//////////////////////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); // This works because of line 231: Prototype Chain

// console.log(mike.__proto__);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//-| Nicotine;
/*
const NicotineProduct = function (
  nBrand,
  nCat,
  nType,
  nStrength,
  nSize,
  nLimit,
  nTotal
) {
  this.nBrand = nBrand;
  this.nCat = nCat;
  this.nType = nType;
  this.nStrength = nStrength;
  this.nSize = nSize;
  this.nLimit = nLimit;

  if (nCat === 'Oral' || nCat === 'Skin')
    this.nTotal = nTotal = nStrength * nSize;
};

const nicotinell = new NicotineProduct(
  'Nicotinell',
  'Oral',
  'Lozenge',
  1,
  204,
  12
);
const niQuitin = new NicotineProduct('NiQuitin', 'Skin', 'Patch', 14, 7, 1);
const nicoretteGum = new NicotineProduct('Nicorette', 'Oral', 'Gum', 2, 105, 6);

console.log(nicotinell, niQuitin, nicoretteGum);
*/
