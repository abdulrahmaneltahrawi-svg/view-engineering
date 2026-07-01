    // ---- Projects Filter ----
    document.addEventListener('DOMContentLoaded', function () {
      const tabs = document.getElementById('projects-filter-tabs');
      const cards = document.querySelectorAll('#projects-grid .project-card');

      tabs && tabs.addEventListener('click', function (e) {
        const t = e.target;
        if (!t.classList.contains('filter-item')) return;
        tabs.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
        t.classList.add('active');
        const cat = t.dataset.category;
        cards.forEach(card => {
          const show = cat === 'all' || card.dataset.category === cat;
          card.style.display = show ? 'block' : 'none';
        });
      });
    });