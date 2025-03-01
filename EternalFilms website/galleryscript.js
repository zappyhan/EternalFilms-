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


const overlay = document.getElementById('overlay');
const enlargedImg = document.getElementById('enlarged-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const Images = document.querySelectorAll('.gallery_image');
let currentIndex = 0;


function openImage(event) {
    const clickedImage = event.target;
    currentIndex = Array.from(Images).indexOf(clickedImage); 
    enlargedImg.src = clickedImage.src; 
    overlay.style.display = 'flex'; 
}


function closeImage() {
    overlay.style.display = 'none'; 
}


function showPreviousImage() {
    currentIndex = (currentIndex - 1 + Images.length) % Images.length; 
    enlargedImg.src = Images[currentIndex].src;
}


function showNextImage() {
    currentIndex = (currentIndex + 1) % Images.length; 
    enlargedImg.src = Images[currentIndex].src;
}


Images.forEach(image => {
    image.addEventListener('click', openImage);
});


overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeImage();
    }
});


prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);


enlargedImg.addEventListener('click', (event) => {
    event.stopPropagation();
});


