let count = 0;

function increment() {
    count += 1;
    document.getElementById("add").innerHTML = count;
}

function resetCounter() {
    count = 0;
    document.getElementById("add").innerHTML = count;
}

function removeEvent() {
    document.getElementById("add").removeEventListener("click", increment);
}

function addEvent() {
    document.getElementById("add").addEventListener("click", increment);
}
