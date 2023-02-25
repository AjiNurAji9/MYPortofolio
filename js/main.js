// Change background color when scrolled
const navBar = document.getElementById("header");
const btn = document.getElementById("btn");
window.onscroll = () => {
  if (window.scrollY >= 50) {
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
const ask = prompt("Tak kenal maka tak sayang, udah kenal malah diambil orang. Btw namanya siapa?");
const user = document.getElementById("user");
user.innerHTML = ask;