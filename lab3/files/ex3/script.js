const array = [];

function onChange(){
    const listElement = document.getElementById("list");
    
    if (array.length === 0) {
        listElement.innerHTML = "<p>Brak elementów w liście.</p>";
    } else {
        listElement.innerHTML = "<ul>" + array.map(item => `<li>${item}</li>`).join('') + "</ul>";
    }
}

function deleteFirst(){
    if (array.length > 0) {
        array.shift();
        onChange();
    } else {
        alert("Lista jest już pusta!");
    }
}

function addElement(){
    const text = document.getElementById("element").value.trim();
    
    if (text) {
        array.push(text);
        document.getElementById("element").value = "";
        onChange();
    } else {
        alert("Nie możesz dodać pustego elementu!");
    }
}