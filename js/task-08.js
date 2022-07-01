const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log("email:", email.value, "password:", password.value);
});
function validateForm() {
  var x = document.querySelector(".login-form");
  if (x == null || x == "") {
    alert("Необходимо заполнить поле Имя!");
    return false;
  }
}
