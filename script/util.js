function addNewItem() {
    boxEditItem.style.setProperty('visibility','visible');
}

function saveItem() {
    insertNewRow();
    boxEditItem.style.setProperty('visibility','hidden');
}

function insertNewRow() {
    const newItem  = shoppingItems.insertRow(1);
    
    const rowId = shoppingItems.rows.length;
    newItem.setAttribute('id', `row${rowId}`);

    let colDescription = newItem.insertCell(0);
    let colQuantity = newItem.insertCell(1);
    let colValue = newItem.insertCell(2);
    let colTotal = newItem.insertCell(3);
    let colEdit = newItem.insertCell(4);
    let colDelete = newItem.insertCell(5);
    
    colDescription.innerText = editDescription.value;
    colQuantity.innerText = editQuantity.value;
    colValue.innerText = editValue.value;
    colTotal.innerText = parseFloat(editQuantity.value) * parseFloat(editValue.value);

    const btnEdit = createTableButton(newItem,'edit');
    colEdit.appendChild(btnEdit);

    const btnDelete = createTableButton(newItem,'delete'); 
    colDelete.appendChild(btnDelete);  
    
    cleanFields();
}

function cleanFields() {
    editDescription.value = '';
    editQuantity.value = '';
    editValue.value = '';
}

function createTableButton(newItem, operation) {
    let btn = document.createElement('input');
    btn.type = 'button';
    //btn.className = 'btn_save';

    const idRow = newItem.getAttribute('id');
    if (operation === 'delete') {
        btn.value = 'delete';
        btn.setAttribute('onclick', 'deleteRow("'+idRow+'")');
    } else if (operation === 'edit') {
        btn.value = 'edit';
        btn.setAttribute('onclick','editRow("'+idRow+'")');
    }

    return btn; 
}

function deleteRow(idRow){
    console.log('deleteRow');
}

function editRow(idRow){
    console.log('editRow');
}