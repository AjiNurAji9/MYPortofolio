// get username from custom alert
function getUser() {
  const user = document.getElementById("user");
  const getName = document.getElementById("nama");
  const input = document.getElementById("fullName");
  const alert = document.getElementById("alert");
  alertify.set("notifier", "position", "top-right");

  if (getName.value.length > 0) {
    user.innerHTML = getName.value;
    input.value = getName.value;
    alert.classList.add("hide");
    alertify.success("Welcome " + getName.value);
  } else {
    alertify.error("Isi dulu dong !");
  }
}

// Send message to email
function send() {
  const name = document.getElementById("fullName");
  const email = document.getElementById("email");
  const msg = document.getElementById("message");
  if (name.value.length <= 0) {
    alertify.error("Isi namanya dong!!");
  } else if (email.value.length <= 0) {
    alertify.error("Isi emailnya dong!!");
  } else if (msg.value.length <= 0) {
    alertify.error("Isi pesannya dong!!");
  } else {
    alertify.success("Sudah terkirim, terimakasih 👍")
  }
}