$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        autoplay:true,
        autoplayTimeout:1500,
        margin: 30,
        responsive:{
            0:{
                items:3,
            },
            600:{
                items:5,
            },
            1000:{
                items:7,

            }
        }
    });
});