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

        img += '<div class=" full_width block_video_one_mobile col-lg-4 col-md-4 col-sm-4 col-xs-4">'
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
