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
