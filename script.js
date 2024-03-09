const lines = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-links');

lines.addEventListener('click', () => {
  lines.classList.toggle('active');
  navLinks.classList.toggle('active');
});