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