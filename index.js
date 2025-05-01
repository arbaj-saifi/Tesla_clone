const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,  // change to 2 or 3 for multi-slide
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Uncomment below for multi-slide view
  /*
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  */
});
