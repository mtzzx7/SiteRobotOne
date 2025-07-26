document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
const toggleBtn = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});
