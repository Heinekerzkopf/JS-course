'use strict'

// buttons
const modalButtonOne = document.querySelector(".modal__button-one");
const modalButtonTwo = document.querySelector(".modal__button-two");
const modalButtonThree = document.querySelector(".modal__button-three");

// blocks
const modalBlockOne = document.querySelector(".modal__block-one");
const modalBlockTwo = document.querySelector(".modal__block-two");
const modalBlockThree = document.querySelector(".modal__block-three");

// close button
const modalCloseButtonOne = document.querySelector(".modal__close-btn-one");
const modalCloseButtonTwo = document.querySelector(".modal__close-btn-two");
const modalCloseButtonThree = document.querySelector(".modal__close-btn-three");

// overlay
const modalOverlay = document.querySelector('.modal__overlay');

//========================================================================================================================================================

// closing
modalCloseButtonOne.addEventListener("click", () =>{
    modalBlockOne.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});
modalCloseButtonTwo.addEventListener("click", () =>{
    modalBlockTwo.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});
modalCloseButtonThree.addEventListener("click", () =>{
    modalBlockThree.classList.add('hidden');
    modalOverlay.classList.add('hidden');
});
//========================================================================================================================================================

// showing
modalButtonOne.addEventListener("click", () => {
    modalBlockOne.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
});
modalButtonTwo.addEventListener("click", () => {
    modalBlockTwo.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
});
modalButtonThree.addEventListener("click", () => {
    modalBlockThree.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
});

//========================================================================================================================================================
// closing by OVERLAY

modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.add('hidden');
    modalBlockOne.classList.add('hidden')
    modalBlockTwo.classList.add('hidden')
    modalBlockThree.classList.add('hidden')
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
// ABC game

// boxes
const alphabetBox = document.querySelectorAll(".alphabet__box")

const boxA = document.querySelector(".box_a");

const boxB = document.querySelector(".box_b");

const boxD = document.querySelector(".box_d");

const boxF = document.querySelector(".box_f");

const boxE = document.querySelector(".box_e");

const alphabetBoxes = document.querySelector(".alphabet__boxes");

const title = document.querySelector(".alphabet__title");

const finish = document.querySelector(".finish");
//========================================================================================================================================================


// audio

const audioWin = new Audio('../audio/huge win.wav')
const audio = new Audio("../audio/Mountain Audio - Menu Click.mp3");

//========================================================================================================================================================

//function 

alphabetBox.forEach((item) => {
    item.addEventListener("click", () => {
        audio.play();
        if(item.previousElementSibling != null) {
            item.after(item.previousElementSibling);
        } else if (item.nextElementSibling != null) {
            item.nextElementSibling.after(item);
        }
        if(boxA == alphabetBoxes.firstElementChild && 
            boxF == alphabetBoxes.lastElementChild && 
            boxB == boxA.nextElementSibling && 
            boxE == boxF.previousElementSibling && 
            boxD == boxE.previousElementSibling) {
            audioWin.play();
            title.innerHTML = 'YOU WON!!!';
            finish.classList.remove("hiddenTwo");
        }
    })
});

//========================================================================================================================================================

// another way = 

// const letters = document.querySelectorAll(".alphabet__box");

// let newLetters;

// for(let i = 0; i < letters.length; i++) {
//     letters[i].addEventListener("click", () => {
//         audio.play();
//         if (letters[i].previousElementSibling != null) {
//             letters[i].previousElementSibling.before(letters[i]);
//             newLetters = document.querySelectorAll('.alphabet__box')
//         } else if (letters[i].nextElementSibling != null) {
//             letters[i].nextElementSibling.after(letters[i]);
//             newLetters = document.querySelectorAll('.alphabet__box')
//         }
//         if(newLetters[0].classList.contains('box_a') && 
//            newLetters[1].classList.contains('box_b') &&
//            newLetters[2].classList.contains('box_c') &&
//            newLetters[3].classList.contains('box_d') &&
//            newLetters[4].classList.contains('box_e') &&
//            newLetters[5].classList.contains('box_f')
//         ) {
//             audioWin.play();
//             title.innerHTML = 'YOU WON!!!';
//             finish.classList.remove("hiddenTwo");
//         }
//     });
// }



