 // ---- Clients Swiper ----
    new Swiper('.clients-slider0', {
      slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20,
      loop: false,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        480:  { slidesPerView: 2, slidesPerGroup: 2 },
        768:  { slidesPerView: 3, slidesPerGroup: 3 },
        1024: { slidesPerView: 5, slidesPerGroup: 5 },
      }
    });
