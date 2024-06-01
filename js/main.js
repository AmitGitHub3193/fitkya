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
    
    /** START OF : Hamburger **/
    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    // });

    // 
    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     on: {
    //         slideChangeTransitionStart: function () {
    //             // Remove translation classes from all elements
    //             document.querySelectorAll('.column_img_fir, .column_img_sec, .column_img_thi').forEach(function(element) {
    //                 element.classList.remove('translated');
    //             });

    //             // Add translation classes to the elements in the active slide
    //             var activeSlide = document.querySelector('.swiper-slide-active');
    //             if (activeSlide) {
    //                 var imgFir = activeSlide.querySelector('.column_img_fir');
    //                 var imgSec = activeSlide.querySelector('.column_img_sec');
    //                 var imgThi = activeSlide.querySelector('.column_img_thi');

    //                 if (imgFir && imgSec && imgThi) {
    //                     imgFir.classList.add('translated');
    //                     imgSec.classList.add('translated');
    //                     imgThi.classList.add('translated');
    //                 }
    //             }
    //         }
    //     }
    // });
    // 

    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 250000,
    //         disableOnInteraction: false,
    //     },
        
    // });


    var swiper = new Swiper('.swiper-workout', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500000, // Reduced for testing
            disableOnInteraction: false,
        },
        // on: {
        //     slideChange: function() {
        //         var activeIndex = swiper.activeIndex;
        //         var rotationDegree = activeIndex * 90;
        //         document.querySelector('.asasas').style.transition = 'transform 0.5s ease-in-out';
        //         document.querySelector('.asasas').style.transform = 'rotate(' + rotationDegree + 'deg)';
        //     }
        // }
    });
    

});