"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/

const text = document.querySelector('.text').value;
const btn = document.querySelector(".btn");
const outputText = document.querySelector(".output");

//========================================================================================================================================================

btn.addEventListener("click", function () {

    const rows = text.split("\n");
    console.log(rows);
    const output = [];

    for (let item of rows) {
        const [first, second] = item.trim().toLowerCase().split("_");
        output.push(`${first}${second.replace(second[0], second[0].toUpperCase())}`)
    }

    outputText.innerText = output.join('\n');

});



//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// coming back to functions....

// default settings of functions

//========================================================================================================================================================

const bookings = [];

function createBooking(flightName = 'none', passengersNum = 0, price = 100 * passengersNum + '$') {
    const booking = {
        flightName,
        passengersNum,
        price,
    }

    console.log(booking);

    bookings.push(booking)

}

createBooking('03AVAX', 27);

createBooking('DOT123', undefined, 10);

// we can skip one of the arguments in function with 'undefined' word

//========================================================================================================================================================
//========================================================================================================================================================

// objects as an arguments in FUNCTION
// objects as an arguments in FUNCTION
// objects as an arguments in FUNCTION

const flight = 'AVAX123';
const passenger = {
    name: 'Ervin',
    passport: 123099810,
}

function checkIn(flightNum, passId) {
    flightNum = '111RRR'
    passId.name = 'Mr ' + passId.name;
}

checkIn(flight, passenger);

console.log(flight, passenger.name);

// as we see, variable didnt change it value, but object did

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// first class functions, higher order functions
// first class functions, higher order functions
// first class functions, higher order functions

// first class functions

function oneWord(string) {
    return string.replaceAll(' ', '').toLowerCase();
}

console.log(oneWord('Ervin is the best guyADASD loOOLL'));

// first class functions

function upperFirstLetter(string) {
    const [first, ...other] = string.split(' ');
    return [first[0].toUpperCase() + first.slice(1), ...other].join(' ');
}

console.log(upperFirstLetter('ervin, yes thats my name brothers'));

//========================================================================================================================================================

// higher order functions

function transformer(string, someFunction) {
    console.log(`this is the original string: ${string}`);
    console.log(`this is the updated string: ${someFunction(string)}`);
}

transformer('hello, guys, I really like JS, but im DUmb af mf', upperFirstLetter);

// return function - higher order functions
// return function - higher order functions
// return function - higher order functions

//========================================================================================================================================================

function hello(text) {
    return function (name) {
        console.log(`${text}, ${name}`);
    };
}

const greeter = hello('Hi');

greeter('Ervin');

// orrrrrr we can do this:

hello('Good afternoon')('Ervin');


