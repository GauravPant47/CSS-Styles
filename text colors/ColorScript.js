const colorText = document.getElementById("colorText");
const colorPicker = document.getElementById("colorPicker");
const colorInput = document.getElementById("colorInput");

colorPicker.addEventListener("input", updateColor);
colorInput.addEventListener("input", updateColor);

function updateColor() {
    const colorValue = colorInput.value || colorPicker.value;
    colorText.style.color = colorValue;
}