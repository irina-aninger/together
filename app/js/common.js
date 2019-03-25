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

    var mainSection = $(".main");
    var header = $("header");

    mainSection.css({'marginTop':(header.height()+'px')});

    mainSection.marginTop(header.height());

    var highestCol = Math.max(mainSection.marginTop(),header.height());
    mainSection.marginTop(highestCol);


});