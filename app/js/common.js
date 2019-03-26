onload = function () {
    var div = document.getElementById("banner");
    var header = document.getElementById("header");
    var html = document.documentElement;
    div.style.height = window.innerHeight - header.offsetHeight + "px";

    onresize = function () {
        div.style.height = window.innerHeight - header.offsetHeight + "px";
    };
}

$(document).ready(function () {
    $('#gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - header.offsetHeight}, 800);
        return false;
    });

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 1) {
            $('header').addClass('header-fixed');
            $('#banner').css('marginTop', header.offsetHeight)
        } else {
            $('header').removeClass('header-fixed');
            $('#banner').css('marginTop', '0')
        }
    });
});