const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const list = document.querySelector('.list');

const form = document.getElementById('dataForm');



form.addEventListener("submit", event =>{
    event.preventDefault();
    const name = nameInput.value;
    const number = numberInput.value;


    if (name && number) {
        const newElement = document.createElement('div');
        newElement.className = 'element';
        newElement.innerHTML = `
            <div class="inside">
                <p>${name}</p>
                <p>${number}</p>
            </div>
            <div class="bin buttons">
                <i class="fa-solid fa-trash fa-xl" style="color: #ffffff;"></i>
            </div>
        `;

        newElement.querySelector('.bin').addEventListener('click', () => {
            list.removeChild(newElement);
        });

        list.appendChild(newElement);

        nameInput.value = '';
        numberInput.value = '';
    } else {
        alert('Proszę wypełnić wszystkie pola poprawnie!');
    }
})

