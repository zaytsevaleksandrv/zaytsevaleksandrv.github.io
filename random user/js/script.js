function getData(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
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

getData('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture',
    function(data) {

        var html = '';
        for (var i=0; i < data["results"].length; i++){
            var name = data["results"][i]["name"]["title"] + ' ' + data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"];
            var img = data["results"][i]["picture"]["large"];
            html += '<div class="col-md-2 block__user_on" onclick="myModal(this)" id="' + [i] + '"> ';
            html += '<img src="' + img + '" title="'+ name +'"/>';
            html += '<p class="block__user_on-capitalize">' + name + '</p>';
            html += '</div>';
        } 
        document.getElementById("user").innerHTML = html;
    }  
);

function myModal() {
    document.getElementById("Modal").style.display = "block";
    document.getElementById("userModal").innerHTML = "????";
} 
function closeModal(){
    document.getElementById("Modal").style.display = "none";
}