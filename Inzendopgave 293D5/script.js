const navbarBurger = document.getElementById('navbar__burger');
const sideDrawer = document.getElementById('side-drawer');

const toggleSideDrawer = () => {
  sideDrawer.classList.toggle('side-drawer--visible');
  document.body.classList.toggle('locked');
};

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownContent = document.getElementById('dropdown-content');

const toggleDropdown = () => {
  dropdownContent.classList.toggle('visible');
};

navbarBurger.addEventListener('click', toggleSideDrawer);
dropdownMenu.addEventListener('click', toggleDropdown);
