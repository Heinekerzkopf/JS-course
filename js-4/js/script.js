'use strict'

let i = 1;

do {
    console.log(`message appeared ${i} times`)
    i++
} while(i <= 10);

//========================================================================================================================================================

const objectOne = {
    name: 'Ervin',
    age: 21,
    city: {
        adress: 'idk'
    }
}

// how to copy the object - Object.assign({}, *obj name*);
// but we copy only first layer :d

const objectTwo = Object.assign({}, objectOne);

//========================================================================================================================================================

// shorter way

const objectThree = {...objectOne};

console.log(objectThree);

//========================================================================================================================================================
//========================================================================================================================================================

// HARD BUT VERIFIED WAY TO PROPERLY COPY THE OBJECTS

const objectFour = JSON.parse(JSON.stringify(objectOne));

objectOne.city.adress = 'New adress';

console.log(objectFour);
console.log(objectOne);

//========================================================================================================================================================
//========================================================================================================================================================


function finobacci(number) {
    let output = [];

    if (number === 1) {
        output = [0]
    } else if (number === 2) { 
        output = [0, 1]
    } else {
        output = [0, 1];
        for (let i = 2; i < number; i++) {
            output.push(output.at(-2) + output.at(-1))
        }
    } 

    return output
}

let result = finobacci(5);

console.log(result);

//========================================================================================================================================================
//========================================================================================================================================================

const header = document.querySelector(".header");

console.log(header.firstChild);

//========================================================================================================================================================


// pseudoarray into real array => 

// method Array.from();

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2
};

let newArray = Array.from(arrayLike);

console.log(newArray);

//========================================================================================================================================================

console.log('-----for of and for in-----');

 // for of - arrays

 const arrayForCycle = [1, 2, true, 'Ervin', 'Vika', 10];

 for (const item of arrayForCycle) {
    console.log(item)
 }

 // for in - objects (also array, pseudoarrays);
const objForCycle = {
    name: 'Ervin',
    age: 20,
    job: 'none',
    sex: 'male'
};

console.log('---------FOR IN---------')

for (const key in objForCycle) {
    console.log(`${key} : ${objForCycle[key]}`);
}

// we get KEYS from OBJECT or VALUES of KEYS

//========================================================================================================================================================

// arrays - for (), do while, for of 
// objects - for in 

//========================================================================================================================================================

