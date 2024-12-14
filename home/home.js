const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
  document.querySelector("#currentuser").innerHTML=loggedInUser.newUserName
} else {
  console.log("No user is logged in.");
}
document.querySelector("#logout").addEventListener("click", function () {
  location.href = "../index.html";
});
