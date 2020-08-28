const portfolio = {};

portfolio.eventListener = function () {

// burger nav
    $('.hamburger-menu').on('click', function (e) {
        e.preventDefault();
        $('.side-nav').slideToggle();
    });

    $('.side-nav a').on('click', function (e) {
        e.preventDefault();
        $('.side-nav').slideToggle();
    });


// scroll to sections
    $('.home').on('click', function () {
        portfolio.scroll("header");
    });

    $('.down-arrow').on('click', function () {
        portfolio.scroll(".about-me-section");
    });

    $('.about').on('click', function () {
        portfolio.scroll(".about-me-section");
    });

    $('.skills').on('click', function () {
        portfolio.scroll(".skills-section");
    });

    $('.portfolio').on('click', function () {
        portfolio.scroll(".projects-section");
    });

    $('.contact').on('click', function () {
        portfolio.scroll(".contact-section");
    });

    $('.logo').on('click', function () {
        portfolio.scroll(".header");
    });

    // $('.back-to-top').on('click', function () {
    //     portfolio.scroll("header");
    // });
}

// Smooth scroll 
portfolio.scroll = function (element) {
    $('html').animate(
        {
            scrollTop: $(element).offset().top
        }, 800
    );
};

// Init
portfolio.init = function () {
    portfolio.eventListener();
}

//Document ready
$(function () {
    portfolio.init();
    AOS.init();
});