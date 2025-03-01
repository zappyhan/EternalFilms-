const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")



if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });
} else {
    console.error("Hamburger or menu element not found!");
}