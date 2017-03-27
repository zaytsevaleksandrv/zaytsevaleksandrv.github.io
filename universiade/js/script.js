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

//swipe
    $(document).ready(function() {  

    //Enable swiping...
    $(".carousel-inner").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('prev'); 
        },
        swipeRight: function() {
            $(this).parent().carousel('next'); 
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });
});

//img.js
function getData(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var results = [];

function renderResults(data) {

     var img = '';
    for (var i = 0; i < data["img"].length; i++) {
        var image = data["img"][i]["picture"]["large"];

        img += '<div class="block_video_one_mobile col-lg-4 col-md-4 col-sm-4 col-xs-4">'
        img += '<div class="block_video_one" onclick="myModal(this.id)" id="' + [i] + '"> ';
        img += ' <img class="img_max_w img_play_bg" src="' + image + '" alt="Видео"/>';
        img += '</div>';
        img += '</div>';
    }
    document.getElementById("video__football").innerHTML = img;
    results = data["img"];

}

getData('https://zaytsevaleksandrv.github.io/universiade/js/img_video.json', renderResults);


function myModal(index) {

    var data = results[index];
    document.getElementById("Modal").style.display = "block";
    document.getElementById("Modal_sublist").style.display = "block";
    var modal = '',
        video = data.picture.video;

    modal += '<div > ';
    modal += '<iframe id="iframe_remove" src="' + video + '" frameborder="0" allowfullscreen></iframe>';
    modal += '</div>';

    document.getElementById("userModal").innerHTML = modal;

}

function closeModal() {
    document.getElementById("Modal").style.display = "none";
    document.getElementById("Modal_sublist").style.display = "none";
    document.getElementById("iframe_remove").remove();
}

$(document).ready(function(){
var ravenous = function() { 
    if (matchMedia(' only screen and (max-width: 749px)').matches)
    {
        $('.block_video_one_mobile').addClass('full_width');
    } else {
        $('.block_video_one_mobile').removeClass('full_width');
    }
};
$(window).resize(ravenous);
ravenous();  
});