 // List of background images
const images = [
    "url('C:\Users\USER\Desktop\Re1.jpg')",
    "url('C:\Users\USER\Desktop\Re2.jpg')",
    "url('C:\Users\USER\Desktop\Re3.jpg')",
    "url('C:\Users\USER\Desktop\Re4.jpg')",
    "url('C:\Users\USER\Desktop\Re5.jpg')",
    "url('C:\Users\Public\Pictures\1745178970079.jpg')",
    "url('C:\Users\Public\Pictures\1745180446166.jpg')",
];

let index = 0; // Start from the first image

function changeBackground() {
    document.body.style.backgroundImage = images[index]; // Apply background to body
    index = (index + 1) % images.length; // Loop through images
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();
