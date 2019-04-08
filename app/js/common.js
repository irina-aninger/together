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

    var mobileMenu = function() {

        $('.mobile-menu').click(function() {
            $('header').removeClass('header-fixed');
            $('header').addClass('open-header');
            $('header').animate({
                right: '0px'
            }, 300);
            $('.mobile-menu').addClass('close');
            $('body').animate({ //выбираем тег body и метод animate

                right: '180px' /* чтобы всё содержимое также сдвигалось вправо
               при открытии меню, установим ему положение 285px */

            }, 300); //скорость движения меню в мс
        });
        $('.mobile-menu.close').click(function() {
            $('nav').animate({
                right: '180px'
            }, 350);
            $('.mobile-menu').removeClass('close');
            $('body').animate({ //выбираем тег body и метод animate

                right: '0px' //а содержимое страницы снова вернется в положение 0px

            }, 350); //скорость движения меню в мс
        });
    };

    $(document).ready(mobileMenu);

});

//Animation
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();
//End animation