/*---------------------------------------------
Template name:  HairBar
Version:        1.0
Author:         bPlugins
----------------------------------------------*/

(function ($) {
    "use strict";
    var $window = $(window);

    $window.on('load', function(){
        var $document = $(document);
        var $dom = $('html, body');

        /*=========== off canvas dropdown toggle button append to a tag ============*/
        var offCanvasDropdown = $('.offcanvas-menu-item');

        offCanvasDropdown.parent('li').children('a').append(function() {
            return '<span class="offcanvas-menu-toggle"><i class="fal fa-angle-down"></i></span>';
        });

         /*=========== off canvas dropdown ============*/
         var offCanvasDropdownToggle = $('.offcanvas-menu-toggle');

         offCanvasDropdownToggle.on('click', function(e) {
             var Self = $(this);
             Self.toggleClass('active');
             Self.parent().parent().siblings().children('a').find('.offcanvas-menu-toggle').removeClass('active');
             Self.parent().parent().children('.offcanvas-menu-item').slideToggle(300);
             Self.parent().parent().siblings().children('.offcanvas-menu-item').slideUp(300);
             e.preventDefault();
         });

         /*=========== Off Canvas Menu ============*/
        $document.on('click', '.offcanvas-toggle', function (e) {
            e.preventDefault();
            $('.offcanvas, .body-overlay').addClass('active');
        });

         /*=========== Off Canvas Close ============*/
        $document.on('click', '.body-overlay, .offcanvas-close', function () {
            $('.offcanvas, .body-overlay').removeClass('active');
        });

         /*=========== Full Screen search ============*/
        $document.on('click', '.header-action-search-btn', function (e) {
            e.preventDefault();
            $('.full-screen-search-container').addClass('active');
        });

         /*=========== Full Screen search  ============*/
        $document.on('click', '.full-screen-search-cancel', function () {
            $('.full-screen-search-container').removeClass('active');
        });

        /* ======= Back to Top Button and Navbar Scrolling control ======= */
        var scrollButton = $('#scroll-top');

        $window.on('scroll', function () {
            //back to top button control
            if($(this).scrollTop()>= 300){
                scrollButton.show();
            }else{
                scrollButton.hide();
            }
        });

        $document.on('click','#scroll-top', function () {
            $($dom).animate({scrollTop:0},1000);
        });


        /*============= Background Set on hero item ============*/
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });

        /* ======= Hero Slider ======= */
        $(".hero-slider").owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
        
        /* ======= Tesimonial Slider ======= */
        $(".testimonial-slider").owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<span class='fal fa-angle-left'><span/>", "<span class='fal fa-angle-right'><span/>"],
            smartSpeed: 500,
            autoplay: false
        });

        /*==== Quantity number =====*/
        let quantityBtn = $(".qtyBtn");
        if (quantityBtn.length) {
            quantityBtn.on('click', function () {
                var $this = $(this);
                var oldValue = $this.parent().find('.qtyInput').val();

                if ($this.hasClass('qtyInc')) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // don't allow decrementing below zero
                    if (oldValue > 0) {
                        newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $this.parent().find('.qtyInput').val(newVal);
            });
        }

        /*==== Bootstrap tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();

        /*=========== nice-scroll ============*/
        let niceScrollElem = $(".nice-scroll");
        if(niceScrollElem.length) {
            niceScrollElem.niceScroll({
                cursorcolor: "#424241",
                cursorwidth: "5px",
                background: "#e5e5e5",
                cursorborder: "",
                autohidemode: true,
                horizrailenabled: false
            });
        }

        /*=========== nice-scroll ============*/
        let previewVideo = $('[data-fancybox="preview-video"]');
        if(previewVideo.length) {
            previewVideo.fancybox();
        }

        /*=========== Progress Bar ============*/
        var rateProgressBar = $('.rate-progress-bar');
        rateProgressBar.css('width', function () {
            return $(this).attr('aria-valuenow') + '%';
        });

        /*=========== bootstrap dropdown stop event propagation ============*/
        // If an element inside a dropdown menu has the "keep-open" class,
        // disable closing the dropdown menu.
        $document.on('click.bs.dropdown.data-api', '.keep-open', function (e) {
            e.stopPropagation();
        });

        /*=========== Payment method ============*/
        var paymentMethodLabel = $(".payment-method-label input[type='radio']");
        paymentMethodLabel.on("change", function() {
            $(this).parent().parent().addClass("active"),
            $(this).parent().parent().siblings().removeClass("active")
        });

        /*=========== fancybox ============*/
        var fancyEle = $('[data-fancybox="preview-video"]');
        if(fancyEle.length) {
            fancyEle.fancybox({});
        }

        /*=========== Nice-select ============*/
        var formNiceSelect = $('.form-nice-select');
        if(formNiceSelect.length) {
            formNiceSelect.niceSelect();
        }
        

});

    
    
})(jQuery);
