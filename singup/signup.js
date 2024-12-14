var newName = document.querySelector("#name");
var newEmail = document.querySelector("#email");
var newPassword = document.querySelector("#password");
var signup = document.querySelector("#signUp");
var emailHelp = document.querySelector("#emailHelp");
var addedMessage = document.querySelector("#added");
var nameError = document.querySelector("#nameerror");
var emailError = document.querySelector("#emailerror");
var passError = document.querySelector("#passerror");
var newUserList = JSON.parse(localStorage.getItem("newUserList")) || [];
var nameRegex = /^[a-zA-Z\s]+$/;
var emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,}$/;

function createNewUser() {
  var isValidName = nameRegex.test(newName.value);
  var isValidEmail = emailRegex.test(newEmail.value);
  var isValidPassword = passwordRegex.test(newPassword.value);

  if (!isValidName) {
    nameError.classList.remove("d-none");
  } else {
    nameError.classList.add("d-none");
  }

  if (!isValidEmail) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
  }

  if (!isValidPassword) {
    passError.classList.remove("d-none");
  } else {
    passError.classList.add("d-none");
  }

  if (!isValidName || !isValidEmail || !isValidPassword) {
    return;
  }

  var emailExists = newUserList.some(
    (user) => user.newUserEmail === newEmail.value
  );

  if (emailExists) {
    emailHelp.classList.remove("d-none");
    setTimeout(() => {
      emailHelp.classList.add("d-none");
    }, 5000);
  } else {
    var user = {
      newUserName: newName.value,
      newUserEmail: newEmail.value,
      newUserPassword: newPassword.value,
    };

    newUserList.push(user);
    localStorage.setItem("newUserList", JSON.stringify(newUserList));
    clearForm();

    addedMessage.classList.remove("d-none");
    setTimeout(() => {
      addedMessage.classList.add("d-none");
    }, 5000);

    emailHelp.classList.add("d-none");
    location.href = "../index.html";
  }
}

signup.addEventListener("click", function (e) {
  e.preventDefault();
  createNewUser();
});


function clearForm() {
  newName.value = "";
  newEmail.value = "";
  newPassword.value = "";
}
