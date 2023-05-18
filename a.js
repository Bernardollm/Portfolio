const hamburger = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  navBar.classList.toggle('active');
});