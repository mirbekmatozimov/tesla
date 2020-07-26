$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        dots: true
    })
    $('.menu-btn').on('click', function(){
        $('.menu').addClass('active')
    });
    $('.quit').on('click', function () {
        $('.menu').removeClass('active')
    });



    
});