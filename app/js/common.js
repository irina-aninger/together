onload = function() {
    var div  = document.getElementById("banner");
    var header = document.getElementById("header");
    var html = document.documentElement;
    div.style.height = window.innerHeight - header.offsetHeight + "px";

    onresize = function() {
        div.style.height = window.innerHeight - header.offsetHeight + "px";
    };
}

$( document ).ready(function() {
$('#gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
});

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50 }, 800);
        return false;
    });
});