//Preloader
$(window).on('load', function () {
    var $preloader = $('#preload');
    $preloader.delay(600).fadeOut('slow');
});
//Preloader end

onload = function () {
    var div = document.getElementById("banner");
    var header = document.getElementById("header");
    var html = document.documentElement;
    div.style.height = window.innerHeight - header.offsetHeight + "px";

    onresize = function () {
        div.style.height = window.innerHeight - header.offsetHeight + "px";
    };
};

$(document).ready(function () {
    $('#gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    $('a[href^="#"]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - header.offsetHeight
        }, 800);
        e.preventDefault();
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

    var mobileMenu = function () {

        $('.mobile-menu').click(function () {
            if ($(this).hasClass('close')) {
                $('header nav').animate({
                    right: '-180px'
                }, 350);
                $(this).removeClass('close');
                $('body').animate({
                    right: '0px'
                }, 350);
            } else {
                $('.mobile-menu').addClass('close');
                $('header nav').addClass('open-header');
                $('header nav').animate({
                    right: '0px'
                }, 350);
                $('body').animate({
                    right: '180px'
                }, 350);
            }
        });
    };

    $(document).ready(mobileMenu);

});

//Animation
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
);
wow.init();
//End animation