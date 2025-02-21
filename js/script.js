// script.js

const hamburgerIcon = document.getElementById('hamburger-icon');
const navbarLinks = document.getElementById('navbar-links');

hamburgerIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
