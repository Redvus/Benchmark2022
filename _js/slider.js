; (function ($) {

    'use strict';

    $('.wrapper').imagesLoaded({
        background: true
    });

    function sliderIntroMaster() {
        const sliderIntro = new MasterSlider();
        // sliderIntro.control('arrows' ,{insertTo:'#sliderIntroArrow', autohide:false});
        // sliderIntro.control('thumblist' ,{insertTo: '#sliderIntroThumbs', autohide:false, overVideo:true, dir:'h', speed:17, inset:false, arrows:false, hover:false, customClass:'', align:'bottom',type:'thumbs', margin:5, width:128, height:72, space:5, fillMode:'fill'});

        if (document.body.clientWidth < 820 || screen.width < 820) {
            sliderIntro.setup('sliderIntro', {
                width: 420,
                height: 740,
                autoHeight: true,
                space: 0,
                loop: true,
                view:'basic',
                layout:'fullscreen',
                fullwidth: true,
                preload: 0,
                speed:20,
                grabCursor: false,
                swipe: false,
                mouse: false,
                mobileBGVideo: true
                // mouse: false
            });
        } else if (document.body.clientWidth < 1280 || screen.width < 1280) {
            sliderIntro.setup('sliderIntro', {
                width: 1280,
                height: 720,
                autoHeight: true,
                space: 0,
                loop: true,
                view:'basic',
                layout:'fullscreen',
                fullwidth: true,
                preload: 0,
                speed:20,
                grabCursor: false,
                swipe: false,
                mouse: false,
                mobileBGVideo: true
            });
        } else {
            sliderIntro.setup('sliderIntro', {
                width: 2560,
                height: 1080,
                autoHeight: true,
                space: 0,
                loop: true,
                view:'basic',
                layout:'fullscreen',
                fullwidth: true,
                preload: 0,
                speed:20,
                grabCursor: false,
                swipe: false,
                mouse: false,
            });
        }
    }

    function sliderIntroMasterMobile() {
        const sliderIntroMobile = new MasterSlider();
        // sliderIntro.control('arrows' ,{insertTo:'#sliderIntroArrow', autohide:false});
        // sliderIntro.control('thumblist' ,{insertTo: '#sliderIntroThumbs', autohide:false, overVideo:true, dir:'h', speed:17, inset:false, arrows:false, hover:false, customClass:'', align:'bottom',type:'thumbs', margin:5, width:128, height:72, space:5, fillMode:'fill'});

        sliderIntroMobile.setup('sliderIntro', {
            width: 420,
            height: 740,
            autoHeight: true,
            space: 0,
            loop: true,
            view:'basic',
            layout:'fullscreen',
            fullwidth: true,
            preload: 0,
            speed:20,
            grabCursor: true,
            swipe: true
            // mouse: false
        });
    }

    function initPage() {
        sliderIntroMaster();
    }

    function initPageMobile() {
        sliderIntroMaster();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);