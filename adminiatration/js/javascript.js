$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
    $(".arrow").show()
    }
    else
    {
        $(".arrow").hide()
    }
})

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