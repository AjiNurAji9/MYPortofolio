// Change background color when scrolled
var navBar = document.getElementById("header");
var btn = document.getElementById("btn");
window.onscroll = () => {
  if (window.scrollY >= 100) {
    navBar.classList.remove("nav-transparent");
    navBar.classList.add("nav-colored");
    btn.classList.add("btn-green");
    btn.classList.remove("btn-orange");
  } else {
    navBar.classList.add("nav-transparent");
    navBar.classList.remove("nav-colored");
    btn.classList.remove("btn-green");
    btn.classList.add("btn-orange");
  }
}

// Nama user / pendatang (pengguna) website
// var ask = prompt("Hai, nama kamu siapa?");
var user = document.getElementById("user");
user.innerHTML = ask;