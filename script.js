// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  // MENU MOBILE
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
    });
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    menuToggle.setAttribute("tabindex", "0");
  }

  // DROPDOWNS
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-btn");
    if (btn) {
      btn.setAttribute("tabindex", "0");
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Fecha outros dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active");
            const otherBtn = otherDropdown.querySelector(".dropdown-btn");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          }
        });
        // Toggle do dropdown atual
        dropdown.classList.toggle("active");
        btn.setAttribute("aria-expanded", dropdown.classList.contains("active"));
      });
      // Acessibilidade: abrir dropdown com Enter ou Espaço
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
    }
  });

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      const btn = dropdown.querySelector(".dropdown-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });

  // Fecha menu mobile ao clicar em um link
  const navLinksAll = document.querySelectorAll(".dropdown-content a");
  navLinksAll.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks) {
        navLinks.classList.remove("active");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      }
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
        const btn = dropdown.querySelector(".dropdown-btn");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    });
  });

  // DOTS ANIMATION (opcional)
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.setAttribute("tabindex", "0");
    dot.setAttribute("aria-label", `Ir para slide ${index + 1}`);
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("dot-active"));
      dot.classList.add("dot-active");
    });
    // Acessibilidade: ativar com Enter ou Espaço
    dot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dot.click();
      }
    });
  });

  // Mensagem de carregamento
  console.log("Script carregado com sucesso!");
});