jQuery(document).ready( function($) {

    /* huidig jaartal in footer */
    var thisDate = new Date();
    var thisYear = thisDate.getFullYear();
    $("#current_year").html(thisYear);

    /* pp_slider_slider-images slider action */
    jQuery(".slider-image-wrapper").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 640,
            settings: {
                dots: false,
                arrows: true
            }
        }]
    });

    /* make form labels appear when there is input */
    $(".label-switch").keyup(function() {
        if($(this).val() ) {
            $(this).prev().addClass("form-label-has-input");
        } else {
            $(this).prev().removeClass("form-label-has-input");
        }
    });

    /* check initial input form fields */
    $(".contact-form .label-switch").each( function() {
        if($(this).val() ) {
            $(this).prev().addClass("form-label-has-input");
        } else {
            $(this).prev().removeClass("form-label-has-input");
        }
    });

    /* repair exit button modal */
    $(".ui-dialog-titlebar-close").html("x");

    /* animated hamburger menu class toggle */
    $('.hamburger').on("click", function() {
        $(this).toggleClass("is-active");
    });

    /***************************
     * TITLE FIX PAGE/NODE TITLE
     **************************/

    var options = {
        lineCap: 'round', // ['round', 'butt', 'square']
        lineJoin: 'round', // ['bevel', 'round', 'miter']
        miterLimit: 10, // control spikeyness
        lineDashArray: [0, 0], // for dashed lines: [line, gap]
        debug: false, // examine measurements and properties used
        disableForFirefox: false // some fonts don't stroke well in firefox, bc they are rendered at varying baselines
    }

    function applyStroke(element) {
        if (matchMedia('(max-width: 480px)').matches) {
            element.stroke(4, '#111111');
        } else if (matchMedia('(max-width: 1200px)').matches) {
            element.stroke(6, '#111111');
        } else {
            element.stroke(8, '#111111');
        }
    }

    var resizeTimeout;
    var strokeText = new StrokeText('title-stroked', options);
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // reset and re-init so strokeText.js can re-evaluate container size
        strokeText.reset();
        strokeText = new StrokeText('title-stroked', options);
        applyStroke(strokeText);

    }, 100);

    function handleViewportChange() {
        // timeout to debounce
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // reset and re-init so strokeText.js can re-evaluate container size
            strokeText.reset();
            strokeText = new StrokeText('title-stroked', options);
            applyStroke(strokeText);

        }, 100);
    }
    window.onresize = handleViewportChange;
    window.onorientationchange = handleViewportChange;

    /***************************
     * end of TITLE FIX PAGE TITLE
     **************************/


    /***************************
     * TITLE FIX WORK TEASER
     **************************/

    $.each($('#sample_slider div.owl-item'), function(ind) {
        $(this).attr('id', 'slide-' + parseInt(ind + 1));
    });

    /***************************
     * end of TITLE FIX WORK TEASER
     **************************/

});