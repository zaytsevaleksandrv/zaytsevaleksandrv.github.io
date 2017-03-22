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
        var img = data["img"][i]["picture"]["large"];
        img += '<div class="col-md-2 block__user_on" onclick="myModal(this.id)" id="' + [i] + '"> ';
        img += '<img class="large" src="' + img + '" />';
        img += '</div>';
    }
    document.getElementById("user").innerHTML = img;
    results = data["img"];

}

getData('https://zaytsevaleksandrv.github.io/universiade/js/img.json', renderResults);

