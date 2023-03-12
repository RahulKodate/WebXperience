var count = 1;

function addNewRow() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var lastBook =
    table.lastElementChild.lastElementChild?.firstElementChild
      ?.nextElementSibling?.innerHTML || "Book 0"; //Book 1
  var latestIndex = lastBook.split(" ")[1]; //1

  var tdNode = document.createElement("tr");
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
    '<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/>';
  var trBookCell = document.createElement("td");
  trBookCell.innerHTML = "Book " + (parseInt(latestIndex) + 1);
  var trAuthorCell = document.createElement("td");
  trAuthorCell.innerHTML = "Author " + (parseInt(latestIndex) + 1);

  //appending inside tr
  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trBookCell);
  tdNode.appendChild(trAuthorCell);

  //appending inside tbody
  tbodyRef.appendChild(tdNode);
}

function onCheckboxClick(checkbox) {
  console.log(checkbox); //input reference
  var rowSelect = checkbox.parentElement.parentElement; //tr
  // console.log(rowSelect);

  if (checkbox.checked == true) {
    rowSelect.style.backgroundColor = "pink";

    // deleting
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);
  } else {
    rowSelect.style.backgroundColor = "#fff";
    rowSelect.deleteCell(3); //removes the delete button column
  }
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; //tr reference

  document.getElementById("myTable").deleteRow(tr.rowIndex);
  count--;
  alert("Row deleted successfully!");
}

