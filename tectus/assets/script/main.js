window.onscroll = function() {Sticky()};

function Sticky() {
    var header = document.getElementById("myHeader"),
        sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("tectus__header-sticky");
    } else {
        header.classList.remove("tectus__header-sticky");
    }
}