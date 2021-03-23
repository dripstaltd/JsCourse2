'use strict'; 

// -| Titles                             
// > This is where i type project Notes  
// Standard Comments
// ? 
// *
// !
//: 



//-|                FUNCTIONS                    
// > has to be the very first line of code to use Strict Mode. (Secures Code) creates visual errors and forbids us to do certain things;

// let hasDriversLicense = false;
// const passTest = true;

//: We want to write some logic so that that when they pass the test hasDriversLicense changes to true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

//-| RESERVED WORDS FOR FUTURE USE BY JAVASCRIPT 
// > const interface = 'Audio';                  
// > const private = 534;                        
// > const if = 534;                             


// function logger() {FUNCTION BUDDY}
// function logger() {
//   console.log('Hi My name is What?');
// }

// invoking / running / calling function
// logger();
// logger();
// logger();

// > Creates the values of apples, oranges as juice
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// 
// Sets the values of apples, oranges and saves the value under a variable.
// const appleJuice = fruitProcessor(5, 0); 
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// -|               DRY CODE:                 
// > Reusable code so to not repeat ourselves.


//-|                     FUNCTIONS                            
//-|            DECLARATIONS & EXPRESSIONS                    
//> Functions are values that can be stored inside a variable;
//-|                    Declaration;                          
//> Can be called before they are defined;                    
//> Giving the function a name;                               
//> (declaring the function) (nameTheFunction) (function parameter) { (code) (return ) };
//>                                                           
/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//> (functionName) (Function Arguments / which fills in the function parameter placeholder);
const age1 = calcAge1(1991);
*/

//-|                   EXPRESSIONS;                           
//> No name (anonymous function);                             
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//-|                ARROW FUNCTIONS;                          
//> Good for executing 1 parameter and 1 line of code;        
//> Shorter function expression;                              
//>                                                           
//>                                                           
//-| Arrow function                                           

/*
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log (yearsUntilRetirement(1991, 'Ben'));
*/
//-|  FUNCTIONS CALLING OTHER FUNCTIONS                                                 
//>   line 123: apples we set as 2;                                                     
//>   line 110: Creates a function that cuts value into 4;                              
//>   line 117: We call Line 110 function;                                              
//>   line 120: We output a template string with out new values stored in placeholders; 

/*
const cutPieces = function (fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {

  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2,3));
*/
//-|       REVIEWING FUNCTIONS                  
//>  function ( THIS IS LOCAL TO THE FUNCTION); 
//>                                             
//>                                             
//>  return exits!                              
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if(retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
    console.log(`${firstName} retires in ${retirement} years`); //* invalid placement
  } else {
    // console.log(`${firstName} has already retired `);
    return `${firstName} has already retired `;
  }
}
console.log(yearsUntilRetirement(1991, 'Benjamin'));
console.log(yearsUntilRetirement(1950, 'Sunny'));
*/
//>   Three different ways of writing functions, but they all work in a similar way;  
//>                        Receive INPUT data, TRANSFORM data, and then OUTPUT data;  

//-| INTRODUCTION TO ARRAYS  
//>                   
/*
const friends = ['Michael', 'Steven', 'Peter']; // literal syntax


const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Ben';
console.log(friends);
//friends = ['yourmum', 'biscuits']; //! NOPE
const firstName = 'Benjamin';
const ben = [firstName, 'McCarthy', 2021 - 1991, 'Driven!', friends];

console.log(ben);
console.log(ben.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

const years = [1991, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);
*/
//-| Array Operations / Methods             
//>  Push Method adds to the end of array;  
//>                                         
//>                                         
/*
const friends = ['Michael', 'Steven', 'Dennis'];

// Adds elements
//To the end [.length - 1]
const newLength = friends.push('Jack');
console.log(friends);
console.log(newLength);
// to position [0]
friends.unshift('Jenn');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Bob'));

friends.push('23');
console.log(friends.includes('Steven'));
console.log(friends.includes('Graham'));
console.log(friends.includes('23'));

if (friends.includes('Mohammed')) {
  console.log(`Mohammed is already here!`);
} else {
  friends.push('Mohammed');
  console.log(`Mohammed has been added!`);
  console.log(friends.includes('Mohammed'));
  console.log(friends);
}
*/


//-| Coding Challenge ['arrays', 'array', '4rr4y5' ];  


// const bills = [125, 555, 44]
// function calcTip(bill) {
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return bill;
// }
// const tips = new Array [];
// console.log(calcTip(bills[0]));



// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);


//-| OBJECTS!                     
//> Arrays for Ordered Data       
//> Objects for un-organized data 
//>                   
/*
const benjamin = { // Object literal syntax
  firstName: 'Ben',
  lastName: 'McCarthy',
  age: 2021 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Dennis']
};
console.log(benjamin);

console.log(benjamin.lastName); //# DOT OPERATOR  '.'  
console.log(benjamin['lastName']);

const nameKey = 'Name';
console.log(benjamin['first' + nameKey]);
console.log(benjamin['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Ben? Choose between firstName, lastName, age, job, short and friends');

if(benjamin[interestedIn]) {
  console.log(benjamin[interestedIn]);
} else {
  console.log('Wrong request! Please choose between firstName, lastName, age, job and friends');
}

benjamin.location = 'London';
benjamin['instagram'] = '@l_ucasmac';
console.log(benjamin);

//-| Challenge   
//> "Benjamin has 3 friends, and his best friend is called Michael";

console.log(benjamin.friends.length);

benjamin.bestFriend = 'Michael';
benjamin.short = (`${benjamin.firstName} has ${benjamin.friends.length} friends, his best friend is called ${benjamin.bestFriend}`); //# ${benjamin.friends[0]};
*/
//-|                                                             ;
//-|              Objects & Object Methods Methods               ;
//-|                                                             ;
//>                                                              ;
//>  -  Any function connected to an Object is called a 'Method' ;
//>  - function inside an object uses : becomes a property       ;
//>  - Declarations DON'T work here, only function Expressions   ;
//>                                                              ;

/*
const ben = {

  //> object properties;
  firstName: 'Ben',
  lastName: 'McCarthy',
  birthYear: 1991,
  job: 'Ginger',
  sex: 'Male',
  family: ['Giselle', 'Gareth', 'Lulu'],
  hasCBT: true,

  //> function expression, using 'this' keyWord;
  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // }

  //-| Creating a new property with ... this ...                              ;
  //> same as above but taking 'this' keyword one step further                ;
  //> using 'this' to create a property called age                            ;
  //> this.age stores the value produced by '2021 - this.birthYear' expression;

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  
  //> MY FIRST FUNCTION SOLELY CREATED BY ME!
  genderSet: function () {
    if (this.sex == 'Male') {
      this.hisHers = 'his';
      this.heShe = 'he';
      this.himHer = 'him';
      return this.hisHers, this.heShe, this.himHer;
    } else {
      this.hisHers = 'hers';
      this.heShe = 'she';
      this.himHer = 'her';
      return this.hisHers, this.heShe, this.himHer;
    }
  },

  validCBT: function () {
    if (this.hasCBT == true) {
      this.vCBT = `currently holds a valid CBT.`;
      return this.vCBT;
    } else {
      this.nvCBT =`currently does not hold a valid CBT.`;
      return this.vCBT;
    }
    
  },

  getSummary: function () {
    ben.genderSet();
    this.summary = `${this.firstName} ${this.lastName} is a fully qualified ${this.job}, ${this.heShe} is ${this.age} years old, and ${this.hasCBT ? 'currently holds a valid CBT.' : 'currently does not hold a valid CBT.'} ${this.firstName} has ${this.family.length} family members, ${this.hisHers} family members are called ${this.family} and they love ${this.himHer} very much.`;
    return this.summary;
  }
};

ben.getSummary();
console.log(ben.summary);


console.log(ben.hisHers);
console.log(ben.himHer);
console.log(ben.heShe);

// console.log(ben.calcAge(ben.birthYear)); // accessing the property using the birthYear property;
// console.log(ben.calcAge(1991)); // accessed via 'dot operator';
// console.log(ben['calcAge'](1991));// accessed via 'Bracket operator';
console.log(ben.calcAge());//> Changed the calcAge function / property to not require a parameter;
console.log(ben.age);//> this is the most efficient solution!
*/




//-|                                                             ;
//-|                  Iteration: The for Loop                    ;
//-|                 -------------------------                   ;
//-|                                                             ;
//>                                                              ;
//>  - Loops allow us to automate repetitive tasks, tasks, tasks ;
//>                                                              ;

//: Below is what a for loop will make easier;
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');

//> for loop keeps running while condition is TRUE
// for(counter variable; condition 'time'; repetition + number of steps) { executable code } 
/*
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/
//-|                                                         ;
//-|           Looping Arrays, Breaking & Continuing         ;
//-|           -------------------------------------         ;
//-|                                                         ;
//>                                                          ;
//>  -  Remember Arrays start at [0] so i = 0                ;
//>                                                          ;

//-|                                                         ;
const benArray = [
  'Ben',
  'McCarthy',
  2037 - 1991,
  'Ginger',
  ['Giselle', 'Gareth', 'Lulu'],
  true
];
//: Creates an empty Array;
const types = [];

//: we want to log positions:
//: [0] = 'Ben';
//: [1] = 'McCarthy';
//: ... up to;
//: [5] = [family names];
//: [6] = does not exist so stops here
//-|                                                         ;
for(let i = 0; i < benArray.length; i++) {

// Reading from benArray;
  console.log(benArray[i], typeof benArray[i]);

// Filling the array;
  // types[i] = typeof benArray[i];
  // types.push(typeof benArray[i]);
};
// console.log(types);

//-|                                                         ;
//> Use for looping ARRAYS; 
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// // 
// for(let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// };

// console.log(ages);
//-|                                                         ;
//-|                   Continue & Break                      ;
//-|                                                         ;
//>              Loop Statement: Continue                    ;
//: Exit the current iteration of the loop, continue to next ;
//>                Loop Statement: Break                     ;
//: Break is used to terminate the entire loop               ;
//-|                                                         ;

// console.log('--- ONLY STRINGS ---');
// for(let i = 0; i < benArray.length; i++) {
//   if(typeof benArray[i] !== 'string') continue;
//     console.log(benArray[i], typeof benArray[i]);
//   }; 

//   console.log('--- BREAK WHEN NUMBER IS FOUND ---');
//   for(let i = 0; i < benArray.length; i++) {
//     if(typeof benArray[i] === 'number') break;
//       console.log(benArray[i], typeof benArray[i]);
//     }; 

//> Counting Backwards and starting from the last position
// const ben = [
//   'Ben',
//   'McCarthy',
//   2037 - 1991,
//   'Ginger',
//   ['Giselle', 'Gareth', 'Lulu'],
// ];

// 0, 1, ..., 4;
// 4,3, ...,0;

// for(let i = ben.length - 1; i >= 0; i--) {
//   console.log(i, ben[i]);
// };

//>                                                          ;

/*
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🤢`);
  };
};
*/
//>                    END OF for LOOP                       ;


//-|                                                         ;
//-|                     while LOOP                          ;
//-|                                                         ;
//> while: while loop can only specify a (condition)         ;
//: while: When we don't know how many times it should run   ;
//> like a dice roll Math.trunc(Math.random() * 6) + 1;      ;
//:                                                          ;
//-|                                                         ;

// For Comparison:
// for (let rep = 1; rep < 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🤢`);
// };
// 

// let rep = 1;
// while (rep <= 10) {
  // console.log(`WHILE: Lifting weight repetition ${rep} 🤢`);
//   rep++;
// };
//

//-| DICE ROLLS                                              ;
//> start with a random dice number                          ;
// let dice = Math.trunc(Math.random() * 6) + 1; 
//> checking if that number is different from 6              ;
// while (dice !== 6) {
  //> logging the dice roll if not 6                         ;
  // console.log(`You rolled a ${dice}`);  
  //> creating a new dice number                             ;
  // dice = Math.trunc(Math.random() * 6) + 1;
  //> if dice is a the log it                                ;
  //? if statement can contradict.... why, how?              ;
  // if (dice === 6) console.log(`Congrats, You rolled a ${dice}!`)
// };

