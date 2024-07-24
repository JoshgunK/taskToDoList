let btn = document.getElementById('btn');
document.getElementById('addButton')
btn.addEventListener('click', addItem);

function addItem() {
    let input = document.getElementById('todoInput');
    let inputValue = input.value;

    if (inputValue === "") {
        alert("Enter a valid input");
        return;
    }

    let ul = document.getElementById('todoList');
    let li = document.createElement('li');
    li.textContent = inputValue;

    let deleteButton = document.createElement('btns');
    deleteButton.textContent = "Delete";
    deleteButton.id = "deleteButton"
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
}