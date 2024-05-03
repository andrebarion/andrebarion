$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      loop: true,
      autoplay: true,
      smartSpeed: 800,
      autoplayTimeout: 4000,
    },
    600: {
      items: 4,
      nav: false,
      loop: false,
    },
    1000: {
      items: 4,
      nav: false,
      loop: false,
    },
  },
});
