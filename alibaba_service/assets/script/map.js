function initMap(lat, lng) {
    var lat = lat || 55.749116;
    var lng = lng || 37.539529;
    var coordinat = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.querySelector('.contacts__map'), {
        zoom: 17,
        center: coordinat
    });
    var marker = new google.maps.Marker({
        position: coordinat,
        map: map
    });

    this.btnCoordinate = (btn) => {
        btn = btn.target.innerHTML;
        console.log(btn)
    }

    var btn = document.querySelectorAll('.contacts__coordinate-btn');
    var address = document.querySelectorAll('.contacts__address-wrapper');


    for (var i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', function(){

            for (var i = 0; i < btn.length; i++){
                btn[i].classList.remove('contacts__coordinate-btn_active');
            }

            this.classList.add('contacts__coordinate-btn_active');

            for (var i = 0; i < address.length; i++){
                address[i].classList.remove('contacts__address-wrapper_active');
            }

            switch (this.innerText) {
                case 'Владивосток':
                    address[1].classList.add('contacts__address-wrapper_active');
                    break;
                case 'Пекин':
                    address[2].classList.add('contacts__address-wrapper_active');
                    break;
                case 'Шэнчьжень':
                    address[3].classList.add('contacts__address-wrapper_active');
                    break;
                default:
                    address[0].classList.add('contacts__address-wrapper_active');
                    break;
            }
        });
    }

}
