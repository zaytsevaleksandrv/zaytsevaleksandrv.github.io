window.onscroll = function() {Sticky()};

//плавающий header
function Sticky() {
    var header = document.getElementById("myHeader"),
        sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("expert__top-sticky");
    } else {
        header.classList.remove("expert__top-sticky");
    }
}

//плавающий mobile header
function Sticky() {
    var header = document.getElementById("myHeaderMobile"),
        sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("mobile__menu-sticky");
    } else {
        header.classList.remove("mobile__menu-sticky");
    }
}

//menu mobile
function menuMobile() {
    let burger = document.getElementById('menuMobile'),
        nav = document.getElementById('navigation'),
        header = document.getElementById('myHeader');
    burger.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav-toggle_open');
    header.classList.toggle('header_open');
}

//sliders
$('.employees__slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
    ]
});

$('.gratitude__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: false,
                centerMode: false,
                dots: true
            }
        },
    ]
});

$('.footer__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
    ]
});
