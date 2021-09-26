"use strict";
var formComplete = true;
var errorDiv = document.getElementById("errorDivision");
function validateFirstname() {
    var firstname = document.getElementById("firstname");
    try {
        if (firstname.value === "") {
            throw "First name field cannot be left blank";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        firstname.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function validateLastname() {
    var lastname = document.getElementById("lastname");
    try {
        if (lastname.value === "") {
            throw "Last name field cannot be left blank";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        lastname.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function validateAdd() {
    var address = document.getElementById("address");
    try {
        if (address.value === "") {
            throw "Address field cannot be left blank";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        address.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function validateCity() {
    var city = document.getElementById("city");
    try {
        if (city.value === "") {
            throw "City field cannot be left blank";
        }

    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        city.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function validatePostal() {
    var postal = document.getElementById("postal");
    var RegEX = /^[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/;
    var validPostalcode = RegEX.test(postal.value);
    try {
        if (validPostalcode == false) {
            throw "Postal code has to be in the A1A1A1 format ";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        postal.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function ageValidition() {
    var age = document.getElementById("age");
    try {
        if (age.value < 18) {
            throw "Age has to be at least 18 yrs. old";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        age.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function validatePasswords() {
    var password1 = document.getElementById("password");
    var password2 = document.getElementById("password2");

    try {
        if (password1.value != password2.value) {
            throw "Password fields should have identical input";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        password1.style.background = "rgb(255,233,233)";
        password2.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
    var PRegEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,12}$/;
    var validPass = PRegEx.test(password1.value);
    try {
        if (validPass == false) {
            throw "Passwords must have at least 6 characters and must contain at least one digit and one upper-case character";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        password1.style.background = "rgb(255,233,233)";
        password2.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}

function emailValidation() {
    var email = document.getElementById("email");
    try {
        if (email.value.search("@") === -1 || email.value.lastIndexOf(".") === -1) {
            throw "Email field must contain the @ and. characters";
        }
    }
    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        errorDiv.style.background = "azure";
        email.style.background = "rgb(255,233,233)";
        formComplete = false;
    }
}


function formValidation(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    validateFirstname();
    validateLastname();
    validateAdd();
    validateCity();
    validatePostal();
    ageValidition();
    validatePasswords();
    emailValidation();
    if (formComplete === true) {
        window.alert("Thanks for registering with our website, your customer record was created successfully.");
    }
}

function clearForm() {
    var formEntries = document.getElementsByClassName("form");
    for (var i = 0; i < formEntries.length; i++) {
        formEntries[i].value = "";
    }
}

var submit = document.getElementById("submit");
submit.addEventListener("click", formValidation, false);
var clear = document.getElementById("clear");
clear.addEventListener("click", clearForm, false);



