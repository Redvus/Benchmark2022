; (function ($) {

    'use strict';

	function sliderGalleryMaster() {
		const sliderGallery = new MasterSlider();
		sliderGallery.control('arrows' ,{/*insertTo:'#sliderGalleryArrow', */autohide:false});
		// sliderGallery.control('bullets' , {autohide:false, align:'bottom', margin:10});
		sliderGallery.control('thumblist' ,{insertTo: '#sliderGalleryThumbs', autohide:false, overVideo:true, dir:'h', speed:17, inset:false, arrows:false, hover:false, customClass:'', align:'bottom',type:'thumbs', margin:5, width:128, height:72, space:5, fillMode:'fill'});

		if (document.body.clientWidth < 768) {
			sliderGallery.setup('sliderGallery', {
				width: 420,
				height: 740,
				autoHeight: true,
				space: 0,
				loop: true,
				view:'basic',
				layout:'boxed',
				fullwidth: true,
				preload: 0,
				speed:20,
				grabCursor: true,
				swipe: true
				// mouse: false
			});
		} else if (document.body.clientWidth < 1024) {
			sliderGallery.setup('sliderGallery', {
				width: 1024,
				height: 1768,
				autoHeight: true,
				space: 0,
				loop: true,
				view:'parallaxMask',
				layout:'boxed',
				fullwidth: true,
				preload: 0,
				speed:20,
				swipe: true,
				mouse: true
			});
		} else {
			sliderGallery.setup('sliderGallery', {
				width: 2560,
				height: 1080,
				autoHeight: true,
				space: 0,
				loop: true,
				view:'parallaxMask',
				layout:'boxed',
				fullwidth: true,
				preload: 0,
				speed:20,
				grabCursor: true,
				swipe: true
		// 		mouse: false
			});
		}
	}

    function initPage() {
		sliderGalleryMaster();
    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);