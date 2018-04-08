function getData(callback) {
    let r = new XMLHttpRequest(),
        url = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture',
        method = 'GET';

    r.open(method, url, true);

    r.onreadystatechange = function() {
        try {
            var data = JSON.parse(r.responseText);
        } catch (err) {
            console.log(err.message + " in " + r.responseText);
            return;
        }
        callback(data);
    };

    r.send(null);
}

getData(getUsers);

var results = [];

function getUsers(data) {
    let root = document.getElementById('root'),
        render_card = '';

    data.results.map((it, id) => {
        render_card += `
            <div 
                class="card__user" 
                id='${id}' 
                title="${it.name.title}. ${it.name.first} ${it.name.last}"
                onclick="Modal(this.id)"
            >
                <div 
                    class="card__user-logo" 
                    style="background: url('${it.picture.medium}') center center / contain no-repeat"
                ></div>
                <p class="card__user-name">
                    ${it.name.title}. ${it.name.first} ${it.name.last}
                </p>
            </div>
        `
    });
    root.innerHTML = render_card;
    return results = data.results;
}

function Modal(index) {
    let it = results[index],
        render_modal = '',
        modal = document.getElementById('modal'),
        card_id = document.getElementById(index);

    modal.classList.add("modal_active");
    card_id.classList.add("card__user_active");

    render_modal += `
        <div class="modal" id="modal_inner">
            <button class="modal__btn-close" id="btn_close"></button>
            <div 
                class="modal__user-logo" 
                style="background: url('${it.picture.large}') center center / contain no-repeat"
                title="${it.name.title}. ${it.name.first} ${it.name.last}"
            ></div>
            <address class="modal__address">
                <ul class="modal__address-list">
                    <li class="modal__address-list-item" title="Location">
                        <div class="modal__address_icon-wrapper">
                            <i class="fa fa-street-view" aria-hidden="true"></i>
                        </div>
                        <p class="modal__address-text">
                            ${it.location.street}
                        </p>
                    </li>
                    <li class="modal__address-list-item" title="City">
                        <div class="modal__address_icon-wrapper">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </div>
                        <p class="modal__address-text">
                            ${it.location.city}
                        </p>
                    </li>
                    <li class="modal__address-list-item" title="State">
                        <div class="modal__address_icon-wrapper">
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <p class="modal__address-text">
                            ${it.location.state}
                        </p>
                    </li>
                    <li class="modal__address-list-item">
                        <div class="modal__address_icon-wrapper">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <a 
                            class="modal__address-link" 
                            title="Write a letter on ${it.email}" 
                            href="mailto:${it.email}"
                        >
                            ${it.email}
                        </a>
                     </li>
                     <li class="modal__address-list-item">
                        <div class="modal__address_icon-wrapper">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <a 
                            class="modal__address-link" 
                            title="Сall the number ${it.phone}" 
                            href="tel:${it.phone}"
                        >
                            ${it.phone}
                        </a>
                     </li>
                </ul>
            </address>
        </div>
    `;

    modal.innerHTML = render_modal;

    this.closeModal = function() {
        let modal = document.getElementById("modal");
        modal.classList.remove('modal_active');
        card_id.classList.remove("card__user_active");
    };


    let btn_close = document.getElementById("btn_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

function sortUsers() {
    let order = document.getElementById('order'),
        reverse = order.selectedIndex == 2;

    results.sort(function (obj1, obj2) {
        let ret = 0;
        if (obj1.name.first < obj2.name.first)
            ret = -1;
        if (obj1.name.first > obj2.name.first)
            ret = 1;
        return ret * (reverse ?  -1 : 1);
    });

    getUsers({results: results});
}

function getUserFilter(data) {
    let root = document.getElementById('root'),
        render_card = '';

    data.map((it, id) => {
        render_card += `
            <div 
                class="card__user" 
                id='${id}' 
                title="${it.name.title}"
                onclick="Modal(this.id)"
            >
                <div 
                    class="card__user-logo" 
                    style="background: url('${it.picture.medium}') center center / contain no-repeat"
                ></div>
                <p class="card__user-name">
                    ${it.name.title}. ${it.name.first} ${it.name.last}
                </p>
            </div>
        `
    });
    root.innerHTML = render_card;
}

let input = document.getElementById('filter_users');
input.addEventListener('keyup', filterUsers);

function filterUsers() {
    let keyword = input.value.toLowerCase(),
        root = document.getElementById('root'),
        render_msg = 'No data available...';

    if (keyword.length > 0) {
        results = results.filter( data => {
            data = data.name.first.toLowerCase();
            return data.indexOf(keyword) == 0;
        });

        (results.length > 0) ? getUserFilter(results) : root.innerText = render_msg;
    } else {
        getData(getUsers);
    }
}