const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e) {
    e.preventDefault();

    newItem = itemInput.value;

    // Validate Input
    if (newItem.value === '') {
        alert('Please add an item');
        //optional
        return;
    }

    // Create list item 
    const newLi = document.createElement('li');

    //newLi.appendChild(document.createTextNode(newItem));
    newLi.textContent = newItem;


    const button = createButton('remove-item btn-link text-red');
    newLi.appendChild(button);
    itemList.appendChild(newLi);
    itemInput.value = '';

    console.log(newLi);

}

function createButton(classes) {

    const newButton = document.createElement('button');
    newButton.className = classes;
    const newIcon = createIcon('fa-solid fa-xmark');
    newButton.appendChild(newIcon);
    return newButton;
}


function createIcon(classes) {
    const newIcon = document.createElement('i');
    newIcon.className = classes;
    return newIcon;
}


//Event Listeners
itemForm.addEventListener('submit', addItem);
