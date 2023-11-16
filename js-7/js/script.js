'use strict'

//========================================================================================================================================================
//getting variables

const tryAgainBtn = document.querySelector('.mainblock__againbutton');
const numberBetween = document.querySelector(".mainblock__numberbetween");
const numberBlock = document.querySelector(".mainblock__numberblock");
let input = document.querySelector(".footer-mainblock__input");
const checkNumber = document.querySelector(".footer-mainblock__button");
const attemps = document.querySelector(".attempts");
const record = document.querySelector(".record");
const title = document.querySelector(".mainblock__title");
const wrapper = document.querySelector(".wrapper");
const numberBlockText = document.querySelector(".footer-mainblock__text");

//========================================================================================================================================================

// random number function

function randomNumber(a = 1, b) {
    let randomN = Math.floor(Math.random() * b + a)
    numberBetween.innerHTML = `(Number between ${a} and ${b})`
    attemps.innerHTML = `${b}`
    return randomN;
}

let rN = randomNumber(1, 20);

numberBlock.innerHTML = rN;

console.log(numberBlock.innerHTML)

//========================================================================================================================================================
//button check addEventListener

checkNumber.addEventListener("click", () => {
    let currentRecord;

    if (attemps.innerHTML == 1) {
        alert("Press 'TRY AGAIN' button if you want to try again");
        checkNumber.disabled = true;
    }
    if (input.value == 0 || input.value > 20) {
        alert('Write correct number!')
    } else if (input.value == numberBlock.innerHTML) {
        attemps.innerHTML--;
        numberBlock.classList.add("sucssesful")
        title.innerHTML = 'YOU WON!';
        numberBlockText.innerHTML = 'Perfect';
        currentRecord = record.innerHTML = attemps.innerHTML;
        checkNumber.disabled = true;
        console.log(currentRecord);
        localStorage.setItem('currentRecord', record.innerHTML);
    } else if (+input.value > numberBlock.innerHTML) {
        attemps.innerHTML--;
        numberBlockText.innerHTML = 'Too big!'
    } else if (+input.value < numberBlock.innerHTML) {
        attemps.innerHTML--;
        numberBlockText.innerHTML = 'Too small!'
    }
});



//========================================================================================================================================================
//tryAgain

tryAgainBtn.addEventListener("click", () => {

    location.reload()

    let getRecord = localStorage.getItem('currentRecord');
    record.innerHTML = getRecord;

});


//========================================================================================================================================================
// attemps & record


