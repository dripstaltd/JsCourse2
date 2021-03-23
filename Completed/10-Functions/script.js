'use strict';
///////////////////////////////////////////////////////////////////
//////////////////////// * CLOSURES * ////////////////////////////
///////////////////////////////////////////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    setTimeout(function () {
      header.style.color = 'blue';
    }, 1000);
  });
})();

///////////////////////////////////////////////////////////////////
//> Example 1:
// defined and created in the global scope
let f;

const g = function () {
  const a = 23;
  // assigned f to a function
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// console.dir(f);

// Re-assigning f function
h();
f();
// console.dir(f);

//> Example 2:
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  // Timer
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
// Closures have priority EVEN over the scope chain!
const perGroup = 1000;
boardPassengers(180, 3);

///////////////////////////////////////////////////////////////////
/*

// Secure Booking Function + 1 passenger count
const secureBooking = function () {
  let passengerCount = 0;
  // Return Function 2
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// storing function under booker
const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);

*/
///////////////////////////////////////////////////////////////////
/*

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IIFE
(function () {
  console.log('This also will never run again!');
})();

(() => console.log('This arrow function will never run again'))();

*/
///////////////////////////////////////////////////////////////////
/*

1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:

1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?

0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
--------------------------------------------
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by

1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

-|The Complete JavaScript Course 21:

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀

const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:
C++"],
// This generates [0, 0, 0, 0]. More in the next section!
answers: new Array(4).fill(0),
};
*/
/////////////////////////////////////////////////////////////
// Declaring

/////////////////////////////////////////////////////////////
// functions
/*
/////////////////////////////////////////////////////////////
// checking the click function:
const btnClicked = function () {
  console.log('clicked');
};

/////////////////////////////////////////////////////////////
// poll object:
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')},
        \n(Write option number)`
      )
    );

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// getting the element by class name and executing function:
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/////////////////////////////////////////////////////////////
// Bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/
/////////////////////////////////////////////////////////////

/*
///////////////////////////////////////////////
const heathrow = {
  airline: 'London Heathrow',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, ${name}` });
  },
};

// heathrow.book(239, 'Benjamin McCarthy');
// heathrow.book(666, 'Donald Duck');
// console.log(heathrow);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = heathrow.book;

// Does not work:
// book(23, 'Giselle McCarthy');

// Call method
// book.call(eurowings, 23, 'Giselle McCarthy');
// book.call(heathrow, 239, 'Gareth McCarthy');
// console.log(eurowings);
// console.log(heathrow);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
// book.call(swiss, 787, 'Lewis McCarthy');

// Apply method takes an array
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);

// Call method taking array
book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(heathrow);
const bookLX = book.bind(swiss);
// bookEW(29, 'Steven Williams');

// Book function with 23 already defined
const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Benjamin McCarthy');

// With Event Listeners
heathrow.planes = 300;
heathrow.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', heathrow.buyPlane.bind(heathrow));

//> Partial application;
// Preset the parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
///////////////////////////////////////////////
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const ukTax = addTaxRate(0.23);
console.log(ukTax(300));
///////////////////////////////////////////////
const addVA = rate => value => value + value * rate;
const uSATax = addVA(0.3);
console.log(uSATax(300));
*/
///////////////////////////////////////////////
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
*/
/*
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');

greeterHey('Ben');
greeterHey('Giselle');

greet('Waguan')('Mumzie!');
*/
///////////////////////////////////////////////
/*
// replace all spaces in a string
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
console.log('....');
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('😘');
};

document.body.addEventListener('click', high5);
['Hob', 'Gucci Flip Flops', 'Peep'].forEach(high5);
*/
///////////////////////////////////////////////
// default parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);
*/
///////////////////////////////////////////////
/*
const flight = 'LH234';
const ben = {
  name: 'Benjamin McCarthy',
  passport: 28857403575,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 28857403575) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};
*/
/*

checkIn(flight, ben);
console.log(flight);
console.log(ben);
const flightNum = flight;
const passenger = ben;
*/
/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(ben);
checkIn(flight, ben);
*/
//-| javaScript Supports
/*
:First-Class-Functions:
all functions are values

:Higher-Order-Functions:
a function that recieves another
function as an argument, that
returns a new function or both

*/
