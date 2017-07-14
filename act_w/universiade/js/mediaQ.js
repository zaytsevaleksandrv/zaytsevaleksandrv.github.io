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
	if ($(this).find('.arrow_down').hasClass("arrow_down_rot")) {
		$(this).find('.arrow_down').removeClass("arrow_down_rot")
	}else{
		$(this).find('.arrow_down').addClass('arrow_down_rot');
	}
});
$('.block_sport_mobile .panel-title a').click(function(e){
    e.preventDefault();
    if ($(this).find('.arrow_blue').hasClass("arrow_blue_rot")) {
        $(this).find('.arrow_blue').removeClass("arrow_blue_rot")
        $(this).find('.block_sport_mobile ul li').css('padding-bottom', '11px');
    }else{
        $(this).find('.arrow_blue').addClass('arrow_blue_rot');
        $(this).find('.block_sport_mobile ul li').css('padding-bottom', 'unset');
    }
});
$(document).ready(function(){
var ravenous = function() { 
    if (matchMedia(' only screen and (max-width: 767px)').matches)
    {
        $('.list_uni').addClass('col-xs-12').removeClass('col-xs-6');
        $('.list_sport').addClass('col-xs-12').removeClass('col-xs-6');
        $('.list_media').addClass('col-xs-12').removeClass('col-xs-6');
        $('.list_all').addClass('col-xs-12').removeClass('col-xs-6');

    } else {
        $('.list_uni').addClass('col-xs-6').removeClass('col-xs-12');
        $('.list_sport').addClass('col-xs-6').removeClass('col-xs-12');
        $('.list_media').addClass('col-xs-6').removeClass('col-xs-12');
        $('.list_all').addClass('col-xs-6').removeClass('col-xs-12');

    }

    if (matchMedia(' only screen and (max-width: 749px)').matches)
    {
        $('.header__mobile').css('display', 'none');
        $('.btn_header_mobile').addClass('col-xs-4').addClass('text-right').removeClass('col-xs-2').removeClass('text-center');
        $('.logo_header_mobile').addClass('col-xs-4').removeClass('col-xs-2');
        $('.header__search_lang_mob').addClass('text-center').removeClass('text-right');
        $('.block_sport_mobile').addClass('col-xs-11').removeClass('col-xs-7');             
        $('.block_list_medal').addClass('col-xs-12').removeClass('col-xs-3');
        $('#block__news_a_1').addClass('col-xs-12').removeClass('col-xs-8');
        $('#block__news_a_2').addClass('col-xs-12').removeClass('col-xs-4');
        $('.block__list_news_sport').addClass('col-xs-12').removeClass('col-xs-4');
        $('.block_image_one_slaider').addClass('col-xs-12').removeClass('col-xs-6');
        $('.item_block').addClass('col-xs-12').removeClass('col-xs-4');
    } else {
        $('.header__mobile').removeAttr('style');
        $('.btn_header_mobile').addClass('col-xs-2').addClass('text-center').removeClass('col-xs-4').removeClass('text-right');
        $('.logo_header_mobile').addClass('col-xs-2').removeClass('col-xs-4');
        $('.header__search_lang_mob').removeClass('text-center').addClass('text-right');
        $('.block_sport_mobile').addClass('col-xs-7').removeClass('col-xs-11');
        $('.block_list_medal').addClass('col-xs-3').removeClass('col-xs-12');
        $('#block__news_a_1').addClass('col-xs-8').removeClass('col-xs-12');
        $('#block__news_a_2').addClass('col-xs-4').removeClass('col-xs-12');
        $('.block__list_news_sport').addClass('col-xs-4').removeClass('col-xs-12');
        $('.block_image_one_slaider').addClass('col-xs-6').removeClass('col-xs-12');
        $('.item_block').addClass('col-xs-4').removeClass('col-xs-12');
    }
    if (matchMedia(' only screen and (max-width: 734px)').matches)
    {
        $('.block__shop_one').addClass('col-xs-6').removeClass('col-xs-3');
    } else {
        $('.block__shop_one').addClass('col-xs-6').removeClass('col-xs-3');
    }
    if (matchMedia(' only screen and (max-width: 424px)').matches)
    {
        $('.block__partner').addClass('col-xs-12').removeClass('col-xs-6');
    } else {
        $('.block__partner').addClass('col-xs-6').removeClass('col-xs-12');

    }

    if (matchMedia(' only screen and (max-width: 362px)').matches)
    {
        $('.btn_header_mobile').addClass('col-xs-5').removeClass('col-xs-4');
        $('.header__search_lang_mob').addClass('text-right').removeClass('text-center').addClass('col-xs-3').removeClass('col-xs-4');
    } else {
        $('.btn_header_mobile').addClass('col-xs-4').removeClass('col-xs-5');
        $('.header__search_lang_mob').removeClass('text-right').addClass('text-center').addClass('col-xs-4').removeClass('col-xs-3');
    }
};
$(window).resize(ravenous);
ravenous();  
});
