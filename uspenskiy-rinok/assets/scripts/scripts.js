$('.sob-block').click(function () {
    var imageType = parseInt($(this).attr('data-image-num'));
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    $('#carouselSob').carousel(imageType);
});
$('#carouselSob').bind('slide.bs.carousel', function (e) {
    var slide = e.to;
    var rightCarusel = $('#right-carusel');
    rightCarusel.find('.active').removeClass('active');
    rightCarusel.find('[data-image-num="' + slide + '"]').addClass('active');
});
//меню
var offset = $("header .logo").offset().left + $("header .logo").width();
$('.menu_horizontal').css('left', offset + 'px');
$('.menu_horizontal').css('width', $(window).width() - offset + 'px');
$(window).resize(function () {
    setTimeout(function () {
        var offset = $("header .logo").offset().left + $("header .logo").width();
        $('.menu_horizontal').css('left', offset + 'px');
        $('.menu_horizontal').css('width', $(window).width() - offset + 'px');
    }, 300);
});
$('.icon_status_menu').click(function () {
    $(this).parent().parent().toggleClass('open');
});
$('.about .slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '.leftb',
    variableWidth: true,
    centerMode: true,
    nextArrow: '.rightb',
    autoplaySpeed: 3000
});
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