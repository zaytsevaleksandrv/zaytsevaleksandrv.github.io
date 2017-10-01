var carouselSob = $('#carouselSob');
$('.sob-block').click(function () {
    var imageType = parseInt($(this).attr('data-image-num'));
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    carouselSob.carousel(imageType);
});
carouselSob.bind('slide.bs.carousel', function (e) {
    var slide = e.to;
    var rightCarusel = $('#right-carusel');
    rightCarusel.find('.active').removeClass('active');
    rightCarusel.find('[data-image-num="' + slide + '"]').addClass('active');
});
//меню
var header_logo = $("header .logo");
var offset = header_logo.offset().left + header_logo.width();
var menu_horizontal = $('.menu_horizontal');
menu_horizontal.css('left', offset + 'px');
menu_horizontal.css('width', $(window).width() - offset + 'px');
$(window).resize(function () {
    setTimeout(function () {
        var menu_horizontal = $('.menu_horizontal');
        var header_logo = $("header .logo");
        var offset = header_logo.offset().left + header_logo.width();
        menu_horizontal.css('left', offset + 'px');
        menu_horizontal.css('width', $(window).width() - offset + 'px');
    }, 300);
});
$('.icon_status_menu').click(function () {
    $(this).parent().parent().toggleClass('open');
});
var about_slider = $('.about .slider');
if (about_slider.length) {
    about_slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '.leftb',
        variableWidth: true,
        centerMode: true,
        nextArrow: '.rightb',
        autoplaySpeed: 3000
    });
}
$('.hist_ .button_year a').click(function () {
    var num = parseInt($(this).attr('data-num'));
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    $('.hist_ .tab.active').removeClass('active');
    $('.hist_ .tab:eq('+num+')').addClass('active');
    $('.history .images img.active').removeClass('active');
    $('.history .images img:eq('+num+')').addClass('active');
    return false;
});
$('.products__item').click(function () {
    $('#productModal').modal('show');
});