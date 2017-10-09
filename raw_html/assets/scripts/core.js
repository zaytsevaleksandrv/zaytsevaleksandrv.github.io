$(document).ready(function() {
    //datepicker
    $('.datepicker').datepicker({
        language: 'ru',
        format: 'dd.mm.yyyy'
    }).on('changeDate', function(e) {
        var $this = $(this);
        if (this.value.length > 0) {
            $this.closest('.news-datepicker').addClass('active');
            $('news-datepicker__migrate').show('slow');
        } else {
            $this.closest('.news-datepicker').removeClass('active');
            $('news-datepicker__migrate').hide('slow');
        }
        $this.data().datepicker.hide();
    });
    $("#resetDateFrom").click(function() {
        $('#dateFrom').data().datepicker.clearDates();
    })
    $("#resetDateTo").click(function() {
        $('#dateTo').data().datepicker.clearDates();
    })

    //datepicker end

    //news-portal page
    //select
    $('.selectpicker').selectpicker({
        size: 11,
        dropupAuto: false
    });
    $('[data-id=newsCategorySelect]').trigger('click');
    $(".dropdown-menu.inner").niceScroll({
        background: '#c9e6fa',
        cursorborder: '0',
        cursorwidth: '4px',
        cursorborderradius: '0px',
        autohidemode: false,
        zindex: 3,
        cursorcolor: '#cf0072'
    }); //
    $("div.pagination__holder").jPages({
        containerID: "newsContainer",
        perPage: 8 //items per page
    });
    //news-portal page end


    //photo page
    $("div.pagination__holder").jPages({
        containerID: "itemContainer",
        perPage: 3 // items per page
    });
    //photo page end


    //photo-volunteer page

    $("div.pagination__holder").jPages({
        containerID: "photosContainer",
        perPage: 3 // items per page
    });
    //photo-volunteer page end

    //video page

    $("div.pagination__holder").jPages({
        containerID: "videoContainer",
        perPage: 3 // items per page
    });
    //video page end
});