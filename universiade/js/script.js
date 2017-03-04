$(window).scroll(function(){
    if ( $(this).scrollTop() > 1700 ) {
        $('.block_popup').addClass('block_popup_animate');
    }
})