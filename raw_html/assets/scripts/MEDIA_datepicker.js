$(document).ready(function() {
  //datepicker
  $('.datepicker').datepicker({
    language: 'ru',
    format: 'dd.mm.yyyy',
    orientation: "bottom auto",
    todayHighlight: true,
    autoclose: true
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
});
