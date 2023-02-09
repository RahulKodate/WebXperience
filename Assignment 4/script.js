var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);
form.addEventListener("reset", resetForm);

function resetForm(e) {
  e.target.reset();
  dynamicCB.style.display = "none";
  additionalCustom.style.display = "none";
}
const titles = document.querySelectorAll('input[name="title"]');
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validStreet = false;
var validCity = false;
var validState = false;
var validZipCode = false;
var validSource = false;
var validBool = true;
var validDrinks = false;
var validComments = false;
var validTitleBool = false;

