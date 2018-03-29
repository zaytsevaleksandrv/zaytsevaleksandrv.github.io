window.onscroll = function() {Sticky()};

//плавающий header
function Sticky() {
    var header = document.getElementById("myHeader"),
        sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("tectus__header-sticky");
    } else {
        header.classList.remove("tectus__header-sticky");
    }
}

//плавный переход, активные ссылки
var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});

// Функция изменяет содержимое more_link
function moreNews() {
    var more_new = document.getElementById("more_new");
    more_new.classList.toggle("open");

    if (more_link.firstChild.nodeValue == "Скрыть") {
        more_link.firstChild.nodeValue = "Показать еще";
    } else {
        more_link.firstChild.nodeValue = "Скрыть";
    }
}

var more_link = document.getElementById("more_link");
more_link.addEventListener("click", moreNews, false);

//sliders
$('.tectus__amenities-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});

$('.tectus__project-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    centerPadding: '0px',
    dots: true,
});
