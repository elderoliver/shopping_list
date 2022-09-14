function deleteRow(idRow){
    if (window.confirm('Do you want to delete this item?')){
        const row = document.getElementById(idRow);
        row.remove(); 
        sumAllItems();
    }
}