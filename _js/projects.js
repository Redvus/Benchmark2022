; (function ($) {

    'use strict';

    // const sectionProjectLi = $('.section-content__project');

    // function projectsGallery() {
    //     const lightbox = new PhotoSwipeLightbox({
    //         gallery: '.section-content__project',
    //         children: 'a'
    //       });
    //       lightbox.init();
    // }

    function initPage() {
        // projectsGallery();
    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

})(jQuery);