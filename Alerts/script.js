function showAlert() {
    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "block";
}

function closeAlert() {
    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
}

document.getElementById("showAlert").addEventListener("click", showAlert);
