// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  // MENU MOBILE
  const menuToggle = document.getElementById("menuToggle")
  const navLinks = document.getElementById("navLinks")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // DROPDOWNS
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-btn")

    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()

        // Fecha outros dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("active")
          }
        })

        // Toggle do dropdown atual
        dropdown.classList.toggle("active")
      })
    }
  })

  // Fecha dropdowns ao clicar fora
  document.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  })

  // Fecha menu mobile ao clicar em um link
  const navLinksAll = document.querySelectorAll(".dropdown-content a")
  navLinksAll.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks) {
        navLinks.classList.remove("active")
      }
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active")
      })
    })
  })

  // DOTS ANIMATION (opcional)
  const dots = document.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("dot-active"))
      dot.classList.add("dot-active")
    })
  })

  console.log("Script carregado com sucesso!")
})
