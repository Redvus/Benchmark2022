; (function ($) {

    'use strict';



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