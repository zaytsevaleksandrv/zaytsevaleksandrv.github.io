var carouselRest = $('#carouselRest');
$('.sob-block').click(function () {
    var imageType = parseInt($(this).attr('data-image-num'));
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    carouselRest.carousel(imageType);
});
carouselRest.bind('slide.bs.carousel', function (e) {
    var slide = e.to;
    var rightCarusel = $('#right-carusel');
    rightCarusel.find('.active').removeClass('active');
    rightCarusel.find('[data-image-num="' + slide + '"]').addClass('active');
});


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

$('.foodcourt__before').click(function () {
    $('#foodcourtModal').modal('show');
});
