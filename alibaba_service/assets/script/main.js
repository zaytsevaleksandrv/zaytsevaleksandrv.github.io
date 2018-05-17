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
