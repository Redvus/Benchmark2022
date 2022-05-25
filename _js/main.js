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
                start: "0 92px",
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

    /* Navigtion
    -------------------------------------------------- */

    /*---------  Nav Mobile  ---------*/
    const navButtonMobile = document.getElementById('navButtonMobile'),
        navMainMobile = document.getElementById('navMainMobile'),
        navMainListMobile = document.querySelectorAll('#navMainMobile ul > li'),
        navBack = document.querySelector('.header-mobile__nav-mask'),
        navButtonLineTop = document.querySelector('.header-mobile__nav-line__top'),
        navButtonLineMiddle = document.querySelector('.header-mobile__nav-line__middle'),
        navButtonLineBottom = document.querySelector('.header-mobile__nav-line__bottom')
    ;

    function navMenuOpenMobile() {

        let tl = new gsap.timeline({
            reversed: true
        });

        tl
            .to(navBack, {
                duration: 0.4,
                delay: -1,
                autoAlpha: 1,
                display: 'block',
                zIndex: '9995',
                ease: 'power1'
            })
            .to(navMainMobile, {
                duration: 0.4,
                delay: -1.2,
                x: '0%',
                zIndex: '9996',
                ease: 'power2'
            })
            .to(navButtonLineMiddle, {
                duration: 0.3,
                delay: -0.6,
                rotation: '180deg',
                ease: 'power2'
            })
            .to(navButtonLineTop, {
                duration: 0.3,
                delay: -0.6,
                rotation: '135deg',
                x: '27%',
                y: '200%',
                scaleX: 0.6,
                ease: 'power2'
            })
            .to(navButtonLineBottom, {
                duration: 0.3,
                delay: -0.6,
                rotation: '-135deg',
                x: '27%',
                y: '-200%',
                scaleX: 0.6,
                ease: 'power2'
            })
            .from(navMainListMobile, {
                duration: 0.3,
                delay: -0.5,
                stagger: 0.07,
                x: '10%',
                autoAlpha: 0,
                ease: 'back'
            })
        ;

        /*jshint -W030 */
        navButtonMobile.addEventListener('click', function () {
            tl.reversed() ? tl.restart() : tl.reverse();
        });

        navBack.addEventListener('click', function () {
            tl.reverse();
        });

    }

    /* End of Navigtion
    -------------------------------------------------- */

    function navMain() {
        $('.item-has-children').children('a').on('click', function (event) {
            event.preventDefault();
            $(this).toggleClass('submenu-open').next('.submenu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.submenu').slideUp(200);
        });
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
        navMenuOpenMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);