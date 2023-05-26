"use strict";

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

console.log(hamburger, nav);

//CODE

hamburger.addEventListener("click", () => {
  console.log("clicked");
  nav.classList.toggle("closed");
  nav.classList.toggle("opened");
});
