"use strict";

// getting and changing ATRIBUTES of DOM elements

let img = document.querySelector("img");

img.src =
  "https://www.shutterstock.com/image-vector/small-business-idea-successful-entrepreneur-260nw-2150553663.jpg";

// checking attribute

img.hasAttribute("src");

//getting value of attribute

img.getAttribute("src");

// setting an attribute; 1. name of att, 2. his value

img.setAttribute("src", "value");

// deleting an atrb

img.removeAttribute("src");

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

let block = document.querySelectorAll(".block");
const audio = new Audio("../audio.mp3");

block.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("newClass");
    audio.play();
  });
});

//========================================================================================================================================================
// adding some audio :d
