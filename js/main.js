// ! PRELOADER
$(window).on("load", function () {
    $(".block")
        .delay(450)
        .fadeOut(1000);
    $(".preloader")
        .delay(500)
        .fadeOut(500);
});
// Phone slider
$(document).ready(function () {

    $('.slide-item').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayTimeout: 2500
    });
    $(".brand-img").owlCarousel({
        items: 1,
        loop: true,
        // dots: true,
        // nav: true,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            1280: {
                items: 5
            },
            900:{
                items: 3
            },
            600: {
                items: 2
            },
            400: {
                items: 2
            }

        }
    });
});

//Wow JS

var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

// Disabled terms and report link

const footerLink = document.querySelectorAll('.terms a');
footerLink.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
    });
});