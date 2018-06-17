function ModalApplication() {
    let modal = document.getElementById('modal_application');
    modal.classList.add("modal_active");
    document.querySelector("body").style.overflow = 'hidden';
    document.querySelector("html").style.overflow = 'hidden';
    document.querySelector("body").style.position = 'relative';
    document.querySelector("body").style.height = '100%';
    document.querySelector("body").style.width = '100%';


    this.closeModal = function() {
        modal.classList.remove('modal_active');
        document.querySelector("body").removeAttribute("style");
        document.querySelector("html").removeAttribute("style");
    };

    let btn_close = document.getElementById("btn_application_close");
    btn_close.addEventListener("click", this.closeModal);

    let modal_inner = document.getElementById("modal_application_inner");
    modal_inner.onclick = function(e) {
        e.stopPropagation();
    };

    modal.addEventListener("click", this.closeModal);

    if (document.documentElement.clientHeight < 966) {
        modal.style.overflowX = 'auto';
        modal.style.alignItems = 'flex-start';
    }
}