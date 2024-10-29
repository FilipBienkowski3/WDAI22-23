const passwordInput = document.getElementById("password");
const togglePasswordButton = document.querySelector(".togglePassword");

const passwordRepeatInput = document.getElementById("repeatPassword");
const toggleRepeatPasswordButton = document.querySelector(".toggleRepeatPassword");

const circle1 = document.querySelector(".circle1"); // min. 8 znaków
const circle2 = document.querySelector(".circle2"); // znak specjalny
const circle3 = document.querySelector(".circle3"); // wielka litera
const circle4 = document.querySelector(".circle4"); // cyfra

togglePasswordButton.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

toggleRepeatPasswordButton.addEventListener("click", function () {
    const type = passwordRepeatInput.getAttribute("type") === "password" ? "text" : "password";
    passwordRepeatInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

function checkPasswordRequirements() {
    const password = passwordInput.value;
    
    if (password.length >= 8) {
        circle1.classList.add("fa-circle-check");
        circle1.classList.remove("fa-circle-xmark");
        circle1.style.color = "#00ff6e"; 
    } else {
        circle1.classList.add("fa-circle-xmark");
        circle1.classList.remove("fa-circle-check");
        circle1.style.color = "#ff0019"; 
    }
    
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (specialCharRegex.test(password)) {
        circle2.classList.add("fa-circle-check");
        circle2.classList.remove("fa-circle-xmark");
        circle2.style.color = "#00ff6e";
    } else {
        circle2.classList.add("fa-circle-xmark");
        circle2.classList.remove("fa-circle-check");
        circle2.style.color = "#ff0019"; 
    }
    
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(password)) {
        circle3.classList.add("fa-circle-check");
        circle3.classList.remove("fa-circle-xmark");
        circle3.style.color = "#00ff6e"; 
    } else {
        circle3.classList.add("fa-circle-xmark");
        circle3.classList.remove("fa-circle-check");
        circle3.style.color = "#ff0019"; 
    }
    
    const digitRegex = /[0-9]/;
    if (digitRegex.test(password)) {
        circle4.classList.add("fa-circle-check");
        circle4.classList.remove("fa-circle-xmark");
        circle4.style.color = "#00ff6e"; 
    } else {
        circle4.classList.add("fa-circle-xmark");
        circle4.classList.remove("fa-circle-check");
        circle4.style.color = "#ff0019"; 
    }
}

passwordInput.addEventListener("input", checkPasswordRequirements);
