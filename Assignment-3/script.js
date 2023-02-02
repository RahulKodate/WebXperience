//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

const table = document.getElementById("myTable");

let countBoxPresent = 0;

const checkRows = table.getElementsByClassName("input");
hideOnStart();

function hideOnStart(){
  var count=0;
  let submitBtn = documnet.getElementById("button");
  for(var i = 0; i < checkRows.length; i++){
    var row = checkRows[i].parentNode.parentNode;

    if(!checkRows[i].checked){
      count++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }

    if(checkRows.length === count){

      submitBtn.style.backgroundColor = "gray";
      submitBtn.style.border = "";
      submitBtn.style.cursor = "initial";
      submitBtn.disabled = true;
        document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
        document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
      }
  }
}

selectRow();

let boolean = true;

let mainRetoric = true;

function rowOne(r) {
  const i = r.parentNode.parentNode.rowIndex;
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling; 
  if (mainRetoric) {
    descRow.style.display = "table-cell";
    mainRetoric = false;
  } else {          
    descRow.style.display = "none";
    mainRetoric = true;
  }
}

function rowTwo(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextSibling.nextSibling; 
  if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Row Deleted!`);
  hideOnStart();
  selectRow();
}