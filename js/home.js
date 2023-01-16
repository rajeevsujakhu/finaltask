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
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
    })
    
    $(document).ready(function () {
        $('.stop').click(function () {
            $('.stop i').toggleClass('fa-light fa-play');
            $(this).toggleClass('play');
        });
    });

    function disableScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }