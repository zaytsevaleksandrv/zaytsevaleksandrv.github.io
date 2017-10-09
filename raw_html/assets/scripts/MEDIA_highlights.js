$(function() {
    var b_tag = $('.media-highlights__b-tag'),
        animateTime = 500,
        l_open = $('#link-open');
    l_open.click(function() {
        if (b_tag.height() === 55) {
            autoHeightAnimate(b_tag, animateTime);
            l_open.text('Скрыть теги');
        } else {
            b_tag.stop().animate({ height: '55' }, animateTime);
            l_open.text('Показать все теги');
        }
    });
})

function autoHeightAnimate(element, time) {
    var curHeight = element.height(),
        autoHeight = element.css('height', 'auto').height();
    element.height(curHeight);
    element.stop().animate({ height: autoHeight }, time);
}