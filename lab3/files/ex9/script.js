const sliders = document.querySelectorAll(".sliders");
const randomButton = document.querySelector(".random");

let currentIndex = 0;
sliders[currentIndex].classList.add("active");
document.getElementById("button1").addEventListener("click", () => showSlide("left"));
document.getElementById("button2").addEventListener("click", () => showSlide("right"));
randomButton.addEventListener("click",() => randomSlide());

function showSlide(direction) {
    sliders[currentIndex].classList.remove("active", "left","right");

    if (direction === "right") {
        currentIndex = (currentIndex + 1) % sliders.length;
    } else {
        currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    }

    sliders[currentIndex].classList.add("active");

    if (direction === "left") {
        sliders[currentIndex].classList.add("left");
    }else{
        sliders[currentIndex].classList.add("right");

    }
}
function randomSlide(){
    const randomBoolean = Math.random() < 0.5;
    if(randomBoolean){
        showSlide("left");
    }else{
        showSlide("right");
    }

}