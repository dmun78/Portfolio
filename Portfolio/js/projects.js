$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function () {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger",
        offset: 50,
        triggerHook: "onLeave"
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
        triggerElement: "#projectOne",
        duration: "700px"
    })
        .setClassToggle('#projectOne', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#projectTwo",
        duration: "700px"
    })
        .setClassToggle('#projectTwo', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#projectThree",
        duration: "700px"
    })
        .setClassToggle('#projectThree', 'show')
        .addTo(controller);

    VanillaTilt.init(document.querySelectorAll(".main-class-project"), {
        max: 5,
        speed: 200
    });
});

