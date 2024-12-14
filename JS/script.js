var loginEmail = document.querySelector("#email");
var loginPassword = document.querySelector("#password");
var loginbtn = document.querySelector("#login");
var loginUserList = JSON.parse(localStorage.getItem("newUserList")) || [];

loginbtn.addEventListener("click", function (event) {
  event.preventDefault();
  login();
});

function login() {
  if (!loginUserList || loginUserList.length === 0) {
    alert("No users found. Please sign up first.");
    return;
  }

  const matchedUser = loginUserList.find(
    (user) =>
      user.newUserEmail === loginEmail.value &&
      user.newUserPassword === loginPassword.value
  );

  if (matchedUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    location.href = "./home/home.html";
  } else {
    document.querySelector("#invalid").classList.remove("d-none");
    setTimeout(() => {
      document.querySelector("#invalid").classList.add("d-none");
    }, 8000);
  }
}
