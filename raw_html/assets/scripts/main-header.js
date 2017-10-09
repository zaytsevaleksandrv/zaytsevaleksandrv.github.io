/**
 * Created by AMisnik on 28.10.2016.
 */
$(document).ready(function() {

    /* $(".menu-mini__box").niceScroll({
         background: 'transparent',
         cursorborder: '0',
         cursorwidth: '0px',
         cursorborderradius: '0px',
         autohidemode: false,
         zindex: 1,
         cursorcolor: 'transparent',
         horizrailenabled: false,
         railalign: 'left'
     });*/
    //-----------------------ТАЙМЕР------------------------
    // $('#timer').flipcountdown({
    // size: 'sm',
    //beforeDateTime: '03/02/2019 13:00:00 UTC'
    //beforeDateTime: '03/02/2019 13:00:00 UTC'
    //});
    //-----------------------ВЫБОР_ЯЗЫКОВ------------------------
    $('.language div').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
        }
    })
    $('.header-box__language-box').click(function() {
        flag = $(this).closest('.header-box__language-box ').find('.language-box__flag-box');
        if (!flag.is(':visible')) {
            flag.slideDown()
        } else {
            flag.slideUp()
        }
    });

    $('.language-flag').click(function() {
        $('#currentFlagId').attr('src', this.src);
    })

    //----------------MAIN_MENU---------------------------------
    $('.header-box__language-box-mini').click(function() {
        flag = $(this).closest('.header-box__language-box-mini').find('.language-box-mini__flag-box');
        if (!flag.is(':visible')) {
            flag.slideDown()
        } else {
            flag.slideUp()
        }
    });

    $('.language-flag-mini').click(function() {
        $('#currentFlagIdMini').attr('src', this.src);
    })

    $('.main-menu__item-body').click(function() {
        flag = $(this).closest('.main-menu__items-menu-mini').find('.main-menu__item-submenu-mini');
        if (!flag.is(':visible')) {
            flag.slideDown()
        } else {
            flag.slideUp()
        }
    });


    $('.item-submenu-mini__item').click(function() {
        flag = $(this).closest('.item-submenu-mini__item').find('.item-submenu-mini__item-submenu');
        if (!flag.is(':visible')) {
            flag.slideDown()
        } else {
            flag.slideUp()
        }
    });


});
//скрипт главного меню
$(document).ready(function() {
    //скрипт для прилипания меню на разных разрешениях
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 992) {
            $('#nav').attr('data-offset-top', '100');
        }
        if (windowsize < 1199) {
            $('#nav').attr('data-offset-top', '410');
        }
        if (windowsize > 1200) {
            $('#nav').attr('data-offset-top', '270');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    //скрипт для прилипания меню на разных разрешениях конец
    //скрипт для языков
    $('.search-input__field-border__main').hide('fast');
    $('.menu-mini__box__language__flag').click(function() {
        $('.menu-mini__box__language__flag').toggleClass('current-language');
    });
    //скрипт для  поиска в меню
    var $searchInput = $('#searchInput'),
        $headerBox = $('#headerBox'),
        $searchButton = $('#searchButton');
    var search = {
        init: function() {
            $searchInput.val('');
            $searchButton.on('click', search._toggleClass);
            $searchInput.focusout(function(event) {
                $headerBox.toggleClass('searching-active');
                $('.search-input__field-border__main').hide('fast');
                setTimeout(function() {
                    $searchButton.on('click', search._toggleClass)
                }, 500);
            })
        },
        _toggleClass: function() {
            $headerBox.toggleClass('searching-active');
            $searchInput.focus();
            $searchButton.off('click');
            $('.search-input__field-border__main').show('slow');
        }
    };
    search.init();
    //скрипт для  поиска в меню конец
    //скрипт для  мобильного меню
    var mobileMenu = {
        init: function() {

            $('#mobileMenuButton').click(function() {
                $('.menu-mini').stop(true, true).slideToggle(500);
                $('.header-menu-bg').toggleClass('header-menu-bg__opened');
                $('.affix-bg').toggleClass('affix-bg__opened');
                $('.mobile-button-menu').toggleClass('mobile-button-menu-opened');
                $('.header__menu__wrapper-search').toggleClass('hidden');
                if ($('#nav').hasClass('affix')) {
                    $('.main').toggleClass('fixed-content');
                } else {
                    $("html body").animate({ scrollTop: $('#mobileMenuButton').offset().top - 38 }, 1000);
                    $('.main').toggleClass('fixed-content');
                }

            })
            $('.affix-bg').click(function() {
                $('.menu-mini').stop(true, true).slideToggle(500);
                $('.header-menu-bg').toggleClass('header-menu-bg__opened');
                $(this).toggleClass('affix-bg__opened');
                $('.mobile-button-menu').toggleClass('mobile-button-menu-opened');
                $('.header__menu__wrapper-search').toggleClass('hidden');
                if ($('#nav').hasClass('affix')) {
                    $('.main').toggleClass('fixed-content');
                } else {
                    $('.main').toggleClass('fixed-content');
                }
            })

            var submenu = $('.menu-mini__box__item'),
                subsubmenu = $('.menu-mini__box__item__submenu__item');
            submenu.on('click', '.menu-mini__box__item__header', mobileMenu._dropDown);
            subsubmenu.on('click', '.menu-mini__box__item__submenu__item__header', mobileMenu._dropDown1);
        },
        _dropDown: function(e) {
            var $this = $(this),
                drop = $this.siblings('.menu-mini__box__item__submenu');
            drop.stop(true, true).slideToggle(500);
            $this.closest('.menu-mini__box__item').toggleClass('active');
        },
        _dropDown1: function(e) {
            var $this = $(this),
                drop = $this.siblings('.menu-mini__box__item__submenu__sub');
            drop.stop(true, true).slideToggle(500);
            $this.closest('.menu-mini__box__item__submenu__item').toggleClass('active');
        }
    };
    mobileMenu.init();
    //скрипт для  мобильного меню конец
    $(".menu-mini__box").niceScroll({
        background: '#007ac2',
        cursorborder: '0px',
        cursorwidth: '5px',
        mousescrollstep: '10',
        cursorborderradius: '0px',
        autohidemode: false,
        zindex: 1,
        cursorcolor: '#fff',
        cursoropacitymin: 0,
        cursoropacitymax: 0.05,
        horizrailenabled: false
    });
});