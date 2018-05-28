function ModalBalance() {
    let modal = document.querySelector('.top-up-balance');
    let modal_mobile = document.getElementById('modal_balance_mobile');

    modal.classList.toggle("top-up-balance_active");
    modal_mobile.classList.toggle("top-up-balance_active");
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