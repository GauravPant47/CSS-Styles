// script.js
// For example, let's highlight a row when clicked
const table = document.getElementById('myTable');
const rows = table.getElementsByTagName('tr');

for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener('click', function () {
        this.classList.toggle('selected');
    });
}
