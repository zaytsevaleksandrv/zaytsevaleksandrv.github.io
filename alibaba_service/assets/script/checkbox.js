let main = document.querySelector('#table .table__th [type="checkbox"]'),
    all = document.querySelectorAll('#table .table__td [type="checkbox"]'),
    tr = document.querySelectorAll('.table__tr'),
    btn = document.querySelectorAll('.btn'),
    select = document.querySelectorAll('.select-styled')[3] || document.querySelectorAll('.select-styled')[2],
    footer = document.querySelector('.orders-clients__footer');

for (let i = 0; i < all.length; i++) {
    all[i].onclick = function () {
        let allChecked = document.querySelectorAll('#table .table__td [type="checkbox"]:checked').length;
        main.checked = allChecked === all.length;
        main.indeterminate = allChecked > 0 && allChecked < all.length;

        if (main.indeterminate === true) {
            this.parentElement.parentElement.classList.toggle('table__tr_active')
        }

        if (main.indeterminate === false && main.checked === true) {
            this.parentElement.parentElement.classList.toggle('table__tr_active')
        }

        if (main.indeterminate === false && main.checked === false) {
            this.parentElement.parentElement.classList.remove('table__tr_active')
        }

        if (allChecked > 0) {
            for (var i = 0; btn.length > i; i++) {
                btn[i].classList.remove('btn_disabled')
            }
            select.style.backgroundColor = "#cdaf3a";
            select.style.borderColor = "#cdaf3a";
            footer.classList.add('orders-clients__footer_active')
        } else {
            for (var i = 0; btn.length > i; i++) {
                btn[i].classList.add('btn_disabled')
            }
            select.removeAttribute('style');
            footer.classList.remove('orders-clients__footer_active')
        }
    }
}

main.onclick = function () {
    for (let i = 0; i < all.length; i++) {
        all[i].checked = this.checked;

        if (all[i].checked === true) {
            for (let j = 1; j < tr.length; j++) {
                tr[j].classList.add('table__tr_active')
            }
        } else {
            for (let j = 1; j < tr.length; j++) {
                tr[j].classList.remove('table__tr_active')
            }
        }

        if (all[i].checked === true) {
            for (var k = 0; btn.length > k; k++) {
                btn[k].classList.remove('btn_disabled')
            }
            select.style.backgroundColor = "#cdaf3a";
            select.style.borderColor = "#cdaf3a";
            footer.classList.add('orders-clients__footer_active')
        } else {
            for (var k = 0; btn.length > k; k++) {
                btn[k].classList.add('btn_disabled')
            }
            select.removeAttribute('style');
            footer.classList.remove('orders-clients__footer_active')
        }
    }
}
