"use strict";

document.getElementById('menu-icon').addEventListener('click', function () {
  document.body.classList.toggle('show-menu');
  document.body.classList.remove('show-hidden-menu');
});
document.getElementById('close-icon').addEventListener('click', function () {
  document.body.classList.toggle('show-hidden-menu');
  document.body.classList.remove('show-menu');
});