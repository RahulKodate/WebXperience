var count = 1;

function addNewRow() {
    var table = document.getElementById("myTable");
    var tbodyRef = document.getElementsByTagName("tbody")[0];
    var lastBook = 
        table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Book 0";
    var lastestIndex = lastBook.split(" ")[1];
    

    var tdNode = document.createElement("tr");
    var trCheckboxCell = document.createElement("td");
    trCheckboxCell.innerHTML=
    '<input id="checkbox" type="checkbox" oneclick="onCheckboxClick(this)"/>';
    var trBookCell = document.createElement("td");
    trBookCell.innerHTML = "Book" +(parseInt(lastestIndex) + 1);
 
    var trAuthorCell = document.createElement("td");
    trAuthorCell.innerHTML = "Author" + (parseInt(lastestIndex) + 1);

    //appending inside tr
    tdNode.appendChild(trCheckboxCell);
    tdNode.appendChild(trBookCell);
    tdNode.appendChild(trAuthorCell);
    
    //appending inside tbody
    tbodyRef.appendChild(tdNode);

}

function onCheckboxClick(checkbox){
     console.log(checkbox);
    var rowSelect = checkbox.parentElement.parentElement;

    if(checkbox.checked == true){
        rowSelect.style.backgroundColor = "Wheat";

        //delete button
        var deleteButton = document.createElement("td");
        deleteButton.setAttribute("id","deleteTd");
        deleteButton.innerHTML =
        '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
        rowSelect.appendChild(deleteButton);
    } else {
        rowSelect.style.backgroundColor = "#fff";
        rowSelect.deleteCell(3);
    }
}

function deleteRow(rowObject){
    var tr = rowObject.parentElement.parentElement; //tr refrence
    
    document.getElementById("myTable").deleteRow(tr.rowIndex);
    count--;
    alert("Row deleted successfully!")
}