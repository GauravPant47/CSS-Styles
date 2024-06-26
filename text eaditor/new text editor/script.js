function changeFontSize(action) {
    const editor = document.getElementById('editor');
    let currentSize = parseFloat(window.getComputedStyle(editor, null).getPropertyValue('font-size'));
    if (action === 'increase' && currentSize < 30) {
        editor.style.fontSize = `${currentSize + 2}px`;
    } else if (action === 'decrease' && currentSize > 10) {
        editor.style.fontSize = `${currentSize - 2}px`;
    }
}

function createList(type) {
    document.execCommand(type === 'bullet' ? 'insertUnorderedList' : 'insertOrderedList', false, null);
}

function setTextFormat(format) {
    document.execCommand(format, false, null);
}

function changeFontFamily(event) {
    const selectedFont = event.target.value;
    document.getElementById('editor').style.fontFamily = selectedFont;
}

function insertImage(event) {
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    document.getElementById('editor').innerHTML += `<img src="${imageUrl}" alt="Image">`;
}

function highlightText(color) {
    document.execCommand('hiliteColor', false, color);
}

function setTextAlignment(align) {
    document.execCommand(`justify${align}`, false, null);
}

function addLink() {
    const url = prompt('Enter the URL:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function showColorBoard() {
    const colorBoard = document.getElementById('colorBoard');
    colorBoard.style.display = colorBoard.style.display === 'block' ? 'none' : 'block';
}

function changeTextColor(color) {
    // Change the color of the headline (replace 'headline' with the actual ID or class of your headline element)
    const headline = document.getElementById('headline');
    if (headline) {
        headline.style.color = color;
    }

    // Change the color of the text editor
    const editor = document.getElementById('editor');
    editor.focus();
    document.execCommand('foreColor', false, color);
    showColorBoard();
}
