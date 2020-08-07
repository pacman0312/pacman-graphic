$(function() {
    var menu = $('.menu__wrapper'),
        menuLink = $('.menu__link'),
        burger = $('.menu__burger'),
        close = $('.menu__close');
    
    burger.on('click', function(e) {
        e.preventDefault();
        $(close).addClass('active')
        $(menu).addClass('active')
        $(burger).addClass('active')
        $('body').css({
            'overflow': 'hidden'
        })
    });
    close.on('click', function(e) {
        e.preventDefault();
        $(close).removeClass('active')
        $(menu).removeClass('active')
        $(burger).removeClass('active')
        $('body').css({
            'overflow': ''
        });
    });
    menuLink.each(function() {
        $(this).on('click', function() {
            $(close).removeClass('active')
            $(menu).removeClass('active')
            $(burger).removeClass('active')
            $('body').css({
                'overflow': ''
            });
        })
    })

    // scroll -> activation arrow-up
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 500 ) {
            $('.arrow').fadeIn(100);
        } 
        else if ( $(this).scrollTop() < 500 ) {
            $('.arrow').fadeOut(100);
        }
    });

    // scroll smooth 
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 700);

        return false;
    });

    function ibg() {
        let ibg = document.querySelectorAll('.ibg');

        for (let f = 0; f < ibg.length; f++) {
            if (ibg[f].querySelector('img')) {
                ibg[f].style.backgroundImage = 'url(' + ibg[f].querySelector('img').getAttribute('src') + ')';
            }
        }
    }

    ibg();

});