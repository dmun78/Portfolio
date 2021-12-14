$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '.intro'
    })
        .setClassToggle('.intro-info', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.intro'
    })
        .setClassToggle('.topnav', 'show')
        .addTo(controller);

});