const shoppingItems = document.getElementById("shoppingItems");
const btnNewItem = document.getElementById("btnNewItem");
const footerContent = document.getElementById("footerContent");

const boxEditItem = document.getElementById("boxEditItem");
const editDescription = document.getElementById("editDescription");
const editQuantity = document.getElementById("editQuantity");
const editValue = document.getElementById("editValue");
const btnOpenEdit = document.getElementById("btnOpenEdit");
const btnOpenDelete = document.getElementById("btnOpenDelete");

const btnSave = document.getElementById("btnSave");
const btnCancel = document.getElementById("btnCancel");

btnNewItem.addEventListener("click", () => {
    addNewItem();
});

btnSave.addEventListener("click", ()=> {
    saveItem();
});

btnCancel.addEventListener('click', () => {
    cancelItem();
});