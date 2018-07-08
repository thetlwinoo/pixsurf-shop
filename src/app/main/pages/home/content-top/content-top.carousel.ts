export const carousel = {
    options: {
        style: {
            "background-image": "url('assets/images/home/slide1.jpg')no-repeat auto auto"
        },
        sub: {
            autoplay: false,
            pagination: false,
            smartSpeed: 1000,
            navText: [
                "<i class='fa fa-angle-left' aria-hidden='true'><\/i>",
                "<i class='fa fa-angle-right' aria-hidden='true'><\/i>"
            ],
            nav: true,
            loop: true,
            dots: false,
            responsive: {
                0: {
                    nav: true,
                    items: 1
                },
                600: {
                    nav: false,
                    items: 2
                },
                1000: {
                    loop: true,
                    nav: true,
                    items: 3
                }
            },
            responsiveClass: true,
            autoplayHoverPause: true,
            addClassActive: true,
            items: 3
        },
        main: {
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            lazyLoad: true,
            autoplay: true,
            pagination: true,
            smartSpeed: 1000,
            navText: [
                "<i class='fa fa-angle-left' aria-hidden='true'><\/i>",
                "<i class='fa fa-angle-right' aria-hidden='true'><\/i>"
            ],
            nav: true,
            loop: true,
            dots: false,
            stopOnHover: true,
            addClassActive: true,
            items: 1
        }
    },
    slides: [
        {
            button: '<span>Shop now!<\/span>',
            description: 'Samsung, Apple, Sony, Lenovo',
            deal: 'sale: <span>up to<\/span> 70% <span>off<\/span>',
            header: 'mobile & tablet',
            transition: 'lightSpeedIn',
            image: 'slide1'
        },
        {
            button: '<span>Shop now!<\/span>',
            description: 'All Products for Girl',
            deal: 'upto 40% off',
            header: 'sunglasses',
            transition: 'zoomInRight',
            image: 'slide2'
        },
        {
            button: '<span>Shop now!<\/span>',
            description: 'Kute Girl - Collection 2016',
            deal: 'from $299.00',
            header: 'shoe bupbe top model',
            transition: 'bounceInLeft',
            image: 'slide3'
        }
    ]
}