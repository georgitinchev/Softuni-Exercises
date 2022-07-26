const html = {
  userNameField: document.getElementsByName("email")[0],
  passwordInputField: document.getElementsByName("password")[0],
  loginBtn:
    document.getElementsByClassName("notification")[0].nextElementSibling,
};

html.loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3030/users/login`)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
