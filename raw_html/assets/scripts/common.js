function changeCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideEl, $allSlideEl) {
    var slidesToShow = slick.options.slidesToShow,
        all = Math.ceil(slick.slideCount / slidesToShow),
        current = Math.ceil((currentSlide + 1) / slidesToShow);
    $currentSlideEl.text(current);
    $allSlideEl.text(all);
}

function initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideEl, $allSlideEl) {
    var slidesToShow = slick.options.slidesToShow,
        all = Math.ceil(slick.slideCount / slidesToShow),
        current = Math.ceil((currentSlide + 1) / slidesToShow);
    if (all < 2) {
        $currentSlideEl.parent().hide()
    } else {
        $currentSlideEl.text(current);
        $allSlideEl.text(all);
    }
}
$(document).ready(function() {
    /*  $('video').on('play', function(e) {
          $('#buttonPlay').hide();
      });
      $('#buttonPlay').on('click', function(e) {
          $('video').attr('controls', 'controls');
          $('video').get(0).play();
          $('#buttonPlay').hide();
      });
      $('video').on('click', function(e) {
          $('video').attr('controls', 'controls');
          $('video').get(0).play();
          $('#buttonPlay').hide();
      });
      $('video').on('ended', function() {
          $('#buttonPlay').show();
      });*/
    //play-button
    $('.button-play').click(function() {
        $(this).prev().get(0).play();
    })
    $('video').click(function() {
        $(this).get(0).pause();
        $(this).removeAttr('controls', 'controls');

    })
    $('video').on('play', function(e) {
        $(this.nextElementSibling).hide();
        $(this).attr('controls', 'controls');

    });
    $('video').on('ended', function() {
        $(this.nextElementSibling).show();

    });
    $('video').on('pause', function(e) {
        $(this.nextElementSibling).show();
        $(this).removeAttr('controls', 'controls');
    });
    //end play button
});

//TODO
// var originalPlugin = $.fn.slick;
// $.fn.slick = function(option) {
//     // Execute the original plugin
//     originalPlugin.call(this, option);
//
//     function initCurrentSlideOfAllCounts(slick, currentSlide, $currentSlideEl, $allSlideEl) {
//         debugger;
//         var slidesToShow = slick.options.slidesToShow;
//         var all = Math.ceil(slick.slideCount/slidesToShow);
//         var current = Math.ceil((currentSlide+1)/slidesToShow);
//         $currentSlideEl.text(current);
//         $allSlideEl.text(all);
//     }
//
//     this.on('afterChange', function (event, slick, currentSlide, nextSlide) {
//         initCurrentSlideOfAllCounts(slick, currentSlide, option.s1, option.s2);
//     });
// }