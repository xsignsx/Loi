const navbarBurger = document.getElementById("navbar__burger");
const sideDrawer = document.getElementById("side-drawer")

const toggleSideDrawer = () => {
  sideDrawer.classList.toggle("side-drawer--visible");
  document.body.classList.toggle("locked")
}

navbarBurger.addEventListener('click', toggleSideDrawer);