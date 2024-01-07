let darkMode = false;

function toggleDarkMode() {
    const modeSwitch = document.getElementById('mode-switch');

    darkMode = !darkMode;

    if (darkMode) {
        // Toggle dark mode styles
        document.body.style.backgroundColor = '#222';
        modeSwitch.style.backgroundColor = '#2c3e50';
    } else {
        // Toggle light mode styles
        document.body.style.backgroundColor = '#999';
        modeSwitch.style.backgroundColor = '#3498db';
    }

    // Update the switch state
    modeSwitch.checked = darkMode;
}
