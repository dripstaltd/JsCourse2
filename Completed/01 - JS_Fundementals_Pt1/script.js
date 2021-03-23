/*// Values= Smallest usable peices of data
let js = 'amazing';
// Logging to web console
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);
// CamelCase = camelCase (first word is lowercase if two worded variable)
//firstNamePerson, let first_name_person
// Declaration of the variable
let firstName = "Mattilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variables can contain (numbers,letters,underscores,dollarSign) b7_$
// Cannot start with a number or be reserved js keywords eg;
// - new
// - function
// - name
// VARIABLES ALL IN UPPERCASE are constants that we know will never change. eg: let PI = 3.1415;

let person = "jonas";
let PI = 3.1415;
// NOTE:
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let Job2 = 'teacher';

console.log(myFirstJob);

// ASSIGNMENT:
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions);
// 2. Log their values to the console;
let country = "country";
let continent = "continent";
let population = "population";

console.log(country, continent, population);
console.log(country);
console.log(continent);
console.log(population);
*/
/* Primitive dataTypes in Js:
Number:Floating Point Values, used by decimals and integers.
let age = 23;)

String:Sequence of characters Used for text.
let firstName = 'Jonas';)

Boolean: Logical type that can only be true of false, decisions.
let fullAge = true;

Undefined: Value taken by variable that's not defined('empty value')
let children;

Null: Also means 'empty value'
let children = null;

Symbol (ES2015): Value that is unique and cannot be changed.
BigInt(ES2020): Larger integers than the Number type can hold.



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


let age = 30; // Setting the variable 'age'
age = 31; // Mutating the variable 'age' to 31

const birthYear = 1991;
// Example of a variable that cannot be changed: birthYear = 1992;
// const job;
var job = 'programmer';
job = 'teacher';
// lastName = 'Schmedtmann';
// console.log(lastName);


// OPERATORS

// Math Operators

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3: 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison Operators: to create Boolean answer
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 Right to left.
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Precedence Table:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)

console.log(BMIMark, BMIJohn);
console.log(BMIMark > BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


// BMI = mass / height ** 2 = mass / (height * height)


const firstName = 'Ben';
const job = 'unemployed';
const birthYear = 1991;
const year = 2037;

const ben = "I'm " + firstName + ', a ' + (year - birthYear) + " year old, i'm currently " + job + '!';

console.log(ben);

const benNew = `I'm ${firstName}, a ${year - birthYear} year old, i'm currently ${job}!`;
console.log(benNew);

console.log(`Just a regular string...`);

// Multiple LINE STRING- Old way using (\n\)
console.log('String with \n\
multiple \n\
lines ');
// Multiple LINE STRING- New way press (enter)
console.log(`String with
multiple
lines`);


// DESCISIONS // if/else statement is called a (CONTROL STRUCTURE)

const age = 15;
// if (Boolean Condition) then execute {This}
if (age >= 18) {
    console.log('Sara can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤣`);
}
// NOTE: Condition is any code that returns a True/False Value
const birthYear = 1991;
let century;
let thSt;

if (birthYear <= 2000) {
    century = 20;
    thSt = "th";
} else {
    century = 21;
    thSt = "st";
}
console.log(`${century}${thSt} century`);


// CODING CHALLENGE #2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
let firstName;
let firstName2;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn)

if (BMIMark > BMIJohn) {
    firstName = "Mark's";
    firstName2 = "John's";
    console.log(`${firstName} BMI is ${BMIMark}, this is higher than ${firstName2} score of ${BMIJohn}!`);
} else {
    firstName = "John's";
    firstName2 = "Mark's";
    console.log(`${firstName} BMI is ${BMIJohn}, this is higher than ${firstName2} score of ${BMIMark}!`);
}


// #NOTE:
// 1# Type Conversion: Manually convert from one type to another
// 2# Type Coercion: Js Automatically converts behind the scenes for us

// #TYPE CONVERSION:
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ben'));
console.log(typeof NaN);

console.log(String(23), 23);

// #NOTE: Conversions Functions
// 1# To a Number: Number()
// 2# To a String: String()
// 3# To a Boolean: Boolean()

// #TYPE COERCION:
// Operation with a number between the string (''+2+'') CONVERTS TO: (''+String(2)+'')
console.log('I am ' + 23 + ' years old');
console.log('I am ' + String(23) + ' years old');
// Below the '-' Operation triggers the conversion to Numbers
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '2');
*/

// #NOTE: 
// 5 falsy values: 0, 'empty string', undefined, null, NaN
// Truthy values: {empty object}, string

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean());
// console.log(Boolean(''));
// console.log(Boolean(false));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(true));
/*
const money = 0;
if (money) {
    console.log(`You have £${money}`);
    console.log("Don't spend it all :)");
} else {
    console.log(`You have £${money}`);
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is UNDEFINED')
}


// #Equality Operators

const age = 18;
if (age == '18') console.log('You just became an adult :D (strict)'); //AVOID THIS!

if (age === 18) console.log('You just became an adult :D (loose)');


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23!')
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

// different from:
if (favourite !== 23) console.log('Why not 23');


// #BOOLEAN LOGICAL OPERATORS: Think of Truth Table

const hasDriversLicense = true; // A
const hasGoodVision = false; // B
const isTired = true // Variable C

console.log(hasDriversLicense && hasGoodVision); // AND Operator
console.log(hasDriversLicense || hasGoodVision); // OR Operator
console.log(!hasDriversLicense); // NOT Operator

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive!');
} else {
    console.log('Someone else should drive...')
}


const age = 16;
let qu1 = (age >= 20);
let qu2 = (age < 30);

console.log(!qu1);
console.log(qu1 && qu2);
console.log(qu1 || qu2);
console.log(!qu1 && qu2);
console.log(qu1 || !qu2);
*/



/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

const dWinner = ('Dolphins are the Winners!');
const kWinner = ('Koalas are the Winners!');
const teamsDraw = ('Teams Draw!')

if (scoreDolphins !== scoreKoalas || scoreDolphins > scoreKoalas)
{
    console.log(dWinner);
};
if (scoreDolphins !== scoreKoalas && scoreDolphins < scoreKoalas)
{
    console.log(kWinner);
}
if (scoreDolphins == scoreKoalas)
{
    console.log(teamsDraw);
}


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
const minScore = 100;

if (scoreDolphins > scoreKoalas && scoreDolphins >= minScore) {
    console.log("Dolphins get the Trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minScore) {
    console.log("Koalas get the Trophy!")
} else if (scoreKoalas >= minScore && scoreDolphins >= minScore) {
    console.log("Let's cut the Trophy in half?")
} else (console.log("Too Bad Loosers"));
*/

/*
const day = 'monday';

switch(day) {
    case 'monday': //day === 'monday' if true then execute 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare mock exams');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Become an astronaut');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Do nothing wooooop');
        break;
    default:
        console.log('Not a valid day!');
}

*/
/*
const day = 'monday';

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare mock exams');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Become an astronaut');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Do nothing wooooop');
} else {
    console.log('Not a valid day')
}
*/
/*

// EXPRESSIONS === Produces a Value!
3 + 4
1991
true && false && !false
// STATEMENT (Declaration) === Bigger piece of code which does NOT Produce a Value! Performs Actions

if (23>10) {
    const str = '23 is bigger';
}
// In a Template Literal i can only insert `${Expressions}` but not statements

console.log(`I'm ${2037 - 1991} years old`);
*/

/*
// Conditional (Ternary Operator because it has 3 parts) condition > ?if > :else
const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';


let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink);
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'} :)`);

// NOTE: Use Ternary Operators for quick decisions!! Not to replace if else Statements

*/


