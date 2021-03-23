'use strict';

//////////////////////////////////////////////////
//////////////////////////////////////////////////
// BANKIST APP
/*.:|REGION|:.*/
// Data
const account1 = {
  owner: 'Benjamin McCarthy',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Giselle McCarthy',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Gareth Sean Paul McCarthy',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Lewis McCarthy',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
/////////////////////////////////////////////////
const accounts = [account1, account2, account3, account4];
/////////////////////////////////////////////////
/*.:|REGION|:.*/
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
/////////////////////////////////////////////////
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
/////////////////////////////////////////////////
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
/////////////////////////////////////////////////
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/*.:|REGION|:.*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*.:|REGION|:.*/
/////////////////////////////////////////////////
// DEPOSITS CODE - Creating html with forEach
/////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  // use this to read data
  containerMovements.innerHTML = ' ';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/*.:|REGION|:.*/
// BALANCE
// displayMovements(account1.movements); // create usernames
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements); // CALL

/*.:|REGION|:.*/
/////////////////////////////////////////////////
// SUMMARY
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€ `;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€ `;
};
/////////////////////////////////////////////////
// calcDisplaySummary(account1.movements);
/*.:|REGION|:.*/
// USERNAMES
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Update UI function
const updateUi = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////

//Event handlers
let currentAccount;

//-----------
//LOGINSTART
//-----------
btnLogin.addEventListener('click', function (e) {
  // prevents form from submiting
  e.preventDefault();
  // find the user trying to login
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input feilds
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUi(currentAccount);
  }
});
//-----------
//LOGINEND
//-----------
// TRANSFER

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Clearing the feilds by setting value to an empty string
  inputTransferAmount.value = inputTransferTo.value = '';
  // Changing the balance of both accounts in transfer
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update Ui
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

// SORT Function
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*.:|REGION|:.*/
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/////////////////////////////////////////////////
/**/
/*.:|REGION|:.*/
// CONVERT € -> $
const eurToUsd = 1.1;
// using map method as an arrow function
const moveUSDArrow = movements.map(mov => mov * eurToUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// console.log(movementsDescriptions);
/*.:|REGION|:.*/

/*
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
*/
/*.:|REGION|:.*/

// console.log(movements);
// (acc) accumulator -> SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
// console.log(balance2);

/*.:|REGION|:.*/
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);
// console.log(movements);
// console.log('deposits');
// console.log(deposits);
// console.log('------------');
// console.log('withdrawals');
// console.log(withdrawals);
// console.log('------------');
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

/*.:|REGION|:.*/
// using map method to create and fill
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
// // logging
// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDfor);
// console.log(moveUSDArrow);
/**/
/*.:|REGION|:.*/
/*
// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/
// LECTURES
/*
// MAP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
/////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}
/////////////////////////////////////////////////
console.log('--- FOREACH ---');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
*/
/////////////////////////////////////////////////

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
// console.log(max);

/*.:|REGION|:.*/
const eurToUSD = 1.1;
// console.log(movements);
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUSD;
  })
  //.map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// filter
// finds the first element in the array with this condition
const firstWithdrawal = movements.find(mov => mov < 0);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
/*
for (const cur of accounts) {
  const currentAccount = cur.owner;
  const accountTry = accounts.find(acc => acc.owner === currentAccount);
}
*/

// console.log(movements);

// EQUALITY
// console.log(movements.includes(-130));

// CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
// const deposit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
/*
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr.flat());

const arrDeep = [
  [[1], [2], [3]],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrDeep.flat(2));
*/
/*
const overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

// Strings
const owners = ['Ben', 'jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// Ascending
movements.sort((a, b) => a - b);
console.log(movements);
// Descending
movements.sort((a, b) => b - a);
console.log(movements);
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// x.fill(1);
arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
