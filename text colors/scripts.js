const colorInput = document.getElementById("color");
const text = document.querySelector("p");

colorInput.addEventListener("input", () => {
    const selectedColor = colorInput.value;
    text.style.color = selectedColor;
});

