"use strict";

function changeFontSize(action) {
  var editor = document.getElementById('editor');
  var currentSize = parseFloat(window.getComputedStyle(editor, null).getPropertyValue('font-size'));

  if (action === 'increase' && currentSize < 30) {
    editor.style.fontSize = "".concat(currentSize + 2, "px");
  } else if (action === 'decrease' && currentSize > 10) {
    editor.style.fontSize = "".concat(currentSize - 2, "px");
  }
}

function createList(type) {
  document.execCommand(type === 'bullet' ? 'insertUnorderedList' : 'insertOrderedList', false, null);
}

function setTextFormat(format) {
  document.execCommand(format, false, null);
}

function changeFontFamily(event) {
  var selectedFont = event.target.value;
  document.getElementById('editor').style.fontFamily = selectedFont;
}

function insertImage(event) {
  var imageUrl = URL.createObjectURL(event.target.files[0]);
  document.getElementById('editor').innerHTML += "<img src=\"".concat(imageUrl, "\" alt=\"Image\">");
}

function highlightText(color) {
  document.execCommand('hiliteColor', false, color);
}

function setTextAlignment(align) {
  document.execCommand("justify".concat(align), false, null);
}

function addLink() {
  var url = prompt('Enter the URL:');

  if (url) {
    document.execCommand('createLink', false, url);
  }
}

function showColorBoard() {
  var colorBoard = document.getElementById('colorBoard');
  colorBoard.style.display = colorBoard.style.display === 'block' ? 'none' : 'block';
}

function changeTextColor(color) {
  // Change the color of the headline (replace 'headline' with the actual ID or class of your headline element)
  var headline = document.getElementById('headline');

  if (headline) {
    headline.style.color = color;
  } // Change the color of the text editor


  var editor = document.getElementById('editor');
  editor.focus();
  document.execCommand('foreColor', false, color);
  showColorBoard();
}