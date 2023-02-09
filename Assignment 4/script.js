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

      // regex checks variables
      var regExName = /^[a-zA-Z ]+$/;
      var regExEmail = /^[a-z0-9]+@northeastern.edu+$/;
      var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
      var regExZipcode = /\d{5}/;

      var firstName = document.getElementById("firstName");
      firstName.addEventListener("input", validate);

      var lastName = document.getElementById("lastName");
      lastName.addEventListener("input", validate);

      var emailId = document.getElementById("emailId");
      emailId.addEventListener("input", validate);

      var phoneNumber = document.getElementById("phoneNumber");
      phoneNumber.addEventListener("input", validate);

      var streetAddress1 = document.getElementById("streetAddress1");
      streetAddress1.addEventListener("input", validate);

      var city = document.getElementById("city");
      city.addEventListener("input", validate);

      var state = document.getElementById("state");
      state.addEventListener("input", validate);

      var zipcode = document.getElementById("zipcode");
      zipcode.addEventListener("input", validate);

      var source = document.getElementById("source");
      source.addEventListener("input", validate);

      var comments = document.getElementById("comments");
      comments.addEventListener("input", validate);

      //we need to write a function for validate
      function validate(e) {
        var value = e.target.value;
        var type = this.id;
        var em = "error_" + type;

        switch (type) {
          case "firstName":
            if (!value.trim().match(regExName)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validFirstName = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validFirstName = true;
            }
            break;
          case "lastName":
            if (!value.trim().match(regExName)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validLastName = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validLastName = true;
            }
            break;
          case "emailId":
            if (!value.trim().match(regExEmail)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validEmail = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validEmail = true;
            }
            break;
          case "phoneNumber":
            if (!value.trim().match(regExPhone)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validPhone = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validPhone = true;
            }
            break;
          case "streetAddress1":
            if (value.trim().length == 0) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validStreet = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validStreet = true;
            }
            break;
          case "city":
            if (value.trim().length == 0) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validCity = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validCity = true;
            }
            break;
          case "state":
            if (value.trim().length == 0) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validState = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validState = true;
            }
            break;
          case "zipcode":
            if (!value.trim().match(regExZipcode)) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validZipCode = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validZipCode = true;
            }
            break;
          case "source":
            if (value.trim().length == 0) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validSource = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validSource = true;
            }
            break;
          case "comments":
            if (value.trim().length == 0) {
              document.getElementById(em).style.display = "block";
              this.style.border = "2px solid red";
              validComments = false;
            } else {
              document.getElementById(em).style.display = "none";
              this.style.border = "";
              validComments = true;
            }
            break;
        }
      }

      //drinkSelected function
      const myDrinkList = document.getElementById("myDrinkList");
      const additionalCustom = document.getElementById("additionalCustom");
      const dynamicCB = document.getElementById("dynamicCB");
      const customisation = document.getElementById("customisation");

      dynamicCB.style.display = "none";
      additionalCustom.style.display = "none";

      dynamicCB.innerHTML = "";

      myDrinkList.onchange = (e) => {
        if (e.target.value == "Hot Black Tea") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Hot Black Tea - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox1" name="source" value="Hot Black Tea" />
            <br><br>
            `;

          const messageCB1 = document.getElementById("checkbox1");

          messageCB1.addEventListener("click", () => {
            if (messageCB1.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Cold Coffee") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Cold Coffee - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox2" name="source" value="Cold Coffee" />
            <br><br>
            `;

          const messageCB2 = document.getElementById("checkbox2");

          messageCB2.addEventListener("click", () => {
            if (messageCB2.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Lemon Iced Tea") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Lemon Iced Tea - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox3" name="source" value="Lemon Iced Tea" />
            <br><br>
            `;

          const messageCB3 = document.getElementById("checkbox3");

          messageCB3.addEventListener("click", () => {
            if (messageCB3.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Expresso") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Expresso - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox4" name="source" value="Expresso" />
            <br><br>
            `;

          const messageCB4 = document.getElementById("checkbox4");

          messageCB4.addEventListener("click", () => {
            if (messageCB4.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else if (e.target.value == "Latte") {
          validDrinks = true;
          dynamicCB.style.display = "block";
          additionalCustom.style.display = "none";

          document.getElementById("dynamicCB").innerHTML = `<br>
            <label for="hear">Latte - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox5" name="source" value="Latte" />
            <br><br>
            `;

          const messageCB5 = document.getElementById("checkbox5");

          messageCB5.addEventListener("click", () => {
            if (messageCB5.checked) {
              additionalCustom.style.display = "block";
              if (customisation.value.length == 0) {
                validBool = false;
              } else {
                customisation.value = "";
                validBool = true;
              }
            } else {
              additionalCustom.style.display = "none";
              validBool = true;
            }
          });
        } else {
          dynamicCB.style.display = "none";
          additionalCustom.style.display = "none";
          validDrinks = false;
        }
      };

      function submitted(e) {
        let title;
        for (let i = 0; i < titles.length; i++) {
          if (titles[i].checked) {
            validTitleBool = true;
            title = titles[i].value;
          }
        }
        e.preventDefault();
        console.log(validBool, customisation.value.length);
        if (validBool == false && customisation.value.length != 0) {
          validBool = true;
        }
        if (
          validFirstName &&
          validLastName &&
          validEmail &&
          validPhone &&
          validStreet &&
          validCity &&
          validState &&
          validZipCode &&
          validSource &&
          validDrinks &&
          validBool &&
          validComments
        ) {
          tableData.innerHTML += `
      	<tr>
      		<td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
            document.getElementById("firstName").value
          } ${document.getElementById("lastName").value}</td>
      		<td>${document.getElementById("emailId").value}</td>
      		<td>${document.getElementById("phoneNumber").value}</td>
      		<td>${document.getElementById("streetAddress1").value}</td>
      		<td>${document.getElementById("streetAddress2").value}</td>
      		<td>${document.getElementById("city").value}</td>
      		<td>${document.getElementById("state").value}</td>
      		<td>${document.getElementById("zipcode").value}</td>
          <td>${document.getElementById("source").value}</td>
      		<td>${document.getElementById("myDrinkList").value}</td>
      		<td>${document.getElementById("customisation").value}</td>
      		<td>${document.getElementById("comments").value}</td>
      	</tr>
      	`;
          alert("Data is saved succesfully");
          e.target.reset();
          dynamicCB.style.display = "none";
          additionalCustom.style.display = "none";
        } else if (validFirstName == false) {
          alert("Please enter first name");
        } else if (validLastName == false) {
          alert("Please enter last name");
        } else if (validEmail == false) {
          alert("Please enter email");
        } else if (validPhone == false) {
          alert("Please enter phone number");
        } else if (validStreet == false) {
          alert("Please enter street address");
        } else if (validCity == false) {
          alert("Please enter city");
        } else if (validState == false) {
          alert("Please enter state");
        } else if (validZipCode == false) {
          alert("Please enter zipcode");
        } else if (validSource == false) {
          alert("Please check how did you hear about us");
        } else if (validDrinks == false) {
          alert("Please select drinks");
        } else if (validBool == false) {
          alert("Please enter additional comments");
        } else if (validComments == false) {
          alert("Please enter comments");
        } else {
          alert("Enter proper data");
        }
      }