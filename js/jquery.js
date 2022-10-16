jQuery(document).ready(function () {
  $(".top-banner").owlCarousel({
    // items: ,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      980: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
    loop: true,
  });
});
