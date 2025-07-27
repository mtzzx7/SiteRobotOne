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

function toggleDropdown(event) {
            event.stopPropagation(); // Impede que o clique no botão feche a dropdown
            document.getElementById("myDropdown").classList.toggle("show");
        }
        // Fecha a dropdown se o usuário clicar fora dela
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown button')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
