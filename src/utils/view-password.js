let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let view_password = document.getElementById("visibility-on");
let hide_password = document.getElementById("visibility-off");
let confirm_view_password = document.getElementById("confirm-visibility-on");
let confirm_hide_password = document.getElementById("confirm-visibility-off");
let toggle_password_visibility = document.getElementById("toggle-visibility");
let toggle_confirm_password_visibility = document.getElementById(
  "confirm-password-toggle-visibility"
);


toggle_password_visibility.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    view_password.classList.add("hide");
    hide_password.classList.remove("hide");
  } else {
    password.type = "password";
    view_password.classList.remove("hide");
    hide_password.classList.add("hide");
  }
};
toggle_confirm_password_visibility.onclick = function () {
  if (confirm_password.type == "password") {
    confirm_password.type = "text";
    confirm_view_password.classList.add("hide");
    confirm_hide_password.classList.remove("hide");
  } else {
    confirm_password.type = "password";
    confirm_view_password.classList.remove("hide");
    confirm_hide_password.classList.add("hide");
  }
};

