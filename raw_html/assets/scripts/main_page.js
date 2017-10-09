/**
 * Created by AMisnik on 31.10.2016.
 */
$(document).ready(function() {
    //----photo-of-day------//
    $('.photo-of-day__left-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        asNavFor: '.photo-of-day__right-s',
        autoplay: true,
        autoplaySpeed: 10000,

    })
    $('.photo-of-day__right-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.photo-of-day__left-s',
        focusOnSelect: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });
    //----photo-of-day-end------//
    //----announs-end------//
    $('.announs__left-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        asNavFor: '.announs__right-s',
        autoplay: true,
        autoplaySpeed: 10000,

    })
    $('.announs__right-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.announs__left-s',
        focusOnSelect: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: true
            }
        }]
    });
    //----announs-end------//

    //-------news-block------//
    $('.newsMain__tab li').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.newsMain__visible').toggleClass('in').toggleClass('out');
        }
    })

    /*
        $(function() {
            var b = "fadeInLeft";
            var c;
            var a;
            d($("#myTab1 a"), $("#tab-content1"));

            function d(e, f, g) {
                e.click(function(i) {
                    i.preventDefault();
                    $(this).tab("show");
                    var h = $(this).data("easein");
                    if (c) {
                        c.removeClass(a);
                    }
                    if (h) {
                        f.find("div.active").addClass("animated " + h);
                        a = h;
                    } else {
                        if (g) {
                            f.find("div.active").addClass("animated " + g);
                            a = g;
                        } else {
                            f.find("div.active").addClass("animated " + b);
                            a = b;
                        }
                    }
                    c = f.find("div.active");
                });
            }
            $("a[rel=popover]").popover().click(function(f) {
                f.preventDefault();
                if ($(this).data("easein") != undefined) {
                    $(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
                } else {
                    $(this).next().addClass("animated " + b);
                }
            });
        });
    */
    //----kinds-of-sports--//

    $('.kinds-of-sports__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            }
        ]

    });
    //----kinds-of-sports-end--//
    //----media-block--//
    $('.media-gallery-links li').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            $('.visible').toggleClass('in').toggleClass('out');
        }
    })
    $('.media-gallery-tabs nav a').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.media-gallery-photo-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]

    });
    $('.media-gallery-video-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]

    });
    //---media-block-end--//
    //---objects-block--//
    $('.objects-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]

    });
    //---objects-block-end--//
    //---ambassadors-block--//
    $('.ambassadors__left-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        asNavFor: '.ambassadors__right-s',
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
    })
    $('.ambassadors__right-s').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ambassadors__left-s',
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
            breakpoint: 991,
            settings: {
                adaptiveHeight: true
            }
        }]
    });

    //----announs-end------//
    //---ambassadors-block-end--//

    //---------09_AMBASSADORS_BLOCK----------------
    /* $('.ambassadors-box__slider').slick({
        infinite: true,
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.ambassadors-box__photo-box-slider, .dotss-ul-ambassadors'
    });

    $('.ambassadors-box__photo-box-slider').slick({
        infinite: true,
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ambassadors-box__slider, .dotss-ul-ambassadors'
    });

   

    // блок нажатия кнопки для пролистывания слайдера
    $('#ambassadors-slider-button').click(function() {
        $('.ambassadors-box__slider').slick('slickNext');
        $('.ambassadors-box__photo-box-slider').slick('slickNext');
    });

    // блок нажатия кнопки для пролистывания слайдера при разрешении менее 768
    $('.ambassadors-navigation .slider-button').click(function() {
        $('.ambassadors-box__slider').slick('slickNext');
        $('.ambassadors-box__photo-box-slider').slick('slickNext');
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        changeCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideEl, $allSlideEl);
    });
    $(".ambassadors-box__slider-quote").niceScroll({
        background: '#fff',
        cursorborder: '0px',
        cursorwidth: '5px',
        mousescrollstep: '10',
        cursorborderradius: '0px',
        autohidemode: false,
        zindex: 1,
        cursorcolor: '#fff',
        horizrailenabled: false
    });
    //-----------ОБРАБОТКА_ВЫАДЮЩИХ_СПИСКОВ----------------
    $('#dropdown-select-photo').selectpicker({ size: 4, dropupAuto: false });
    $('[data-id=dropdown-select-photo]').trigger('click');

    $('#dropdown-select-video').selectpicker({ size: 4, dropupAuto: false });
    $('[data-id=dropdown-select-video]').trigger('click');
    $('#dropdown-select-video').selectpicker({ size: 4, dropupAuto: false });
    $('[data-id=dropdown-select-video]').trigger('click');

    $(".dropdown-menu.inner").niceScroll({
        background: '#CF0072',
        cursorborder: '0',
        cursorwidth: '4px',
        cursorborderradius: '0px',
        autohidemode: false,
        zindex: 1,
        cursorcolor: '#CF0072',
        horizrailenabled: false,
        railalign: 'left',
        horizrailenabled: false
    });
  
    //------------------------Для открытой фото галереи, убирает клонированные слайды из галлереи
    $('.fancybox-media-album.slick-slide.slick-cloned').each(function() {
        $(this).removeClass('fancybox-media-album')
    });
*/
    //sign-in modal window
    $(document).ready(function() {
        var modalForm = {
            init: function() {
                var elem = $('.modal__field');
                $('.modal__field-input').val('');
                elem.on('input', '.modal__field-input', modalForm._oninput);
            },
            _oninput: function(e) {
                var $this = $(this);
                if (this.value.length > 0) {
                    $this.closest('.modal__field').addClass('active-form');
                } else {
                    $this.closest('.modal__field').removeClass('active-form');
                }
            },
            _adjustHeight: function(e) {
                var textarea = e.target;
                textarea.style.height = '30px';
                textarea.style.height = textarea.scrollHeight + "px";

            }

        };
        modalForm.init();
    });
    //sign-in modal window end
});