'use strict'

// this 

const user = {
    name: 'John',
    age: '21',
    calcAge: function() {
        console.log(2023 - this.age);
    },
};


user.calcAge();

//========================================================================================================================================================

function calcAge() {
    console.log(2023 - this.age);

}

//========================================================================================================================================================

// this - we use this only in methods and functions

// 1. this in OBJECT METHOD => objects name

// 2. this in FUNCTION without OBJECT => undefined (but only with 'use strict')
// otherwise THIS => WINDOW

// 3. ARROW FUNCTIONS DOESNT HAVE THEIR CONTEXT; they take THIS from around
// return WINDOW

// 4. if we work with ADDEVENTLISTENER, then this = HMTL element

const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    this.style.color = 'red';
    console.log(this);
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
console.log('-------');
// destructurization of arrays
// destructurization of arrays
// destructurization of arrays

const array = [
    'apple',
    'orange',
    'lemon',
    'watermelon',
    'juice',
    'tea',
    'cocktail'
];

// 1.

let fruitOne = array[0];

console.log(fruitOne);

// 2.

let [, fruitTwo, fruitThree, fruitFour] = array;

console.log(fruitTwo, fruitThree, fruitFour);

//========================================================================================================================================================

// 3. we can get even 3 and 5 element if we want

const [ , , , , fruitFive, fruitSix] = array;

console.log(fruitFive, fruitSix);

//========================================================================================================================================================

// 4. we can change MEANING of the VARIABLES by this way

// example : 

console.log(fruitTwo, fruitOne);

[fruitOne, fruitTwo] = [fruitTwo, fruitOne];

console.log(fruitTwo, fruitOne);

//========================================================================================================================================================

// 5. functions

function cocktailMixer([fruit1, fruit2, , , , drink]) {
    console.log(`you made ${fruit1} + ${fruit2} ${drink}`);
}

cocktailMixer(array);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// destructurization of objects
// destructurization of objects
// destructurization of objects
console.log('---------------------------');
console.log('destructurization of objects');

const object = {
    fruits: {
        apple: 'apple',
        orange: 'orange',
        watermelon: 'watermelon',
        rapsberry: 'rapsberry',
        strawberry: 'strawberry',
        lemon: 'lemon',
        pear: 'pear',
        cherry: 'cherry',
        mango: 'mango',
    },

    drinks: {
        juice: 'juice',
        tea: 'tea',
        cocktail: 'cocktail'
    },
};

//========================================================================================================================================================

const { fruits: {lemon, mango} } = object;

console.log(lemon, mango);

//========================================================================================================================================================

const { drinks: {juice: drinkOne, tea: drinkTwo} } = object;

console.log(drinkOne, drinkTwo);

//========================================================================================================================================================

let cherry = 'smallCherry';
let pear = 'not good pear';

({ fruits: {cherry, pear} } = object);

console.log(cherry, pear);

// we can assign another value for already declared variables

function objectMixer({ fruits: {apple, orange}, drinks: {juice}}) {
    console.log(`You've made ${apple} ${juice} and ${orange} ${juice}`);
}

objectMixer(object);