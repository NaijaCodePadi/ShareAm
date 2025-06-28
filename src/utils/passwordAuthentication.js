const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUpData = new FormData(form);
  const obj = Object.fromEntries(signUpData);
  if (obj.password !== obj.confirm_password) {
    return;
    // console.log("check");
  }
});
