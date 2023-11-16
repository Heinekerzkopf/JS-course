let heightBody = document.querySelector("#height");
let weightBody = document.querySelector("#weight");
let button = document.querySelector("#button");
let outBody = document.querySelector("#result");

// function calcBody(weight, height, out) {
//     height = heightBody.value;
//     weight = weightBody.value;
//     let result = weight / height ** 2;
//     outBody.textContent = result;
// }

button.onclick = function () {
    let height = heightBody.value;
    let weight = weightBody.value;
    let result = weight / height ** 2;
    outBody.textContent = result;
    if (heightBody.value == 0 || weightBody.value == 0) {
        outBody.textContent = 'fill the field';
    }
}

//========================================================================================================================================================

let randomNum = Math.floor(Math.random() * 100);

// const fisrtName = prompt('First name');
// const secondName = prompt('Second name');

// if (fisrtName == null || secondName == null || fisrtName == '' || secondName == '') {
//     alert('Name wasnt written')
// } else {
//     alert(`compatibility of ${fisrtName} and ${secondName} is ${randomNum}%`);
// }

//========================================================================================================================================================

let height = 0;

console.log(height || 100);
console.log(height ?? 100);

//========================================================================================================================================================

// ternarnij operator ? :

const age = 23;

const drink = age >= 18 ? 'wine' : 'juice';

console.log(drink);

//========================================================================================================================================================

