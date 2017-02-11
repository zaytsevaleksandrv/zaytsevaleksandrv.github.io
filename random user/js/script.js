function getData(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
getData('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', function(data) {
   
    var html;
        for (var i=0; i < data["results"].length; i++){
            html += '<div class="col-md-2 container__block_user_on">';
            html += '<img src="' + data["results"][i]["picture"]["large"] + '"/>';
            html += '<p>' + data["results"][i]["name"]["title"] + ' ' + data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"] + '</p>';
            html += '<p><a href="#">Подробнее...</a></p>'
            html += '</div>';
        } 
     document.getElementById("user").innerHTML = html;
});