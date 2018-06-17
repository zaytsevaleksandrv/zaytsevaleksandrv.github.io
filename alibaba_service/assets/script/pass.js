function ModalPass() {
    let modal = document.getElementById('modal_pass');
    modal.classList.add("header__lk-modal");

    this.closeModal = function() {
        modal.classList.remove('header__lk-modal');
    };

    let btn_close = document.getElementById("btn_pass_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_pass_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}

function ModalPassRecovery() {
    let modal_p = document.getElementById('modal_pass');
    modal_p.classList.remove("header__lk-modal");

    let modal = document.getElementById('modal_pass_recovery');
    modal.classList.add("header__lk-modal");

    this.closeModal = function() {
        modal.classList.remove('header__lk-modal');
    };

    let btn_close = document.getElementById("btn_pass_recovery_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_pass_recovery_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);
}