$(window).scroll(function(){
    if ( $(this).scrollTop() > 1700 ) {
        $('.block_popup').addClass('block_popup_animate');
    }
})
$('.search').click(function(e){
    e.preventDefault();
    $('.mobile-search-input').slideToggle();
    $(this).toggleClass('open');
});
$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('.mobile-header-nav').slideToggle();
    $(this).toggleClass('open');
});
$('.panel-title a').click(function(e){
    e.preventDefault();
    if ($('.arrow_down').hasClass("arrow_down_rot")) {
        $('.arrow_down').removeClass("arrow_down_rot")
    }else{
        $('.arrow_down').addClass('arrow_down_rot');
    }
});