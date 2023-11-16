'use strict'
// arrays 

const year = 2023;
const arrayInfo = ['Ervin', 1, 2, 3, function () { alert('hello world') }, year];
console.log(arrayInfo);


console.log(arrayInfo.at(-1)); // access for last element in array

// arrayInfo[4](); 

//========================================================================================================================================================

// array M E T H O D S 

// adding elements in array - end

const someArray = [1, 2, 3, 4, 5];

someArray.push('ervin');

console.log(someArray);

// adding elements in array - start

someArray.unshift('viktoria');

console.log(someArray);

// deleting elements in array - end

someArray.pop();

console.log(someArray);

// deleting elements in array - start

let deletedElementFromArray = someArray.shift();

console.log(someArray);

console.log(deletedElementFromArray);

//========================================================================================================================================================

console.log('---------');

// splice - adding, deleting, replacing elements in array

console.log(someArray);

someArray.splice(3, 1);

console.log(someArray);

someArray.splice(0, 1, 'new element');

console.log(someArray);

someArray.splice(0, 0, 'ervin', 'vika', 'lox');

console.log(someArray);

//========================================================================================================================================================
//includes

someArray.includes('ervin');

console.log(someArray.includes('ervin'));

// return true or false

//========================================================================================================================================================
//index of 

console.log(someArray.indexOf('lox'));

// returns index of element in array; if there is no such element - return -1

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
// cycle for

console.log('-----cycle-----');

for (let i = 0; i <= 10; i++) {
    console.log(`'this message appeared ${i}'`);
}

console.log('-----------------------------------------------------------------------------')

const cycleArray = [
    'John', 12, 20, 200 - 192, true, ['Anna', 'Vika', 'Dick'], 'Prague', 'Budapest'
];

for (let i = 0; i < cycleArray.length; i++) {
    console.log(cycleArray[i]);
}

console.log('-----');

for (let i = 0; i < cycleArray.length; i++) {
    if (typeof cycleArray[i] !== 'string') continue
    console.log(cycleArray[i]);
}

//========================================================================================================================================================
console.log('------')
//========================================================================================================================================================
for (let i = 0; i < cycleArray.length; i++) {
    if (typeof cycleArray[i] !== 'number') continue
    console.log(cycleArray[i]);
}
//========================================================================================================================================================
//break
console.log('------')

for (let i = 0; i < cycleArray.length; i++) {
    if (typeof cycleArray[i] === 'number') break
    console.log(cycleArray[i]);
}

//========================================================================================================================================================
