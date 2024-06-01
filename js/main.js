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



    // var uniqueClasses = [
    //     'class-slide-1',
    //     'class-slide-2',
    //     'class-slide-3',
    //     // Add more classes as needed for each slide
    // ];

    // var imagePositions = [
    //     [
    //         { x: 0, y: 0 },     // Position for the first image in slide 1
    //         { x: 50, y: 0 },    // Position for the second image in slide 1
    //         { x: 0, y: 50 }     // Position for the third image in slide 1
    //     ],
    //     [
    //         { x: 100, y: 50 },  // Position for the first image in slide 2
    //         { x: 150, y: 50 },  // Position for the second image in slide 2
    //         { x: 100, y: 100 }  // Position for the third image in slide 2
    //     ],
    //     [
    //         { x: -50, y: 100 }, // Position for the first image in slide 3
    //         { x: -100, y: 100 },// Position for the second image in slide 3
    //         { x: -50, y: 150 }  // Position for the third image in slide 3
    //     ]
    //     // Add more positions as needed for each slide
    // ];

    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 250000, // Reduced for testing
    //         disableOnInteraction: false,
    //     },
    //     on: {
    //         slideChange: function() {
    //             var slides = swiper.slides;
    //             var activeIndex = swiper.activeIndex;

    //             // Remove unique classes from all slides
    //             slides.forEach(function(slide, index) {
    //                 uniqueClasses.forEach(function(uniqueClass) {
    //                     slide.classList.remove(uniqueClass);
    //                 });
    //             });

    //             // Add the unique class to the active slide
    //             slides[activeIndex].classList.add(uniqueClasses[activeIndex]);

    //             // Reset all transformations for images in all slides
    //             slides.forEach(function(slide) {
    //                 var images = slide.querySelectorAll('.asasas img');
    //                 images.forEach(function(image) {
    //                     image.style.transition = '';
    //                     image.style.transform = '';
    //                 });
    //             });

    //             // Ensure that the array has positions for all slides
    //             if (imagePositions[activeIndex]) {
    //                 var images = document.querySelectorAll('.swiper-slide-active .asasas img');
    //                 var positions = imagePositions[activeIndex];

    //                 // Apply transition and transform properties to each image
    //                 images.forEach(function(image, index) {
    //                     if (positions[index]) {
    //                         var position = positions[index];
    //                         image.style.transition = 'transform 0.5s ease-in-out';
    //                         image.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
    //                     }
    //                 });
    //             }

    //             // Optional: Log or perform other actions
    //             console.log('Active slide index:', activeIndex);
    //         }
    //     }
    // });







    // Define the circular path positions for the images
    // var radius = 200; // Adjust the radius as needed
    // var centerX = 270; // Center of the circle on the x-axis (half of the Oval's width)
    // var centerY = 270; // Center of the circle on the y-axis (half of the Oval's height)

    // var totalImages = 3; // Total number of images in each slide

    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 2500, // Reduced for testing
    //         disableOnInteraction: false,
    //     },
    //     on: {
    //         slideChange: function () {
    //             var activeIndex = swiper.activeIndex;

    //             // Reset all images positions if slideshow looped back to the first slide
    //             if (activeIndex === 0) {
    //                 resetImagePositions();
    //             }

    //             // Calculate angle step for each image
    //             var angleStep = 360 / totalImages;

    //             // Loop through each image in the active slide and animate its position
    //             for (var i = 0; i < totalImages; i++) {
    //                 var angle = (i * angleStep) + 90; // Start from the top (90 degrees)
    //                 var endPosition = calculatePosition(angle);
    //                 animatePosition(swiper.slides[activeIndex].querySelector('.asasas img:nth-child(' + (i + 1) + ')'), endPosition, 500); // Animate over 2 seconds
    //             }

    //             // Optional: Log or perform other actions
    //             console.log('Active slide index:', activeIndex);
    //         }
    //     }
    // });

    // function calculatePosition(angle) {
    //     var radian = angle * (Math.PI / 180);
    //     return {
    //         x: centerX + radius * Math.cos(radian),
    //         y: centerY + radius * Math.sin(radian)
    //     };
    // }

    // function animatePosition(image, endPos, duration) {
    //     var startTime = null;
    //     var startPos = {
    //         x: parseInt(image.style.left) || 0,
    //         y: parseInt(image.style.top) || 0
    //     };

    //     function animate(currentTime) {
    //         if (!startTime) startTime = currentTime;
    //         var elapsed = currentTime - startTime;
    //         var progress = Math.min(elapsed / duration, 1);

    //         var currentX = startPos.x + (endPos.x - startPos.x) * progress;
    //         var currentY = startPos.y + (endPos.y - startPos.y) * progress;

    //         image.style.left = currentX + 'px';
    //         image.style.top = currentY + 'px';

    //         if (progress < 1) {
    //             requestAnimationFrame(animate);
    //         }
    //     }

    //     requestAnimationFrame(animate);
    // }

    // function resetImagePositions() {
    //     var images = document.querySelectorAll('.asasas img');
    //     images.forEach(function (image) {
    //         image.style.left = '';
    //         image.style.top = '';
    //     });
    // }







    // var uniqueClasses = [
    //     'class-slide-1',
    //     'class-slide-2',
    //     'class-slide-3',
    //     // Add more classes as needed for each slide
    // ];
    
    // var swiper = new Swiper('.swiper-workout', {
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     autoplay: {
    //         delay: 250000, // Adjust the delay as needed
    //         disableOnInteraction: false,
    //     },
    //     on: {
    //         slideChange: function() {
    //             var slides = swiper.slides;
    //             var activeIndex = swiper.activeIndex;
    
    //             // Remove unique classes from all slides
    //             slides.forEach(function(slide, index) {
    //                 uniqueClasses.forEach(function(uniqueClass) {
    //                     slide.classList.remove(uniqueClass);
    //                 });
    //             });
    
    //             // Add the unique class to the active slide
    //             slides[activeIndex].classList.add(uniqueClasses[activeIndex]);
    
    //             // Optional: Log or perform other actions
    //             console.log('Active slide index:', activeIndex);
    //         }
    //     }
    // });
    







    var uniqueClasses = [
        'class-slide-1',
        'class-slide-2',
        'class-slide-3',
        // Add more classes as needed for each slide
    ];
    
    var swiper = new Swiper('.swiper-workout', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2500, // Adjust the delay as needed
            disableOnInteraction: false,
        },
        on: {
            slideChange: function() {
                var slides = swiper.slides;
                var activeIndex = swiper.activeIndex;
    
                // Remove unique classes from all slides
                slides.forEach(function(slide) {
                    uniqueClasses.forEach(function(uniqueClass) {
                        slide.classList.remove(uniqueClass);
                    });
                });
    
                // Add the unique class to the active slide
                slides[activeIndex].classList.add(uniqueClasses[activeIndex]);
    
                // Optional: Log or perform other actions
                console.log('Active slide index:', activeIndex);
            }
        }
    });
});