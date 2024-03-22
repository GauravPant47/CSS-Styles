document.addEventListener("DOMContentLoaded", function() {
    // Define IDs
    var dateId = 'date';
    var timeId = 'time';

    // Get Date and Time elements
    var dateElement = document.getElementById(dateId);
    var timeElement = document.getElementById(timeId);

    // Update date
    dateElement.textContent = new Date().toLocaleDateString();

    // Function to update time
    function updateClock() {
        timeElement.textContent = new Date().toLocaleTimeString();
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
});
