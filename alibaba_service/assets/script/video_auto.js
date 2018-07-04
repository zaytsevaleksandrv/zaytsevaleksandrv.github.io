$(".employee").on("mouseover", function(){
    $('video', this).get(0).play();
});
$(".employee").on("mouseleave", function(){
    $('video', this).get(0).pause();
})