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

getData('kladr.json', renderResults);
function renderResults(data) {
    var html = '';
    for ( var i = 0; i < data[""].length; i++){
        var id = data[""].Id,
            city = data[""].City;
        html += '<div>' + id + '</div>';
        html += '<div>' + city + '</div>';

    }
     document.getElementById("user").innerHTML = html;
}