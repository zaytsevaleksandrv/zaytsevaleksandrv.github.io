function ModalBalance() {
    let modal = document.querySelector('.top-up-balance');
    let modal_mobile = document.getElementById('modal_balance_mobile');
    let btn = document.querySelectorAll('.sidebar__balance-replenish');

    modal.classList.toggle("top-up-balance_active");
    modal_mobile.classList.toggle("top-up-balance_active");

    for (var i = 0; btn.length > i; i++) {
        if ( btn[i].textContent === 'Закрыть'){
            btn[i].textContent = 'Пополнить'
        } else {
            btn[i].textContent = 'Закрыть'
        }
    }
}

function ModalToUpBalance() {
    let modal = document.getElementById('modal_top_up_balance_wrapper');
    let modal_inner = document.getElementById('modal_top_up_balance');
    modal.classList.add("modal-wrapper_active");

    this.closeModal = function() {
        modal.classList.remove('modal-wrapper_active');
    };

    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

function ModalBillPayment() {
    let modal = document.getElementById('bill_payment');
    let modal_inner = document.getElementById('bill_payment_inner');
    modal.classList.add("modal-wrapper_active");

    this.closeModal = function() {
        modal.classList.remove('modal-wrapper_active');
    };

    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}


function ModalReturnCall() {
    let modal = document.getElementById('modal_call');
    modal.classList.add("business-strategy__modal_active");

    this.closeModal = function() {
        modal.classList.remove('business-strategy__modal_active');
    };

    let btn_close = document.getElementById("btn_call_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_call_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

function ModalWrite() {
    let modal = document.getElementById('modal_write');
    modal.classList.add("business-strategy__modal_active");

    this.closeModal = function() {
        modal.classList.remove('business-strategy__modal_active');
    };

    let btn_close = document.getElementById("btn_write_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_write_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}