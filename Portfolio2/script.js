// script.js

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  window.addEventListener("scroll", function() {
    // Change navbar background when scrolling
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Highlight active section in the navbar
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - navbar.offsetHeight;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.getAttribute("id")) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - navbar.offsetHeight,
        behavior: "smooth"
      });

      // Collapse the navbar after clicking a link
      if (window.innerWidth <= 991) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  // Keep toggle button visible when menu is open
  navbarToggler.addEventListener("click", function() {
    if (!navbarCollapse.classList.contains("show")) {
      navbarToggler.style.zIndex = "1051"; // Bring the button to front when menu is open
    } else {
      navbarToggler.style.zIndex = "1050"; // Reset to default when menu is closed
    }
  });
});
