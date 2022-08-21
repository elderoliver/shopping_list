const INSERT = 'INSERT';
const UPDATE = 'UPDATE';

let op = {
    operation: null,
    idRow: null
}

function setOperation(operation,idRow) {
    op.operation = operation;
    op.idRow = idRow;
}

function addNewItem() {
    setDialogVisibity(true);
    setOperation(INSERT,null);
}

function editRow(idRow){
    setDialogVisibity(true);
    const row = document.getElementById(idRow);
    editDescription.value = row.cells.item(0).innerText;
    editQuantity.value = row.cells.item(1).innerText;
    editValue.value = row.cells.item(2).innerText;
    setOperation(UPDATE,idRow);
}

function deleteRow(idRow){
    if (window.confirm('Do you want to delete this item?')){
        const row = document.getElementById(idRow);
        row.remove(); 
        sumAllItems();
    }
}

function saveItem() {
    insertUpdateRow();
    sumAllItems();
    setDialogVisibity(false);
}

function insertUpdateRow() {

    if (op.operation === INSERT) {
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
    } else if (op.operation === UPDATE){
        const row = document.getElementById(op.idRow);
        console.log(op);
        row.cells.item(0).innerText = editDescription.value; 
        row.cells.item(1).innerText = editQuantity.value;
        row.cells.item(2).innerText = editValue.value;
        row.cells.item(3).innerText = parseFloat(editQuantity.value) * parseFloat(editValue.value);
    }
    
    cleanFields();
}

function cleanFields() {
    editDescription.value = '';
    editQuantity.value = '';
    editValue.value = '';
    setOperation(null,null);
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

function setDialogVisibity(isVisible) {
    const strProperty = isVisible ? 'visible' : 'hidden'; 
    boxEditItem.style.setProperty('visibility',strProperty);
}