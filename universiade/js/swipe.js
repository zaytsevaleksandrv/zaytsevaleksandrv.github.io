
//swipe
 $(".carousel").swipe({
 	tap:function(event, target) {
          $('.img_max_w').on('click', myModal);
        },
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});