var dynamicBadge = document.getElementById("dynamicBadge");
var increaseButton = document.getElementById("increaseBadge");

var badgeCount = 0;

function updateBadge() {
    dynamicBadge.textContent = badgeCount;
}

increaseButton.addEventListener("click", function () {
    badgeCount++;
    updateBadge();
});

updateBadge();
