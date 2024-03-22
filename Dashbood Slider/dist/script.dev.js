"use strict";

// Navbar drop-down
var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('active');
}); // Dashboard slider

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
} // Dark mode
// Function to toggle dark mode
// Function to toggle dark mode


function toggleDarkMode() {
  var body = document.body;
  var navbar = document.querySelector('.navbar');
  var menu = document.getElementById('menu');
  var form = document.getElementById('editForm');
  body.classList.toggle("dark-mode");
  navbar.classList.toggle('dark-mode-nav');
  menu.classList.toggle('dark-mode-menu');
  form.classList.toggle('dark-mode-form'); // Save dark mode state in localStorage

  var isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
} // New function to initialize dark mode based on localStorage


function initializeDarkMode() {
  var isDarkModeStored = localStorage.getItem("darkMode"); // Apply dark mode if the preference is true

  if (isDarkModeStored === "true") {
    toggleDarkMode();
  }
} // Check if dark mode preference is stored in localStorage


initializeDarkMode();