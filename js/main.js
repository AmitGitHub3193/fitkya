$(document).ready(function () {
    var body = $("body");

    /** START OF : Hamburger **/
    $('.mobile-hamburger').on('click', function (e) {
        $('body').toggleClass('is-open-menu');
        $(this).attr('aria-expanded', function (i, attr) {
            return attr === 'false';
        });
        e.preventDefault();
    });
    /** END OF : Hamburger **/

    var swiper = new Swiper('.swiper-workout', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500000, // Reduced for testing
            disableOnInteraction: false,
        },
    });


    let isDown = false;
    let startX;
    let scrollLeft;

    $('.nav-tabs').on('mousedown touchstart', function (e) {
        isDown = true;
        $(this).addClass('nav-tabs-scroll');
        startX = e.pageX || e.originalEvent.touches[0].pageX;
        scrollLeft = $(this).scrollLeft();
        e.preventDefault();
    });

    $('.nav-tabs').on('mouseleave mouseup touchend', function () {
        isDown = false;
        $(this).removeClass('nav-tabs-scroll');
    });

    $('.nav-tabs').on('mousemove touchmove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX || e.originalEvent.touches[0].pageX;
        const walk = (x - startX) * 3; // Adjust the scroll speed
        $(this).scrollLeft(scrollLeft - walk);
    });

});