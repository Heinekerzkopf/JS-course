'use strict'

// classes in JS

class NewCard {
    constructor(src, alt, price, oldPrice, type, description, parentElement) {
        this.src = src;
        this.parentElement = parentElement;
        this.alt = alt;
        this.price = price;
        this.oldPrice = oldPrice;
        this.type = type;
        this.description = description;
        this.sale = Math.floor((this.price / this.oldPrice) * 100 - 100) + '%';
    }
    render() {
        document.querySelector(this.parentElement).insertAdjacentHTML('beforeend',
            ` 
        <div class="card">
            <img class="card__img" src="${this.src}" alt="${this.alt}" />
            <div class="card__sale">${this.sale}</div>
            <div class="card__price">
            ${this.price}р<span class="card__old-Price"> <s>${this.oldPrice}р</s> </span>
            </div>
            <div class="card__type">${this.type}</div>
            <div class="card__descr">${this.description}</div>
        </div>
        `
        );
    }
}

// let copyOfCard = new NewCard(
//     '../img/tv-2.png', 
//     'tv-2', 
//     29990, 
//     38500, 
//     'Bestseller!',
//     'The best model of TV in year 2001 fr',
//     '.cards'
// );

document.querySelector(".btn").addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        new NewCard(
            `../img/tv-${i + 2}.png`,
            'tv-2',
            29990,
            38500,
            'Bestseller!',
            'The best model of TV in year 2001 fr',
            '.cards'
        ).render();
    }
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


// set - class Set
// set - class Set
// set - class Set

// set takes UNIC data from iteration objects like - arrays, pseudoarrays, string

// example:

const names = new Array(
    'Ervin',
    'Vika',
    'Viktor',
    'Jura',
    'Ervin',
    'Ivan',
    'Vika',
    'Viktor',
    'Masha'
);

let unicNames = new Set(names);

console.log(unicNames);

//========================================================================================================================================================

const updateNames = Array.from(unicNames);

console.log(updateNames);

//========================================================================================================================================================

const name = 'Viktor';

const uniqLetters = new Set(name);

console.log(uniqLetters);

for (let item of uniqLetters) {
    console.log(item + 1);
}

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
console.log('-------map-------');
// map - class Map
// map - class Map
// map - class Map

// arrays has NUMBER-KEYS, objects has STRING-KEYS, Set without-KEYS

// map - helps us to decide what KEY-TYPE we want 

const hotel = new Map();

hotel.set('category', ['sdt', 'eco', 'businness', 'premium', 'allInc', 'suit']);
hotel.set(true, 'we are open');
hotel.set(false, 'we are closed');

const someArray = [1, 2];

hotel.set(someArray, 'this is array');

console.log(hotel);

console.log(hotel.get(true));
console.log(hotel.get('category'));
console.log(hotel.get(someArray));

// same as Set - map has clear, size, delete, has etc.

console.log(hotel.size);
console.log(hotel.has(someArray));

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
console.log('----------------------');
// conversion of data structure
// conversion of data structure
// conversion of data structure

// smaller version of hotel.set:

const newHotel = new Map([
    ['categories', ['lux', 'prime', 'president', 'eco']],
    [true, 'we are open'],
    [false, 'we are closed'],
    ['price', ['lux: 2100$/month']],
]);

console.log(newHotel);

//========================================================================================================================================================

const objc = {
    name: 'Ervin',
    lastName: 'Koroman',
    age: '20',
    job: 'none'
};

// how to conversion OBJECT into an ARRAY?

const arrayFromObject = Object.entries(objc);

console.log(arrayFromObject);

// and how to conversion ARRAY(from obj) again into OBJ

const objfromArr = Object.fromEntries(arrayFromObject);

console.log(objfromArr);

//========================================================================================================================================================

// we conversion OBJ into ARRAY and we use class MAP to get MAP from OBJ

const mapFromOjb = new Map(Object.entries(objc))

console.log(mapFromOjb);

//========================================================================================================================================================

// we can make SET from MAP

const setFromMap = new Set(mapFromOjb);

console.log(setFromMap);

//========================================================================================================================================================

// from iteration OBJ make ARRAY

const arrFromMap = Array.from(mapFromOjb);

console.log(arrFromMap);

for ( let [key, value] of mapFromOjb) {
    console.log(`key: ${key}, value: ${value}`);
}

//========================================================================================================================================================





