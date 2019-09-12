$(window).load(function() {
  $(".slider-projetos").slick({
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 720,
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

let video = document.querySelector('.video');

$('.bt-play').click(function() {
  video.play();
  $(".modal").fadeIn(250);
});
$('.mascara').click(function() {
  videoPause();
});
$('.bt-fechar').click(function(){
  videoPause();
});
function videoPause(){
  video.pause();
  $(".modal").fadeOut();
}

$(".slider-projetos li").each(function(index) {
    $(this).on("click", function(){
      let alt = $(this).find('img').attr('alt'); 
      $('.modal-projeto').html('<button class="bt-fechar">Fechar</button><img src="" alt="'+ alt +'" /><span class="mascara"></span>');
    });
});