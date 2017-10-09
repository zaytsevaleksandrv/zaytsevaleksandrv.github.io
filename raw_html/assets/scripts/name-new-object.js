$(document).ready(function() {
    $('.name-new-object__slaider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 10000,
  });


  //append input
var addBtn = $('.name-new-object__add-input');

    addBtn.click(function addItem (){
      var addBtn = $('.name-new-object__add-input'),
          ol = $('.name-new-object__form-list'),
          maxLi = 5,
          countLi = $(".name-new-object__form-list li").length;

          if (maxLi != 0 && countLi >= maxLi) {
          } else {
              ol.append('<li><input type="text" name="name" required value=""><a href="javascript:\/\/" class ="name-new-object__remove-input" onclick="$(this).parent().remove()" title="Удалить поле"></a</li>');
          }
    });

    // //mask phone
    // $("#phone").mask("+7 (999) 999-9999");

    //read more expert
    var showChar = 160,
        ellipsestext = "...",
        moretext = "Подбробнее",
        lesstext = "Скрыть подробнее",
        textB = $('.name-new-object__expert-group .customization-typography__p1 p');


    textB.each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span><div class="morelink dashed">' + moretext + '</div></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
