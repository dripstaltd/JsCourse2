"using strict";

/*.:|REGION|:.*/
/* The Complete JavaScript Course 23
------------------------------------
    < Working With Arrays >
------------------------------------
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
------------------------------------
:Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
------------------------------------
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
------------------------------------
2. Create an array with both Julia's (corrected) and Kate's data
------------------------------------
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶")
------------------------------------
4. Run the function for both test datasets
------------------------------------
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
/*.:|REGION|:.*/

const data1 = {
  jArr: [3, 5, 2, 12, 7],
  kArr: [4, 1, 15, 8, 3],
};
const data2 = {
  jArr: [9, 16, 6, 8, 3],
  kArr: [10, 5, 6, 1, 4],
};

const jDarr = data2.jArr;
const kDarr = data2.kArr;
let dogAges = [];

// Check Dogs Function
const checkDogs = function (
  // 1) Create shadow copy of julias array and remove the cats from the array. 0, -2
  dogsJulia = data1.jArr.slice(1, 3),
  dogsKate = data1.kArr
) {
  // 2) Create and array with both julias correct dogs and kates dogs in 1 array
  dogAges = [...dogsJulia, ...dogsKate];
  let dogNum = 1;
  // 3) for each remaining dog check weather it is a puppy or not
  dogAges.forEach((age) =>
    age >= 3
      ? console.log(`Dog number ${dogNum++}
      is an adult, and is ${age} years old`)
      : console.log(`Dog number ${dogNum++} is still a puppy
      🐶`)
  );
};

// Test Data 1
checkDogs();
// Test Data 2
checkDogs(jDarr, kDarr); //coding challenge #2 //////////////////////////////////////////
//////////////////////////////////////////
/*.:|REGION|:.*/

// const calcAverageHumanAge = function (arr) {
//   const humanAges = arr.map((arr) => (arr <= 2 ? 2 * arr : 16 + arr * 4));
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce(
//     (acc, age, _, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };

// const avg1 = calcAverageHumanAge(dogAges);

// console.log(avg1);

const calcAverageHumanAge = arr {
  const humanAges = arr.map((arr) => (arr <= 2 ? 2 * arr : 16 + arr * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );
  return average;
};