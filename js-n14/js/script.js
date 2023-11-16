'use strict'

// function method 'call'
// function method 'call'
// function method 'call'

function greeter(someText) {
    console.log(someText + " " + this.firstName + " " + this.lastName);
}

const userOne = {
    firstName: 'Ervin',
    lastName: 'Koroman'
}

const userTwo = {
    firstName: 'Vika',
    lastName: 'Koromanová'
}

greeter.call(userOne, 'Good afternoon,');

//========================================================================================================================================================

const s7 = {
    airline: 's7',
    iCode: 'S7',
    booking: [],
    book(flightNumber, userInfo) {
        console.log(`${userInfo} booked flight at the company ${this.airline}, flight number
        ${this.iCode}${flightNumber}`);
        this.booking.push({ flight: `${this.iCode}${flightNumber}`, userInfo })
        // console.log(this.booking);
    },
}

s7.book(51285, 'Ervin Koroman');

const turkishAirlines = {
    airline: 'tr2',
    iCode: 'TR',
    booking: [],
}

const book = s7.book;

book.call(turkishAirlines, 8932, 'Ervin Koroman');

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
console.log('-------bind');
// function method - bind
// function method - bind
// function method - bind

// we can bind some value for 'this' so we dont get ERROR

const bookerTR = s7.book.bind(turkishAirlines);

bookerTR(20194, 'Jevgenij');

turkishAirlines.planes = 300;

turkishAirlines.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

const planerBuyer = turkishAirlines.buyPlane.bind(turkishAirlines);

const btn = document.querySelector(".button");

btn.addEventListener("click", planerBuyer);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// basic arrays methods

const arrayOne = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arrayOne.slice(2));
console.log(arrayOne); // slice doesnt change the original array

// with 'slice' method we can make a copy of the array as well

// =>

const newArraySlice = arrayOne.slice(0);

console.log(newArraySlice);

// but spread is easier, soooo ===>  const newArraySpread = [...arrayOne];

//========================================================================================================================================================

// reverse - reversing elements in the array (also changes the original array);

const arrayTwo = [1, 2, 3, 4, 56, 7];

console.log(arrayTwo.reverse());
console.log(arrayTwo);

//========================================================================================================================================================

// concat

console.log(arrayOne.concat(arrayTwo)); // doesnt change the original array(s);

// concat helps us to CONCAT two arrays

// also we can do the same thing with method spread :)

console.log([...arrayOne, ...arrayTwo]);

//========================================================================================================================================================

// also lets not forget about really powerful method of arrays = SPLICE
// thanks to SPLICE we can delete or add specific elements at the specific places

const userArr = ['John', 30];

userArr.splice(0, 2, 'Ervin', 20); // replacing first and second elements of the array

console.log(userArr);

//========================================================================================================================================================

userArr.splice(1, 1); // deleting first element of the array

//========================================================================================================================================================

userArr.splice(1, 0, 'IT lover'); // just adding something without replacing or deleting

console.log(userArr);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// how does forEach works?
// lets find out!
// forEach ----
// forEach ----
// forEach ----
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log('fortEach----------------------------------------------------');
console.log(' ');

//========================================================================================================================================================

const arrForEach = ['a', 'b', 'c'];

arrForEach.forEach(function (value, index, arr) {
    console.log(value, index, arr);
})

//========================================================================================================================================================
//========================================================================================================================================================

// forEach on Map() and Set();
// forEach on Map() and Set();
// forEach on Map() and Set();

const map = new Map([
    ['USD', 'Dollars'],
    ['EUR', 'Euros'],
    ['CZK', 'Czech Crones'],
    ['RUB', 'Rubli']
]);

map.forEach(function (value, index, map) {
    console.log(value, index, map);
})

//========================================================================================================================================================

const set = new Set(map);

set.forEach(function (value, index, set) {
    console.log(value, index, set);
})
// as we know, set does have key

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


