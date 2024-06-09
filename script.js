"use strict";

const menu = document.querySelector(".menuImg");
const nav = document.querySelector(".navBar");
console.log(menu, nav);

menu.addEventListener("click", () => {
  nav.classList.toggle("navBarActive");
});
