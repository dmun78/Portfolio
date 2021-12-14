$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});


$(document).ready(function () {

    var controller = new ScrollMagic.Controller();
    var height = window.screen.height;

    var animation = new TimelineMax()
        .fromTo('#snowGlobe', 0.1, {scale: .2 }, {scale: 1.4, ease: Linear.easeNone});

    var scene = new ScrollMagic.Scene({
        triggerElement: '.trigger',
        triggerHook: 'onLeave',
        duration: '100%',
        reverse: 'true'
    })
        .setPin('#snowGlobe')
        .setTween(animation)
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: '10%'
    })
        .setClassToggle('.journal-title h1', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: '10%'
    })
        .setClassToggle('.mouse_scroll', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        offset: '5',
        reverse: 'true'
    })
        .setClassToggle('#sleder', 'move')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.trigger',
        offset: (2*height)/3
    })
        .setClassToggle('.topnav', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.trigger',
        offset: (2*height)/3
    })
        .setClassToggle('.nav', 'show')
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.trigger',
        offset: (2*height)/3
    })
        .setClassToggle('.logo a', 'show')
        .addTo(controller);
});
