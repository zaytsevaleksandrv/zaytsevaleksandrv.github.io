  jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});



  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 999,
      values: [ 100, 780 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "min $" + ui.values[ 0 ] + " - max $ " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "min $" + $( "#slider-range" ).slider( "values", 0 ) +
      " - max $ " + $( "#slider-range" ).slider( "values", 1 ) );
  } );

    // handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});


$('#video').on('click', function() {
    $(this).html('<iframe src="https://www.youtube.com/embed/tk7PMSzY00U?rel=0&autoplay=1" width="620" height="320" frameborder="0" allowfullscreen="true">').css('background', 'none');
});
