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
    results = data["img"];
}

getData('https://zaytsevaleksandrv.github.io/universiade/js/img_object.json', renderResults);


function myModal(index) {

    var data = results[index];
    document.getElementById("Modal").style.display = "block";
    document.getElementById("Modal_sublist").style.display = "block";
    var modal = '',
        image = data.picture.large;

    modal += '<div> ';
    modal += '<img class="windows_object" src="' + image +'" />';
    modal += '</div>';

    document.getElementById("userModal").innerHTML = modal;

}

function closeModal() {
    document.getElementById("Modal").style.display = "none";
    document.getElementById("Modal_sublist").style.display = "none";
}
$(document).on('keyup',function(e) {
    if (e.keyCode == 27) {
        document.getElementById("Modal").style.display = "none";
        document.getElementById("Modal_sublist").style.display = "none";
    }
});
