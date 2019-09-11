$(window).load(function() {
  $(".slider-projetos").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, 
        arrows: false

      }
    }
    ]
  });
});