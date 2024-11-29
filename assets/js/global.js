const prevSliderIcon = '<img src="./assets/images/icons/prev.png"/>';
const nextSliderIcon = '<img src="./assets/images/icons/next.png"/>';

$(document).ready(function () {
    $('.main-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        // margin: 10,
        nav: true,
        navText: [
            prevSliderIcon,
            nextSliderIcon
        ],
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        },

    })

    $('.banner-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        nav: false,
        navText: [
            prevSliderIcon,
            nextSliderIcon
        ],
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        },

    })

    $('.category-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            prevSliderIcon,
            nextSliderIcon
        ],
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        },

    })

    $('.related-product-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            prevSliderIcon,
            nextSliderIcon
        ],
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },

    })

    $('.related-package-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            prevSliderIcon,
            nextSliderIcon
        ],
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        },

    })

    $('.content-slider .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        },

    })

    $('.product-slider-1 .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        },

    })

    $('.product-slider-2 .owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        },

    })

});


$("header .bottom-nav .nav-open button").click(function () {
    $("header .bottom-nav .nav-menu").animate({ right: '0' });
})
$("header .bottom-nav .nav-close button").click(function () {
    $("header .bottom-nav .nav-menu").animate({ right: '-300px' });
})


$("header .bottom-nav .categories-btn").click(function () {
    $("header .bottom-nav .mega-menu").toggle();
})

