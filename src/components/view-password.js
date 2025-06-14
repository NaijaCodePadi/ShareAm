let password = document.getElementById("password");
let view_password = document.getElementById("eye-image");
let confirm_password = document.getElementById("confirm-password");
let view_confirm_password = document.getElementById("eye-image1");
// let password_border = document.getElementById("inner-password-container");

view_password.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    view_password.src = "../../assets/images/eye-close-up.png";
  } else {
    password.type = "password";
    view_password.src = "../../assets/images/eye-open-up.png";
  }
};
view_confirm_password.onclick = function () {
  if (confirm_password.type == "password") {
    confirm_password.type = "text";
    view_confirm_password.src = "../../assets/images/eye-close-up.png";
  } else {
    confirm_password.type = "password";
    view_confirm_password.src = "../../assets/images/eye-open-up.png";
  }
};

// still trying
// password.onfocus = function () {
//   if (password.focus) {
//     password_border.style.borderColor = "#007bff";
//   } else {
//     password.blur;
//     password_border.style.borderColor = "red";
//   }
//   return;
//   // console.log(password.onfocus);
// };
