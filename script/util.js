function addNewItem() {
    boxEditItem.style.setProperty('visibility','visible');
}

function saveItem() {
    insertNewRow();
    sumAllItems();
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
    let btn = document.createElement('div');
    btn.type = 'button';

    let i = document.createElement('i');
    btn.appendChild(i);

    const idRow = newItem.getAttribute('id');
    if (operation === 'delete') {
        btn.setAttribute('onclick', 'deleteRow("'+idRow+'")');
        btn.className = 'btn_remove';
        i.innerHTML = "<i class='fa fa-trash'></i>";
    } else if (operation === 'edit') {
        btn.setAttribute('onclick','editRow("'+idRow+'")');
        btn.className = 'btn_edit';
        i.innerHTML = "<i class='fa fa-pencil'></i>";
    }

    return btn; 
}

function deleteRow(idRow){
    if (window.confirm('Do you want to delete this item?')){
        const row = document.getElementById(idRow);
        row.remove(); 
        sumAllItems();
    }
}

function editRow(idRow){
    console.log('editRow');
}

function sumAllItems(){
    let sum = 0.0;
    for(let i = 1; i < shoppingItems.rows.length;i++) {
        const itemValue = parseFloat(shoppingItems.rows[i].cells.item(3).innerText);
        sum = sum  + itemValue;
    }
    setFooterValue(sum);
}

function setFooterValue(value) {
    footerContent.innerText = `Total: ${value}`;
}