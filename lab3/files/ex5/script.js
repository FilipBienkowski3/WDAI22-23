let total = 0;
let propagationEnabled = true;
let active = [true,true,true];
const divs = document.querySelectorAll(".group");
const demoText = document.getElementById("demo");
const counterText = document.getElementById("counter");
const toggleButton = document.getElementById("togglePropagation");
const resetButton = document.getElementById("reset");
const changeOrderButton = document.getElementById("changeOrder");

function displayMessage(color, value) {
    demoText.innerHTML = `Nacisnąłeś ${color} o wartości ${value}`;
}
function displayTotal() {
    counterText.innerHTML = `Suma naciśnięć to ${total}`;
}
function handleClick(event) {
    event.stopPropagation();
    let value = 0;
    let color = '';

    const target = event.currentTarget;
    const valueElement = target.querySelector(".value");

    if (target.id === 'first') {
        color = 'niebieski';
        value = 1;
    } else if (target.id === 'second') {
        color = 'czerwony';
        value = 2;
    } else if (target.id === 'third') {
        color = 'żółty';
        value = 5;

    }

    let currentValue = parseInt(valueElement.innerHTML);
    currentValue += value;
    valueElement.innerHTML = currentValue;

    total += value;

    if (total >= 30) {
        document.getElementById('second').removeEventListener('click', handleClick);
        active[1] = false;
    }

    if (total >= 50) {
        document.getElementById('third').removeEventListener('click', handleClick);
        active[2] = false;
    }

    displayMessage(color, value);
    displayTotal();
}
divs.forEach((div, index) => {
    if (active[index]) {
        div.addEventListener("click", handleClick);
    }
});

toggleButton.addEventListener("click", () => {
    propagationEnabled = !propagationEnabled;
    toggleButton.innerHTML = propagationEnabled ? "Stop Propagation" : "Start Propagation";
    divs.forEach(div => {
        div.removeEventListener('click', handleClick);
    });
});

resetButton.addEventListener("click", () => {
    total = 0;
    demoText.innerHTML = "";
    counterText.innerHTML = "";
    divs.forEach((div, index) => {
        active[index] = true;
        div.querySelector(".value").innerHTML = div.id === 'first' ? '0' : (div.id === 'second' ? '0' : '0');
        div.addEventListener('click', handleClick);
    });
});

changeOrderButton.addEventListener("click", () => {
    divs.forEach(div => {
        div.removeEventListener('click', handleClick);
    });
    divs.forEach((div) => {
        if (!(active[index])) {
            div.addEventListener("click", handleClick);
            active[index] = true;
        }else{
            active[index]= false;
        }
    });

});

