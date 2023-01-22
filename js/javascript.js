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

$(document).ready(function () {
    $('.checkbtn').click(function () {
        $('.checkbtn i').toggleClass('fa-solid fa-xmark');
    });
});