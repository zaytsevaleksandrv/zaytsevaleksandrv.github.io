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

    var html = '';
    for (var i = 0; i < data["results"].length; i++) {
        var fullName = data["results"][i]["name"]["title"] + ' ' + data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"],
            name = data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"];
            img = data["results"][i]["picture"]["large"],
            imgM = data["results"][i]["picture"]["medium"];
        html += '<div class="col-md-2 block__user_on" onclick="myModal(this.id)" id="' + [i] + '"> ';
        html += '<img class="large" src="' + img + '" title="' + name + '"/>';
        html += '<img class="medium" id="medium" src="' + imgM + '" title="' + name + '"/>';
        html += '<p class="block__user_on-capitalize name block__user_on_pdtop">' + name + '</p>';
        html += '<p class="block__user_on-capitalize fullName block__user_on_pdtop">' + fullName + '</p>';
        html += '</div>';
    }
    document.getElementById("user").innerHTML = html;
    results = data["results"];

}

getData('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', renderResults);

function sort() {
    var reverse = document.getElementById('order').selectedIndex == 2;
    results.sort(function (obj1, obj2) {
        var ret = 0;
        if (obj1.name.first < obj2.name.first) 
            ret = -1;
        if (obj1.name.first > obj2.name.first) 
            ret = 1;
        return ret * (reverse ?  -1 : 1);
    });
    renderResults({results: results});
}

function imgMedium() {
    var large = document.getElementsByClassName("large");
    for (i = 0; i < large.length; i++) {
        large[i].style.display = 'none';
    }
    var medium = document.getElementsByClassName("medium");
    for (i = 0; i < medium.length; i++) {
        medium[i].style.display = 'block';
    }
}

function fullName() {
    var name = document.getElementsByClassName("name");
    for (i = 0; i < name.length; i++) {
        name[i].style.display = 'none';
    }
    var fullName = document.getElementsByClassName("fullName");
    for (i = 0; i < fullName.length; i++) {
        fullName[i].style.display = 'block';
    }
}

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