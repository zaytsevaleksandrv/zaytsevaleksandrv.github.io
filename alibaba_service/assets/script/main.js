//при скролле вызываем sticky
window.onscroll = function() {
    let header = document.getElementById("myHeader"),
        header_mobile = document.getElementById("myHeaderMobile");
    header && (header ? Sticky() : '');
    header_mobile && (header_mobile ? Sticky() : '');

    let sidebar = document.getElementById("sidebar");
    sidebar ? StickySidebar() : '';
};

//modalka
function Modal() {
    let modal = document.getElementById('modal');
    modal.classList.add("business-strategy__modal_active");

    this.closeModal = function() {
        modal.classList.remove('business-strategy__modal_active');
    };

    let btn_close = document.getElementById("btn_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

//modal inner

function ModalInner() {
    let modal = document.getElementById('modal');
    modal.classList.add("modal_active");
    document.querySelector("body").style.overflowX = 'hidden';
    document.querySelector("html").style.overflowX = 'hidden';
    document.querySelector("body").style.position = 'relative';

    this.closeModal = function() {
        modal.classList.remove('modal_active');
        document.querySelector("body").removeAttribute("style");
        document.querySelector("html").removeAttribute("style");
    };

    let btn_close = document.getElementById("btn_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

//плавающий header
function Sticky() {
    var header = document.getElementById("myHeader"),
        header_mobile = document.getElementById("myHeaderMobile"),
        sticky = header ? header.offsetTop : '',
        sticky_mobile = header_mobile ? header_mobile.offsetTop : '';

    if (header) {
        if (window.pageYOffset > sticky) {
            header.classList.add("expert__top-sticky");
            header_mobile.classList.add("mobile__menu-sticky");
        } else {
            header.classList.remove("expert__top-sticky");
            header_mobile.classList.remove("mobile__menu-sticky");
        }
    } else {
        if (window.pageYOffset > sticky_mobile) {
            header_mobile.classList.add("mobile__menu-sticky");
        } else {
            header_mobile.classList.remove("mobile__menu-sticky");
        }
    }
}

//menu mobile
function menuMobile() {
    let burger = document.getElementById('menuMobile'),
        nav = document.getElementById('navigation'),
        header = document.getElementById('myHeaderMobile');
    burger.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav-toggle_open');
    header.classList.toggle('header_open');
}

//menu menuSidebar
let acc_sidebar = document.getElementsByClassName("nav-sidebar__btn");

for (i = 0; i < acc_sidebar.length; i++) {
    acc_sidebar[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//плавающий sidebar
function StickySidebar() {
    var sidebar = document.getElementById("sidebar"),
        sticky = sidebar.offsetTop;

    if (window.pageYOffset > sticky) {
        sidebar.classList.add("sidebar__sticky");
    } else {
        sidebar.classList.remove("sidebar__sticky");
    }
}

//accordion mobile
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//input file

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");

button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
});
fileInput.addEventListener( "change", function( event ) {
    the_return.innerHTML = this.value;
});

// add to product
var addBtn = $('.modal__add-to-product');

addBtn.click(function addItem (){
    var div = $('.modal__add-to-product-block'),
        maxLi = 5,
        countLi = $(".modal__add-to-product-block input").length;

    if (maxLi != 0 && countLi >= maxLi) {
    } else {
        div.append('<div><input class="input input_border-grey" type="text" placeholder="Ссылка на страницу с вашим товаром" autofocus required>\n' +
            '<input class="input input_border-grey" type="text" placeholder="Количество товара" required>' +
            '<a href="javascript://" class ="modal__remove-input" onclick="$(this).parent().remove(); removeItem()" title="Удалить поле">Удалить товар</a></div>');
    }

    let modal_inner = document.getElementById("modal_inner");
    let modal = document.getElementById("modal");
    if (modal_inner.offsetHeight > 920) {
        modal.style.overflowY = "scroll";
        modal.style.alignItems = "flex-start";
    } else {
        modal.removeAttribute("style");
    }
});

function removeItem() {
    let modal_inner = document.getElementById("modal_inner");
    let modal = document.getElementById("modal");
    if (modal_inner.offsetHeight > 920) {
        modal.style.overflowY = "scroll";
        modal.style.alignItems = "flex-start";
    } else {
        modal.removeAttribute("style");
    }
};
