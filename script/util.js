function addNewItem() {
    boxEditItem.style.setProperty('visibility','visible');
}

function saveItem() {
    insertNewRow();
    boxEditItem.style.setProperty('visibility','hidden');
}

function insertNewRow() {
    const newItem  = shoppingItems.insertRow(1);
    let colDescription = newItem.insertCell(0);
    let colQuantity = newItem.insertCell(1);
    let colValue = newItem.insertCell(2);
    let colTotal = newItem.insertCell(3);
    
    colDescription.innerText = 'colDescription';
    colQuantity.innerText = '0';
    colValue.innerText = '0';
    colTotal.innerText = '0';
}