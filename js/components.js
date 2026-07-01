// Load header
fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      // ---- Hamburger Menu (must be after header is loaded) ----
      const hamburger = document.getElementById('hamburger-menu');
      if (hamburger) {
        hamburger.addEventListener('click', function() {
          const navMenu = document.getElementById('nav-menu');
          navMenu.classList.toggle('active');
        });
      }
    });

// Load footer
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
