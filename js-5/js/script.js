'use strict'

// innerHTML = u can add TAGS <p>etc</p>

// textContent = u cant add TAGS <p>etc</p>

// outerHTML = can change main TAG 

// elem.firstChild.data = 'Im new comment'  ===>>  primary for nodes

//========================================================================================================================================================


// creating new element (TAG) :

// document.createElement("div");

// for creating TEXT NODE :

// document.createTextNode("some text");

//========================================================================================================================================================
let wrapper = document.querySelector(".wrapper__container");

let newElement = document.createElement("div");
//========================================================================================================================================================
// methods of pasting an elements

// .before(); - before picked element
// .after();  - after picked element
// .prepend() - inside picked element at the beginning
// .append()  - inside picked element at the end

//========================================================================================================================================================

newElement.innerHTML = 'Hello, I am new DIV'

wrapper.prepend(newElement);

//========================================================================================================================================================

let newNode = document.createTextNode('random text?');

wrapper.append(newNode);

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

let newHeader = document.createElement('h2');

wrapper.prepend(newHeader, 'Hi, I am new h2 tag!');
wrapper.append('TEXT BROOOOO');

//========================================================================================================================================================
//========================================================================================================================================================

// InsertAdjacentnHTML / Element / Text

// header.InsertAdjacentnHTML("afterbeing", '<p>new text tag p</p>');

// parameters:
//        <tag>
//        1. beforebeing
//              <otherTag>
//              2. afterbeing
//              3. beforeend
//              </otherTag>
//        </tag>
//        4. afterend

//========================================================================================================================================================
//========================================================================================================================================================

// cloning, moving, deleting HTML elements
// cloning, moving, deleting HTML elements
// cloning, moving, deleting HTML elements

// moving - we use the same thing as we used to : before, after, append, prepend

let testingDiv = document.querySelector(".testing-one");

let newDiv = testingDiv.cloneNode();

//cloneNode = cloning TAG without content inside TAG 
// cloneNode(true) = copying everything !!!!!!!!!!!

newDiv.innerHTML = 'Im new DIV';

testingDiv.append(newDiv);

newDiv.remove();

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// css JS

let block = document.querySelector(".block");

console.dir(block.style);

block.style.border = '5px solid red';

block.style.cssText = `
    border-radius: 8px;
    font-size: 20px;
    text-transform: uppercase;
`;

//========================================================================================================================================================

// but better is to use classList and adding classes with styles

// classList.add/.remove/.contains/.toggle

//========================================================================================================================================================

console.log(block.className);

// block.className = 'newClass'; // deleting all old classes and make the new one

//========================================================================================================================================================

// console.log(getComputedStyle(block)); 

// showing all of the styles for element

let blockStyles = getComputedStyle(block);

console.log(blockStyles.marginBottom);

//method from string to number - parseInt()

console.log(parseInt(blockStyles.marginBottom));

//========================================================================================================================================================

let li = document.querySelectorAll('li');

for (let item of li) {
    item.classList.add("newClass");
}

li.forEach(item => {
    item.classList.add("OldClass");
})

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


