const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollToBottomBtn = document.getElementById("scrollToBottomBtn");
const contentDiv = document.getElementById("content");

scrollToTopBtn.addEventListener("click", () => {
    contentDiv.scrollIntoView({ behavior: "smooth", block: "start" });
});

scrollToBottomBtn.addEventListener("click", () => {
    contentDiv.scrollIntoView({ behavior: "smooth", block: "end" });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    if (window.innerHeight + window.scrollY >= contentDiv.offsetTop) {
        scrollToBottomBtn.style.display = "none";
    } else {
        scrollToBottomBtn.style.display = "block";
    }
});