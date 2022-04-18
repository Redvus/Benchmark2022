; (function ($) {

    'use strict';

    gsap.registerPlugin(ScrollTrigger);

    function scrollSmooth() {
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector('.wrapper'),
            smooth: true
            // multiplier: 1.2
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(".wrapper", {
            scrollTop(value) {
              return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },

            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // pinType: document.querySelector(".wrapper-info").style.transform ? "transform" : "fixed"
        });

        gsap.from(".header-line", {
            scrollTrigger: {
                trigger: ".header-line",
                scroller: ".wrapper",
                scrub: true,
                start: "0 86px",
                end: () => `+=${document.querySelector(".wrapper").offsetHeight - window.innerHeight}`
                // markers: {
                // 	startColor: "#fff",
                // 	endColor: "#fff"
                // }
            },
            scaleX: 0,
            transformOrigin: "0 0",
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }

    // $('.wrapper').imagesLoaded({
    //     background: true
    // });

    /*----------  Slider  ----------*/
    // var slider = new MasterSlider();
    // slider.control('arrows' ,{insertTo:'#slider_arrow_top',autohide:false});
    // // slider.control('slideinfo',{insertTo:'#slider_info'});

    // slider.setup('slider_top' , {
    //     width: 1024,
    //     height: 640,
    //     autoHeight: false,
    //     space: 0,
    //     loop: false,
    //     view:'basic',
    //     layout:'fullscreen', //fullscreen
    //     speed:20
    // });

    function initPage() {
        scrollSmooth();
    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);