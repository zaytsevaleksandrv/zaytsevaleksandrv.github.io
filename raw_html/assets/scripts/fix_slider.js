$( window ).load(function() {
    $(window).resize(function() {
        if ($(window).width() > 992) {
            // позиционирование отображаемого элемента слайдером
            var _slick_box_height = $('.objects-box .slick-list.draggable').height()+50
            var _slick_box_width = $('.objects-box .slick-list.draggable').width()+50
            $('.objects-box .slick-list.draggable').css({
                "width": _slick_box_width.toString(),
                "height": _slick_box_height.toString(),
                "padding-left": "50px",
                "padding-top": "50px"
            });
            $(".objects-box .objects-box__slider-item.slick-slide").each(function(){
                if ($(this).data('slick-index') != 1 && $(this).data('slick-index') != 0){
                    // $(this).addClass('background-transparent');
                    slide_no_visible($(this))
                }
            });
            $('.slick-track').bind("DOMSubtreeModified",function(){
                add_transparent_background_slick_slide()
            });
            $('#objects-slider-button').click(function(){
                $(".objects-box .objects-box__slider-item.slick-slide").each(function(){
                    slide_visible($(this));
                });
            });
        }
    });
    $(window).resize();
})

var slide_no_visible = function (e) {
    e.animate({
        opacity: 0,
    },{
        duration: 300,
        queue: false
    });
}

var slide_visible = function (e) {
    e.animate({
        opacity: 1,
    },{
        duration: 300,
        queue: false
    });
}
var add_transparent_background_slick_slide = function () {
    var next = false
    $(".objects-box .objects-box__slider-item.slick-slide").each(function(){
        if ($(this).attr('aria-hidden') == "false"){
            // $(this).removeClass('background-transparent');
            slide_visible($(this));
            next = true
        }else if (next){
            // $(this).removeClass('background-transparent');
            slide_visible($(this));
            next = false
        }else{
            slide_no_visible($(this))
        }
    });
}
