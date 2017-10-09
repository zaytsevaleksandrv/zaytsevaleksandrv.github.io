    $('.news-box__content-photo-box-slider').slick({
        //infinite: true, // зацикливание перемотки слайдера ( по умолчанию true )
        //autoplay: false, // автопрокручивание слайдера ( по умолчанию false )
        //autoplaySpeed:2500, // скорость автопрокрутки слайдера ( работает только при включченном параметре autoplay: true )
        arrows: false, // включение/отключение встроенных стрелок для перемотри слайдера
        slidesToShow: 1, // количетво слайдов для просмотра
        slidesToScroll: 1, // количетво слайдов, которые будут перелистываться
        asNavFor: '.news-box__content-description-box-slider' // связывание слайдера с другим слайдером, чтобы при переклчениее одного, переключаляс и другой
    });

    // $('.news-box__text-slider').slick({
    $('.news-box__content-description-box-slider').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.news-box__content-photo-box-slider'
            // fade: true
    });

    // блок обработки нумерации сладера при пролистывании
    var $Slidernews = $('.news-box__content-photo-box-slider'), // элемент слайдера
        $currentSlideElnews = $('#news-current-slide'), // элемент для отобр текущего номера
        $allSlideElnews = $('#news-all-slide'); // элемент для отобр всего

    initCurrentSlideOfAllCounts($Slidernews[0].slick, 0, $currentSlideElnews, $allSlideElnews);

    $('.news-box__content-photo-box-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        changeCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideElnews, $allSlideElnews);
    });

    // блок нажатия кнопки для пролистывания слайдера
    $('#news-slider-button').click(function() {
        $('.news-box__content-photo-box-slider').slick('slickNext');
        $('.news-box__content-description-box-slider').slick('slickNext');
    });