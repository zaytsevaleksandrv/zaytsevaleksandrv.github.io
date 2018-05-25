var tab = document.querySelectorAll('.faq__tab');
var tab_body = document.querySelectorAll('.faq__tab-body');
var tab_body_collapse_header = document.querySelectorAll('.faq__collapse-header');

for (var i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', function(){

        for (var i = 0; i < tab.length; i++){
            tab[i].classList.remove('faq__tab_active');
        }

        this.classList.add('faq__tab_active');

        for (var i = 0; i < tab_body.length; i++){
            tab_body[i].classList.remove('faq__tab-body_active');
        }

        switch (this.innerText) {
            case 'Доставка и оплата':
                tab_body[1].classList.add('faq__tab-body_active');
                break;
            case 'Таможня и гарантии':
                tab_body[2].classList.add('faq__tab-body_active');
                break;
            case 'Прочие':
                tab_body[3].classList.add('faq__tab-body_active');
                break;
            default:
                tab_body[0].classList.add('faq__tab-body_active');
                break;
        }
    });
}

for (var i = 0; i < tab_body_collapse_header.length; i++) {

    tab_body_collapse_header[i].addEventListener('click', function() {

        this.classList.toggle('faq__collapse-header_active');
        var faq_collapse_body = this.nextElementSibling;
        faq_collapse_body.classList.toggle('faq__collapse-body_active');
    })
}