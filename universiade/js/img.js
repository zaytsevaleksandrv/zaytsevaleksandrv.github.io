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

function myModal(index) {

    var data = results[index];
    document.getElementById("Modal").style.display = "block";
    var modal = '',
        name = data.name.title + ' ' + data.name.first + ' ' + data.name.last,
        img = data.picture.large,
        street = data.location.street,
        state = data.location.state,
        email = data.email,
        phone = data.phone;

    modal += '<div > ';
    modal += '<img class="img__radius" src="' + img + '" title="' + name + '"/>';
    modal += '<p class="block__user_on-capitalize block__user_on_bold">' + name + '</p>';
    modal += '<p class="block__user_on-capitalize"><i class="fa fa-street-view" aria-hidden="true"></i> ' + street + '</p>';
    modal += '<p class="block__user_on-capitalize"><i class="fa fa-home" aria-hidden="true"></i> ' + state + '</p>';
    modal += '<p class="block__user_modal_email"><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:' + email + '"> ' + email + ' </a></p>';
    modal += '<p class="block__user_on-capitalize"><i class="fa fa-phone" aria-hidden="true"></i> <a href="tel:' + phone + '">' + phone + '</a></p>';
    modal += '</div>';

    document.getElementById("userModal").innerHTML = modal;

}

function closeModal() {
    document.getElementById("Modal").style.display = "none";
}