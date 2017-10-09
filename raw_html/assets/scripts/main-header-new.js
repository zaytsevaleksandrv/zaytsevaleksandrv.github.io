/*
 * Created by D. Sazonov on 26.07.2017.
 */
$(document).ready(function() {


    //-----------------------language-switch------------------------
    var $langChange = $('.choose-language div')
    $langChange.click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
        }
    })

    //-----------------------stick-menu------------------------

    var $window = $(window);
    var $mainMenu = $('.main-menu');

    function checkWidth() {
        var $windowsize = $window.width();
        if ($windowsize <= 767) {
            $mainMenu.attr('data-offset-top', '500');
        }
        if ($windowsize >= 768 && $windowsize <= 1199) {
            $mainMenu.attr('data-offset-top', '362');
        }
        if ($windowsize >= 1200) {
            $mainMenu.attr('data-offset-top', '252');
        }
    }
    checkWidth();
    $window.resize(checkWidth);

    //-----------------------search on menu------------------------

    var $inputButton = $('.form-wrap button')
    var $input = $('.form-wrap input')
    $inputButton.click(function() {
        if ($mainMenu.hasClass('active')) {
            $mainMenu.removeClass('search-active');
        } else {
            $mainMenu.addClass('search-active');
            $input.show('slow').focus();
        }
    })
    $input.focusout(function(event) {
        $mainMenu.removeClass('search-active');
        $input.hide('slow');
    });
    //-----------------------mobile menu------------------------
    var $mobileButton = $('.mobile-button')
    var $mobileContainer = $('.mobile-container')
    var $mobileMenu = $('.mobile-menu')
    var $mobile = $('.mobile')
    var $formWrap = $('.form-wrap')
    var $submenuFirstHeading = $('.submenu-first-heading')
    var $submenuSecondHeading = $('.submenu-second-heading')
    var $mobileBg = $('.mobile-bg')
    var $bodyScroll = $('.main')

    $mobileButton.click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $mobileContainer.slideDown();
            $formWrap.hide();
            $mobileBg.show();
            $("html body").animate({ scrollTop: $mobileButton.offset().top }, 1000);
            $bodyScroll.css('overflow', 'hidden');
        } else {
            $(this).removeClass('active');
            $mobileContainer.slideUp();
            $formWrap.show('1000');
            $mobileBg.hide();
            $bodyScroll.css('overflow', 'visible');
        }
    })
    $mobileBg.click(function() {
        $mobileButton.removeClass('active')
        $mobileContainer.slideUp();
        $formWrap.show('1000');
        $mobileBg.hide();
        $bodyScroll.css('overflow', 'visible');
    })
    $submenuFirstHeading.click(function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');
    });
    $submenuSecondHeading.click(function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');
    });
});