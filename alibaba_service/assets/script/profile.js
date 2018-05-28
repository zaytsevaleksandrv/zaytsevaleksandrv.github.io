let name = document.getElementById('name'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    address = document.getElementById('address'),
    old_pass = document.getElementById('old_pass'),
    new_pass = document.getElementById('new_pass'),
    repeat_new_pass = document.getElementById('repeat_new_pass'),
    save_data_profile = document.getElementById('save_data_profile'),
    save_pass_profile = document.getElementById('save_pass_profile'),
    error_msg = document.querySelector('.profile__error-msg'),
    add_btn = document.querySelector('.profile__link'),
    address_group = document.querySelector('.profile__address-group');

name.addEventListener('input', disabledBtnData);
phone.addEventListener('input', disabledBtnData);
email.addEventListener('input', disabledBtnData);
address.addEventListener('input', disabledBtnData);

function disabledBtnData() {
    if (name.value.length > 0 && phone.value.length > 0 && email.value.length > 0 && address.value.length > 0) {
        save_data_profile.removeAttribute('disabled');
    } else {
        save_data_profile.setAttribute('disabled', true);
    }
}

old_pass.addEventListener('input', disabledBtnPass);
new_pass.addEventListener('input', disabledBtnPass);
repeat_new_pass.addEventListener('input', disabledBtnPass);

function disabledBtnPass() {

    if (old_pass.value.length >= 3) {
        if (old_pass.value === new_pass.value) {
            old_pass.style.borderColor = '#e50202';
            new_pass.style.borderColor = '#e50202';
            error_msg.style.display = 'block';
            repeat_new_pass.style.pointerEvents = 'none';
            repeat_new_pass.style.backgroundColor = '#ebebeb';
            error_msg.innerHTML = 'Старый пароль совпадает с новым, исправьте, пожалуйста';
        } else {
            error_msg.style.display = 'none';
            old_pass.style.borderColor = '#ebebeb';
            new_pass.style.borderColor = '#ebebeb';
            repeat_new_pass.style.pointerEvents = 'all';
            repeat_new_pass.style.backgroundColor = '#fff';
        }
    }

    if (repeat_new_pass.value.length >= 3) {
        if (repeat_new_pass.value !== new_pass.value) {
            repeat_new_pass.style.borderColor = '#e50202';
            new_pass.style.borderColor = '#e50202';
            error_msg.style.display = 'block';
            error_msg.innerHTML = 'Пароли не совпадают';
            save_pass_profile.setAttribute('disabled', true);
        } else {
            error_msg.style.display = 'none';
            repeat_new_pass.style.borderColor = '#ebebeb';
            new_pass.style.borderColor = '#ebebeb';
            save_pass_profile.removeAttribute('disabled');
        }
    }
}

add_btn.addEventListener('click', addAddress)

function addAddress() {
    address_group.innerHTML += `<div class="profile__group"><input class="input input_border-grey" type="text" id="address" placeholder="Введите адрес" required="true"><span class="profile__btn-remove">Удалить поле</span></div>`;

    let remove = document.querySelectorAll('.profile__btn-remove');

    for (var i = 0; remove.length > 0; i++) {
        remove[i].addEventListener('click', function () {
            this.previousElementSibling.remove();
            this.remove()
        })
    }
}