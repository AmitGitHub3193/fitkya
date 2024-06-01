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

    var uniqueClasses = [
        'class-slide-1',
        'class-slide-2',
        'class-slide-3',
        // Add more classes as needed for each slide
    ];
    
    var imagePositions = [
        [
            { x: 0, y: 0 },     // Position for the first image in slide 1
            { x: 50, y: 0 },    // Position for the second image in slide 1
            { x: 0, y: 50 }     // Position for the third image in slide 1
        ],
        [
            { x: 100, y: 50 },  // Position for the first image in slide 2
            { x: 150, y: 50 },  // Position for the second image in slide 2
            { x: 100, y: 100 }  // Position for the third image in slide 2
        ],
        [
            { x: -50, y: 100 }, // Position for the first image in slide 3
            { x: -100, y: 100 },// Position for the second image in slide 3
            { x: -50, y: 150 }  // Position for the third image in slide 3
        ]
        // Add more positions as needed for each slide
    ];
    
    var swiper = new Swiper('.swiper-workout', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500, // Reduced for testing
            disableOnInteraction: false,
        },
        on: {
            slideChange: function() {
                var slides = swiper.slides;
                var activeIndex = swiper.activeIndex;
    
                // Remove unique classes from all slides
                slides.forEach(function(slide, index) {
                    uniqueClasses.forEach(function(uniqueClass) {
                        slide.classList.remove(uniqueClass);
                    });
                });
    
                // Add the unique class to the active slide
                slides[activeIndex].classList.add(uniqueClasses[activeIndex]);
    
                // Ensure that the array has positions for all slides
                if (imagePositions[activeIndex]) {
                    var images = document.querySelectorAll('.swiper-slide-active .asasas img');
                    var positions = imagePositions[activeIndex];
    
                    // Apply transition and transform properties to each image
                    images.forEach(function(image, index) {
                        if (positions[index]) {
                            var position = positions[index];
                            image.style.transition = 'transform 0.5s ease-in-out';
                            image.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
                        }
                    });
                }
    
                // Optional: Log or perform other actions
                console.log('Active slide index:', activeIndex);
            }
        }
    });
    
    

});