$(document).ready(function() {
    // Группы объектов

    // Группы объектов
    var groups = [{"id":1,"name":"Спорт","items":[{"name":"Крытый каток «Первомайский»","center":[56.020549,92.977071],"address":"Красноярск, Ленинский район, ул. Парковая, 19.","phone":"+7(391)264-03-66","link":"http://www.hc-enisey.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/p/7087/albums_show_Крытый_каток_Первомайский.jpg?timestamp=1507249438"},{"name":"Центральный стадион им. Ленинского комсомола","center":[55.998257,92.884773],"address":"Красноярск, Остров Отдыха, 15, А","phone":"+7(391)266-85-41","link":"http://naov.ru/objects/stadion-imeni-leninskogo-komsomola-centralniyi-stadion-v-krasnoyarske.html","image":"http://portal-dev.uni2019.fil-it.ru/photo/p/8101/albums_show_imgonline-com-ua-Resize-i8osZHt5g9vC.jpg?timestamp=1507249438"},{"name":"Спортивно-зрелищный комплекс «Платинум Арена Красноярск»","center":[55.979925,92.921422],"address":"Красноярск, Мусоргского, нет","phone":"+7(4212) 31-41-67","link":"http://platinumarena.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/c/7724/albums_show_Pt_Arena_razvorot_A3_OUT_-01.jpg?timestamp=1507249438"},{"name":"Многофункциональный комплекс «Арена. Север»","center":[56.050524,92.894597],"address":"Красноярск, 9 Мая, 74","phone":"+7(391)223-34-41","link":"http://arenasever-krsk.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/h/7729/albums_show_АС.jpg?timestamp=1507249438"},{"name":"Всесезонный парк спорта и отдыха Фанпарк «Бобровый лог»","center":[55.961308,92.795361],"address":"Красноярск, Свердловский район, ул. Сибирская, 96.","phone":"+7(391)256-86-86","link":"http://www.bobrovylog.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/b/7073/albums_show_Бобровый_Лог.jpg?timestamp=1507249438"},{"name":"Региональный спортивно-тренировочный комплекс «Академия зимних видов спорта»","center":[56.002339,92.749903],"address":"Красноярск, Октябрьский район, Николаевская сопка, Биатлонная, 25, Г","phone":"+7(391)249-09-55","link":"http://www.azvs-krsk.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/b/7723/albums_show_IMG_6536.png?timestamp=1507249438"},{"name":"Ледовый дворец «Рассвет»","center":[56.02266,92.78865],"address":"Красноярск, Высотная, 2, А","phone":"+7(391)202-21-20","link":"http://rassvet-sportshkola.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/e/7076/albums_show_рассвет.JPG?timestamp=1507249438"},{"name":"Многофункциональный комплекс «Академия биатлона» со спортивными сооружениями","center":[55.994586,92.732073],"address":"Красноярск, Октябрьский район, ул. Биатлонная, 37.","phone":"+7(391)263-88-10","link":"http://akademiabiatlona-krsk.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/e/7726/albums_show_АБ.jpg?timestamp=1507249438"},{"name":"Дворец спорта им. И. Ярыгина","center":[55.995457,92.874861],"address":"Красноярск, Остров Отдыха, 12.","phone":"+7(391)236-13-49; +7(391)266-86-42","link":"krasbilet.ru","image":"http://portal-dev.uni2019.fil-it.ru/photo/f/7727/albums_show_ИЯ.jpg?timestamp=1507249438"},{"name":"Многофункциональный комплекс «Академия биатлона»","center":[55.994466,92.731923],"address":"Красноярск, Биатлонная, 37","phone":"+7(391)263-88-10","link":"http://akademiabiatlona-krsk.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/p/6541/albums_show_akad_biahtlon.JPG?timestamp=1507249438"},{"name":"Стадион «Енисей»","center":[56.017809,92.979599],"address":"Красноярск, Ленинский район, ул. Юности, 18.","phone":"+7(391)264-34-26","link":"http://www.hc-enisey.ru/","image":"http://portal-dev.uni2019.fil-it.ru/photo/o/8100/albums_show_ВИД-0-1_лист.jpg?timestamp=1507249438"},{"name":"Ледовая арена на ул. Партизана Железняка","center":[56.036856,92.925692],"address":"Красноярск, Советский район, ул. Партизана Железняка, 42.","phone":"8 (391) 291-80-80","link":"http://www.krsk2019.com/","image":"http://portal-dev.uni2019.fil-it.ru/photo/d/7725/albums_show_6.jpg?timestamp=1507249438"}]},{"id":3,"name":"csaca","items":[{"name":"asfasfafas","center":[56.136856,92.125692],"address":"afs","phone":"fasf","link":"","image":"http://portal-dev.uni2019.fil-it.ru/photo/s/56022/albums_show_shema.png?timestamp=1507249439"}]},{"id":2,"name":"vx xfvsdv","items":[{"name":"dsgdsds","center":[56.236856,92.225692],"address":"Lidia Rabcevoi 47/1 32","phone":"gsdgsdddd","link":"","image":"http://portal-dev.uni2019.fil-it.ru/photo/r/56021/albums_show_Screenshot_2017-07-27_16-29-37.png?timestamp=1507249439"}]}];


    var map;
    DG.then(function() {
        map = DG.map('map', {
            center: groups[0].items[0].center,
            zoom: 10
        });
        initMapGroups(groups, map);
    });
})
function initMapGroups(groups, map) {
    var itemNumber = 0;
    $.each(groups, function(i, group) {
        $('.tab-content').append('<div id="mapObjectCategory'+group.id+'" class="tab-pane fade"><div class="с-citymap__list"><div class="row"><ol></ol></div></div></div>')
        $('.с-citymap__tabs').append('<li><a data-toggle="tab" data-array-iteration="'+i+'" href="#mapObjectCategory'+group.id+'">'+group.name+'</a></li>')
        $('.с-citymap__tabs li a[data-array-iteration='+i+']').click(function () { map.setView(group.items[0].center, 10) })
    })
    $('.с-citymap__tabs li a[href="#all"]').click(function () { map.setView(groups[0].items[0].center, 10) })
    $.each(groups, function(i, group) {
        itemNumber = initMapGroup(group, map, itemNumber)
    })
}
function initMapGroup(group, map, itemNumber) {
    $.each(group.items, function(j, item) {
        itemNumber = itemNumber + 1;
        var myIcon = DG.divIcon({ html: '<div class="placemark_layout_container"><div class="circle_layout">' + itemNumber + '</div></div>' });
        var popup = DG.popup().setLatLng(item.center).setContent('<div class="c-citymap__balloon"><div class="popover-title"><img src="' + item.image + '"/></div><address class="popover-content"><p class="popover-content__heading">' + '<a href="' + item.card + '" style="color:#e5007c">' + item.name + '</a></p><ul><li>' + item.address + '</li><li><a href="tel:' + item.phone + '">' + item.phone + '</a></li><li><a href="' + item.link + '">' + item.link + '</a></li></ul></address> <div class="placemark_layout_ballon"><div class="circle_layout--hover">' + itemNumber + '</div></div></div>');
        var marker = DG.marker(item.center, { icon: myIcon }).addTo(map).bindPopup(popup);

        $("#all .с-citymap__list ol").append('<li class="с-citymap__link pop' + itemNumber + '" data-center="'+item.center+'"><div>'+itemNumber+'</div></div><a href="javascript://">' + item.name + '</a></li>')
        $("#mapObjectCategory"+group.id+" .с-citymap__list ol").append('<li class="с-citymap__link pop' + itemNumber + '" data-center="'+item.center+'"><div>'+itemNumber+'</div><a href="javascript://">' + item.name + '</a></li>')

        $(".pop" + itemNumber).click(function() { popup.openOn(map); map.setView([item.center[0]+0.1,item.center[1]], 10) })
        marker.on('popupopen', function () { map.setView([item.center[0]+0.1,item.center[1]], 10) })
        $('.с-citymap__tabs li a[href="#mapObjectCategory'+group.id+'"], .с-citymap__tabs li a[href="#all"]').click(function () { marker.addTo(map) })
        $('.с-citymap__tabs li a:not([href="#mapObjectCategory'+group.id+'"], [href="#all"])').click(function () { marker.remove() })
    })
    return itemNumber;
}
