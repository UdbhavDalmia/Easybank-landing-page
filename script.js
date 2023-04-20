"use strict";

const header = document.querySelector(".header");
const navOpen = document.querySelector(".nav-open");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");

const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});

closeBtn.addEventListener("click", function () {
  header.classList.remove("nav-open");
});
