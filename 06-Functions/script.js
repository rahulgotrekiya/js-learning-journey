'use strict';

/*

// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
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
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

*/

/*

//------------------------------------------------//

// How Passing Arguments Works: Value vs. Reference

const flight = 'Lh234';
const rahul = {
  name: 'Rahul Gotrekiya',
  passport: 343452123224,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 343452123224) {
    alert('Check In ');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, rahul);
// console.log(flight);
// console.log(rahul);

// // Is the same ad doing...
// const flightNum = flight;
// const passenger = rahul;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(rahul);
checkIn(flight, rahul);

*/

/*

//------------------------------------------------//

// Functions acepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const trasformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Trasformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

trasformer('JavaScript is the best !', upperFirstWord);
trasformer('JavaScript is the best !', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('👋');
};``
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

/*

//--------------------------------//

// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Rahul');
greeterHey('Meet');

greet('Hello')('Rahul');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Rahul');

*/

//--------------------------------//

// The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Rahul Gotrekiy');
lufthansa.book(634, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Devayat Khavad');

// Call method
book.call(eurowings, 23, 'Devayat Khavad');
console.log(eurowings);

book.call(lufthansa, 242, 'Aditya Gadhavi');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 112, 'John Snow');
console.log(swiss);

// Apply method
const flightData = [563, 'Walter White'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//--------------------------------//

// Bind Method

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Rahul Gotrekiya');
bookEW23('Sachin Tholiya');

// With Event Listners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(23));
