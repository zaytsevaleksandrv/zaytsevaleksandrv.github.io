window.onscroll = function() {Sticky()};

//modalka
function Modal() {
    let modal = document.getElementById('modal');
    modal.classList.add("business-strategy__modal_active");

    this.closeModal = function() {
        modal.classList.remove('business-strategy__modal_active');
    };

    let btn_close = document.getElementById("btn_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);

}

//плавающий header
function Sticky() {
    var header = document.getElementById("myHeader"),
        header_mobile = document.getElementById("myHeaderMobile"),
        sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("expert__top-sticky");
        header_mobile.classList.add("mobile__menu-sticky");
    } else {
        header.classList.remove("expert__top-sticky");
        header_mobile.classList.remove("mobile__menu-sticky");
    }
}

//menu mobile
function menuMobile() {
    let burger = document.getElementById('menuMobile'),
        nav = document.getElementById('navigation'),
        header = document.getElementById('myHeaderMobile');
    burger.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav-toggle_open');
    header.classList.toggle('header_open');
}
//accordion mobile

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
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
