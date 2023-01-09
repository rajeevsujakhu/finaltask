var owl = $('.owl-carousel');
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
    });
  });
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    
    $(document).ready(function () {
        $('.stop').click(function () {
            $('.stop i').toggleClass('fa-light fa-play');
            $(this).toggleClass('play');
        });
    });