"use strict";

var darkMode = false;

function toggleDarkMode() {
  var modeSwitch = document.getElementById('mode-switch');
  var colorChange = document.getElementById('wight_color');
  darkMode = !darkMode;

  if (darkMode) {
    // Toggle dark mode styles
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
    modeSwitch.style.backgroundColor = '#2c3e50';
    colorChange.style.color = '#fff';
  } else {
    // Toggle light mode styles
    document.body.style.backgroundColor = '#999';
    document.body.color = '000';
    modeSwitch.style.backgroundColor = '#3498db';
    colorChange.style.color = '#000';
  } // Update the switch state


  modeSwitch.checked = darkMode;
}