"use strict";

// Navbar drop-down
var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
}); // dasbord  slider

function toggleMenu() {
  var menu = document.getElementById("menu");
  var mainContent = document.getElementById("main-content");

  if (menu.style.width === "200px") {
    // If the menu is open, close it
    menu.style.width = "0";
    mainContent.style.marginLeft = "0";
  } else {
    // If the menu is closed, open it
    menu.style.width = "200px";
    mainContent.style.marginLeft = "200px";
  }
}