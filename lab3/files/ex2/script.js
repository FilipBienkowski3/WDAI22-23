let currentIndex = 0;
const images = ["Images/1.jpg","Images/2.jpg","Images/3.jpg"];
const colors = ["red","blue","yellow"];

function changePicture(){
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector("img").src = images[currentIndex];
    document.querySelector("picture").style.border = `3px solid ${colors[currentIndex]}`;
}