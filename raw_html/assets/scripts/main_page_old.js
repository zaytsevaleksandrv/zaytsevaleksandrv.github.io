/**
 * Created by AMisnik on 31.10.2016.
 */
$(document).ready(function() {
    //---------PHOTO_OF_THE_DAY_BLOCK----------------
    $('.photo-of-the-day-box__photo-slider').slick({
        //infinite: true, // зацикливание перемотки слайдера ( по умолчанию true )
        //autoplay: false, // автопрокручивание слайдера ( по умолчанию false )
        //autoplaySpeed:2500, // скорость автопрокрутки слайдера ( работает только при включченном параметре autoplay: true )
        arrows: false, // включение/отключение встроенных стрелок для перемотри слайдера
        slidesToShow: 1, // количетво слайдов для просмотра
        slidesToScroll: 1, // количетво слайдов, которые будут перелистываться
        asNavFor: '.photo-of-the-day-box__text-slider' // связывание слайдера с другим слайдером, чтобы при переклчениее одного, переключаляс и другой
    });

    $('.photo-of-the-day-box__text-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.photo-of-the-day-box__photo-slider'
            // fade: true
    });

    // блок обработки нумерации сладера при пролистывании
    var $photoOfDaySlider = $('.photo-of-the-day-box__photo-slider'), // элемент слайдера
        $currentSlideElPhotoOfDay = $('#photo-of-the-day-current-slide'), // элемент для отобр текущего номера
        $allSlideElPhotoOfDay = $('#photo-of-the-day-all-slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($photoOfDaySlider[0].slick, 0, $currentSlideElPhotoOfDay, $allSlideElPhotoOfDay);

    $('.photo-of-the-day-box__photo-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElPhotoOfDay, $allSlideElPhotoOfDay);
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('#photo-of-the-day-slider-button').click(function() {
        $('.photo-of-the-day-box__photo-slider').slick('slickNext');
        $('.photo-of-the-day-box__text-slider').slick('slickNext');
    });


    //---------03_TODAY_BLOCK----------------
    $('.today-box__today-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        responsive: [ // задание дополнительных параметров для сладера при разных разрещениям экрана
            {
                breakpoint: 645, // разрешение экрана
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    // блок обработки нумерации сладера при пролистывании
    var $todaySlider = $('.today-box__today-slider'), // элемент слайдера
        $currentSlideElTodaySlider = $('#today-current-slide'), // элемент для отобр текущего номера
        $allSlideElTodaySlider = $('#today-all-slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($todaySlider[0].slick, 0, $currentSlideElTodaySlider, $allSlideElTodaySlider);

    $('.today-box__today-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElTodaySlider, $allSlideElTodaySlider);
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('#today-slider-button').click(function() {
        $('.today-box__today-slider').slick('slickNext')
    });


    //---------05_KINDS_OF SPORTS_BLOCK----------------
    $('.kinds-of-sports-box__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.dotss-ul-kinds-of-sports',
        responsive: [{
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });

    $('.dotss-ul-kinds-of-sports').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.kinds-of-sports-box__slider',
        responsive: [{
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('#kinds-of-sports-slider-button').click(function() {
        $('.kinds-of-sports-box__slider').slick('slickNext')
    });

    //---------06_PHOTO_BLOCK----------------
    $('.photo-box__photo-box-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // cssEase: 'linear',
        arrows: false,
        rtl: true,
        asNavFor: '.photo-box__photo-box-slider-mini',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.photo-box__photo-box-slider-mini').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        // cssEase: 'linear',
        arrows: false,
        rtl: true,
        asNavFor: '.photo-box__photo-box-slider',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // блок обработки нумерации сладера при пролистывании
    var $photoBoxSlider = $('.photo-box__photo-box-slider'), // элемент слайдера
        $currentSlideElPhotoBoxSlider = $('#photo-box-current-slide'), // элемент для отобр текущего номера
        $allSlideElPhotoBoxSlider = $('#photo_box_all_slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($photoBoxSlider[0].slick, 0, $currentSlideElPhotoBoxSlider, $allSlideElPhotoBoxSlider);

    $('.photo-box__photo-box-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElPhotoBoxSlider, $allSlideElPhotoBoxSlider);
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('.photo-box__photo-box-slider-mini').on('click', function(currentSlide) {
        $('.photo-box__photo-box-slider').slick('slickNext')
        $('.photo-box__photo-box-slider-mini').slick('slickNext')
    });


    //---------07_VIDEO_BLOCK----------------
    // var videoBoxAllSlide = $('.video-box__video-box-slider').children().length;
    $('.video-box__video-box-slider').slick({
        infinite: true,
        // rtl: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        asNavFor: '.video-box__video-box-slider-mini',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.video-box__video-box-slider-mini').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        // cssEase: 'linear',
        arrows: false,
        asNavFor: '.video-box__video-box-slider',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // блок обработки нумерации сладера при пролистывании
    var $videoBoxSlider = $('.video-box__video-box-slider'), // элемент слайдера
        $currentSlideElVideoBoxSlider = $('#video-box-current-slide'), // элемент для отобр текущего номера
        $allSlideElVideoBoxSlider = $('#video-box-all-slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($videoBoxSlider[0].slick, 0, $currentSlideElVideoBoxSlider, $allSlideElVideoBoxSlider);

    $('.video-box__video-box-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElVideoBoxSlider, $allSlideElVideoBoxSlider);
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('.video-box__video-box-slider-mini').on('click', function(currentSlide) {
        $('.video-box__video-box-slider').slick('slickNext');
        $('.video-box__video-box-slider-mini').slick('slickNext');
    });


    //---------08_OBJECTS_BLOCK----------------
    $('.objects-box__slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase: 'linear', // анимация пролистывания слайдов
        vertical: true, // делает пролистывание слайдера вертикальным
        speed: 1000 // скорость пролистывания слайдов
    });

    // блок обработки нумерации сладера при пролистывании
    var $objectsSlider = $('.objects-box__slider'), // элемент слайдера
        $currentSlideElObjectsSlider = $('#objects-box-current-slide'), // элемент для отобр текущего номера
        $allSlideElObjectsSlider = $('#objects-box-all-slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($objectsSlider[0].slick, 0, $currentSlideElObjectsSlider, $allSlideElObjectsSlider);

    $('.objects-box__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElObjectsSlider, $allSlideElObjectsSlider);
    });

    // блок анимации перелистывания слайдов
    $(window).resize(function() {
        if ($(window).width() > 992) {

            objectsBoxCurrentlySlide = $('.objects-box__slider').slick('slickCurrentSlide');

            $('.objects-box__slider-item:eq(' + (objectsBoxCurrentlySlide + 2) + ')').css("margin-top", "-270px");
            $('.objects-box__slider-item:eq(' + (objectsBoxCurrentlySlide + 2) + ')').css("margin-left", "70px");
            $('.objects-box__slider-item:eq(' + (objectsBoxCurrentlySlide + 2) + ')').css("position", "relative");


            $('.objects-box__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                $('.objects-box__slider-item:eq(' + (currentSlide + 1) + ')').css("position", "relative");
                $('.objects-box__slider-item:eq(' + (currentSlide + 1) + ')').css("margin-top", "0");

                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("margin-top", "0");
                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("margin-left", "0");
                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("position", "relative");
                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("transition", "margin-left 1s,margin-top 1s");

                $('.objects-box__slider-item:eq(' + (currentSlide + 3) + ')').css("margin-top", "-270px");
                $('.objects-box__slider-item:eq(' + (currentSlide + 3) + ')').css("margin-left", "70px");
                $('.objects-box__slider-item:eq(' + (currentSlide + 3) + ')').css("position", "relative");

                $('.objects-box__slider-item:eq(' + (currentSlide + 4) + ')').css("margin-left", "70px");
            });

            $('.objects-box__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                $('#objects-box-current-slide').text(currentSlide + 1);

                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("margin-top", "-270px");
                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("margin-left", "70px");
                $('.objects-box__slider-item:eq(' + (currentSlide + 2) + ')').css("position", "relative");
            });
        } else {

            $('.objects-box__slider-item').css("margin-top", "0");
            $('.objects-box__slider-item').css("margin-left", "0");
            $('.objects-box__slider-item').css("position", "relative");

            $('.objects-box__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                $('.objects-box__slider-item').css("margin-top", "0");
                $('.objects-box__slider-item').css("margin-left", "0");
                $('.objects-box__slider-item').css("position", "relative");
                $('.objects-box__slider-item').css("transition", "none");
            });

            $('.objects-box__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                $('#objects-box-current-slide').text(currentSlide + 1);

                $('.objects-box__slider-item').css("margin-top", "0");
                $('.objects-box__slider-item').css("margin-left", "0");
                $('.objects-box__slider-item').css("position", "relative");
            });
        }
    });

    $(window).resize();

    // блок нажатия кнопки для пролистывания слайдера
    $('#objects-slider-button').click(function() {
        currentlySlide = $('.objects-box__slider').slick('slickCurrentSlide');
        $('.objects-box__slider').slick('slickNext')
    });


    //---------09_AMBASSADORS_BLOCK----------------
    $('.ambassadors-box__slider').slick({
        infinite: true,
        // autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.ambassadors-box__photo-box-slider, .dotss-ul-ambassadors'
    });

    $('.ambassadors-box__photo-box-slider').slick({
        infinite: true,
        // autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ambassadors-box__slider, .dotss-ul-ambassadors'
    });

    $('.dotss-ul-ambassadors').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        asNavFor: '.ambassadors-box__slider, .ambassadors-box__photo-box-slider'
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

    //-----------ОБРАБОТКА_ВЫАДЮЩИХ_СПИСКОВ----------------
    $('#dropdown-select-photo').selectpicker({ size: 6, dropupAuto: false });
    $('#dropdown-select-video').selectpicker({ size: 6, dropupAuto: false });
    ogrEvent();
    $(window).resize(ogrEvent);

    function ogrEvent() {
        if ($(window).width() > 991) {
            $('[data-id=dropdown-select-photo]').trigger('click');
            $('[data-id=dropdown-select-video]').trigger('click');
        }
    };

    $(".dropdown-menu.inner").niceScroll({ background: '#c9e6fa', cursorborder: '0', cursorwidth: '4px', cursorborderradius: '0px', autohidemode: false, zindex: 999, cursorcolor: '#cf0072' });

});