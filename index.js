// Generate array of image URLs
const imgs = Array.from({length: 50}, (_, i) => `https://picsum.photos/id/${i + 10}/300/200`);

const main = document.querySelector("main");
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Create and append images to gallery
imgs.forEach(imgUrl => {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "Gallery image";
    
    // Add click event to open modal
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = imgUrl;
    });
    
    main.appendChild(img);
});

// Close modal events
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
        modal.style.display = "none";
    }
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});