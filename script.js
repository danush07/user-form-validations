function validateUsername() {
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("username-error");
  const isValid = /^[a-zA-Z0-9]{5,15}$/.test(usernameInput.value);

  if (usernameInput.value === "") {
    usernameError.textContent = "Username is required.";
  } else if (!isValid) {
    usernameError.textContent =
      "Username should be alphanumeric and between 5 to 15 characters.";
  } else {
    usernameError.textContent = "";
  }
}
function validateCountry() {
  var countrySelect = document.getElementById("country");
  var countryError = document.getElementById("country-error");

  if (countrySelect.value === "") {
    countryError.textContent = "Please select your country.";
    return false;
  } else {
    countryError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

  if (emailInput.value === "") {
    emailError.textContent = "Email is required.";
  } else if (!isValid) {
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      passwordInput.value
    );

  if (passwordInput.value === "") {
    passwordError.textContent = "Password is required.";
  } else if (!isValid) {
    passwordError.textContent =
      "Password should be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.";
  } else {
    passwordError.textContent = "";
  }
}

function validateConfirmPassword() {
  const passwordInput = document.getElementById("password");
  const cpasswordInput = document.getElementById("cpassword");
  const cpasswordError = document.getElementById("cpassword-error");
  const isValid = passwordInput.value === cpasswordInput.value;

  if (cpasswordInput.value === "") {
    cpasswordError.textContent = "Confirm Password is required.";
  } else if (!isValid) {
    cpasswordError.textContent = "Passwords do not match.";
  } else {
    cpasswordError.textContent = "";
  }
}
function validateGender() {
  var genderError = document.getElementById("gender-error");
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var other = document.getElementById("other");

  if (!(male.checked || female.checked || other.checked)) {
    genderError.textContent = "Please select a gender.";
  } else {
    genderError.textContent = "";
  }
}


function validateDOB() {
  const dobInput = document.getElementById("dob");
  const dobError = document.getElementById("dob-error");
  const dob = new Date(dobInput.value);
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  if (dobInput.value === "") {
    dobError.textContent = "Date of Birth is required.";
  } else if (dob > eighteenYearsAgo) {
    dobError.textContent = "Users must be at least 18 years old.";
  } else {
    dobError.textContent = "";
  }
}

function validateTerms() {
  const termsCheckbox = document.getElementById("terms");
  const termsError = document.getElementById("terms-error");

  if (!termsCheckbox.checked) {
    termsError.textContent = "You must accept the Terms and Conditions.";
  } else {
    termsError.textContent = "";
  }
}

function validateForm(event) {
   event.preventDefault(); 
  validateUsername();
  validateEmail();
    validatePassword();
  validateCountry();
  validateGender();
  validateConfirmPassword();
  validateDOB();
  validateTerms();

  const errorMessages = document.querySelectorAll(".error-message");
  for (const errorMessage of errorMessages) {
    if (errorMessage.textContent !== "") {
      return false;
    }
  }

  displayUserData();
  alert('form submitted successfully')
  return true;
}

function displayUserData() {
  const formData = new FormData(document.getElementById("registration-form"));
  const userDataDiv = document.getElementById("user-data");

  let userDataHTML = "<h2>User Data:</h2>";
  userDataHTML += "<ul>";

  for (const data of formData.entries()) {
    userDataHTML += `<li><strong>${data[0]}:</strong> ${data[1]}</li>`;
  }

  userDataHTML += "</ul>";
  userDataDiv.innerHTML = userDataHTML;
}