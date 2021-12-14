$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger"
    })
        .setClassToggle('.topnav', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        offset: 50,
        triggerHook: "onLeave"
    })
        .setClassToggle('.nav', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        offset: 50,
        triggerHook: "onLeave"
    })
        .setClassToggle('.logo a', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#problem",
        offset: -400,
        reverse: "true"
    })
        .setClassToggle('#problem', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#solution",
        offset: -400,
        reverse: "true"
    })
        .setClassToggle('#solution', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#research",
        offset: -400,
        reverse: "true"
    })
        .setClassToggle('#research', 'show')
        .addTo(controller);

});