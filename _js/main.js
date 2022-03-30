(function ($) {

    $('.wrapper').imagesLoaded({
        background: true
    });

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

    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);