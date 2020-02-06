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
        // timeout to debounceTeaser1");
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // reset and re-init so strokeText.js can re-evaluate container size
            strokeText.reset();
            strokeText = new StrokeText('title-stroked', options);
            applyStroke(strokeText);

        }, 100);
    }

    /***************************
     * end of TITLE FIX PAGE TITLE
     **************************/


    /***************************
     * TITLE FIX WORK TEASER
     **************************/

    function applyStrokeTeaser(element) {
        if (matchMedia('(max-width: 768px)').matches) {
            element.stroke(3, '#111111');
        } else if (matchMedia('(max-width: 1200px)').matches) {
            element.stroke(4, '#111111');
        } else {
            element.stroke(4, '#111111');
        }
    }

    $.each($('.work-teaser-title-stroked'), function(index) {
        $(this).attr('id', 'work-teaser-' + parseInt(index + 1));
    });


    /* teaser1 */
    if( $("#work-teaser-1").length !== 0 ) {
        console.log("teaser1");
        var resizeTimeoutTeaser1;
        var strokeTextTeaser1 = new StrokeText('work-teaser-1', options);
        clearTimeout(resizeTimeoutTeaser1);
        resizeTimeoutTeaser1 = setTimeout(function() {
            strokeTextTeaser1.reset();
            strokeTextTeaser1 = new StrokeText('work-teaser-1', options);
            applyStrokeTeaser(strokeTextTeaser1);

        }, 100);
    }
    function handleViewportChangeTeaser1() {
        clearTimeout(resizeTimeoutTeaser1);
        resizeTimeoutTeaser1 = setTimeout(function() {
            strokeTextTeaser1.reset();
            strokeTextTeaser1 = new StrokeText('work-teaser-1', options);
            applyStrokeTeaser(strokeTextTeaser1);
        }, 100);
    }
    /* end of teaser1 */

    /* teaser2 */
    if( $("#work-teaser-2").length !== 0 ) {
        console.log("teaser2");
        var resizeTimeoutTeaser2;
        var strokeTextTeaser2 = new StrokeText('work-teaser-2', options);
        clearTimeout(resizeTimeoutTeaser2);
        resizeTimeoutTeaser2 = setTimeout(function() {
            strokeTextTeaser2.reset();
            strokeTextTeaser2 = new StrokeText('work-teaser-2', options);
            applyStrokeTeaser(strokeTextTeaser2);

        }, 100);
    }
    function handleViewportChangeTeaser2() {
        clearTimeout(resizeTimeoutTeaser2);
        resizeTimeoutTeaser2 = setTimeout(function() {
            strokeTextTeaser2.reset();
            strokeTextTeaser2 = new StrokeText('work-teaser-2', options);
            applyStrokeTeaser(strokeTextTeaser2);
        }, 100);
    }
    /* end of teaser2 */

    /* teaser3 */
    if( $("#work-teaser-3").length !== 0 ) {
        console.log("teaser3");
        var resizeTimeoutTeaser3;
        var strokeTextTeaser3 = new StrokeText('work-teaser-3', options);
        clearTimeout(resizeTimeoutTeaser3);
        resizeTimeoutTeaser3 = setTimeout(function() {
            strokeTextTeaser3.reset();
            strokeTextTeaser3 = new StrokeText('work-teaser-3', options);
            applyStrokeTeaser(strokeTextTeaser3);

        }, 100);
    }
    function handleViewportChangeTeaser3() {
        clearTimeout(resizeTimeoutTeaser3);
        resizeTimeoutTeaser3 = setTimeout(function() {
            strokeTextTeaser3.reset();
            strokeTextTeaser3 = new StrokeText('work-teaser-3', options);
            applyStrokeTeaser(strokeTextTeaser3);
        }, 100);
    }
    /* end of teaser3 */

    /* teaser4 */
    if( $("#work-teaser-4").length !== 0 ) {
        console.log("teaser4");
        var resizeTimeoutTeaser4;
        var strokeTextTeaser4 = new StrokeText('work-teaser-4', options);
        clearTimeout(resizeTimeoutTeaser4);
        resizeTimeoutTeaser4 = setTimeout(function() {
            strokeTextTeaser4.reset();
            strokeTextTeaser4 = new StrokeText('work-teaser-4', options);
            applyStrokeTeaser(strokeTextTeaser4);

        }, 100);
    }
    function handleViewportChangeTeaser4() {
        clearTimeout(resizeTimeoutTeaser4);
        resizeTimeoutTeaser4 = setTimeout(function() {
            strokeTextTeaser4.reset();
            strokeTextTeaser4 = new StrokeText('work-teaser-4', options);
            applyStrokeTeaser(strokeTextTeaser4);
        }, 100);
    }
    /* end of teaser4 */

    /* teaser5 */
    if( $("#work-teaser-5").length !== 0 ) {
        console.log("teaser5");
        var resizeTimeoutTeaser5;
        var strokeTextTeaser5 = new StrokeText('work-teaser-5', options);
        clearTimeout(resizeTimeoutTeaser5);
        resizeTimeoutTeaser5 = setTimeout(function() {
            strokeTextTeaser5.reset();
            strokeTextTeaser5 = new StrokeText('work-teaser-5', options);
            applyStrokeTeaser(strokeTextTeaser5);

        }, 100);
    }
    function handleViewportChangeTeaser5() {
        clearTimeout(resizeTimeoutTeaser5);
        resizeTimeoutTeaser5 = setTimeout(function() {
            strokeTextTeaser5.reset();
            strokeTextTeaser5 = new StrokeText('work-teaser-5', options);
            applyStrokeTeaser(strokeTextTeaser5);
        }, 100);
    }
    /* end of teaser5 */

    /* teaser6 */
    if( $("#work-teaser-6").length !== 0 ) {
        console.log("teaser6");
        var resizeTimeoutTeaser6;
        var strokeTextTeaser6 = new StrokeText('work-teaser-6', options);
        clearTimeout(resizeTimeoutTeaser6);
        resizeTimeoutTeaser6 = setTimeout(function() {
            strokeTextTeaser6.reset();
            strokeTextTeaser6 = new StrokeText('work-teaser-6', options);
            applyStrokeTeaser(strokeTextTeaser6);

        }, 100);
    }
    function handleViewportChangeTeaser6() {
        clearTimeout(resizeTimeoutTeaser6);
        resizeTimeoutTeaser6 = setTimeout(function() {
            strokeTextTeaser6.reset();
            strokeTextTeaser6 = new StrokeText('work-teaser-6', options);
            applyStrokeTeaser(strokeTextTeaser6);
        }, 100);
    }
    /* end of teaser6 */

    /* teaser7 */
    if( $("#work-teaser-7").length !== 0 ) {
        console.log("teaser7");
        var resizeTimeoutTeaser7;
        var strokeTextTeaser7 = new StrokeText('work-teaser-7', options);
        clearTimeout(resizeTimeoutTeaser7);
        resizeTimeoutTeaser7 = setTimeout(function() {
            strokeTextTeaser7.reset();
            strokeTextTeaser7 = new StrokeText('work-teaser-7', options);
            applyStrokeTeaser(strokeTextTeaser7);

        }, 100);
    }
    function handleViewportChangeTeaser7() {
        clearTimeout(resizeTimeoutTeaser7);
        resizeTimeoutTeaser7 = setTimeout(function() {
            strokeTextTeaser7.reset();
            strokeTextTeaser7 = new StrokeText('work-teaser-7', options);
            applyStrokeTeaser(strokeTextTeaser7);
        }, 100);
    }
    /* end of teaser7 */

    /* teaser8 */
    if( $("#work-teaser-8").length !== 0 ) {
        console.log("teaser8");
        var resizeTimeoutTeaser8;
        var strokeTextTeaser8 = new StrokeText('work-teaser-8', options);
        clearTimeout(resizeTimeoutTeaser8);
        resizeTimeoutTeaser8 = setTimeout(function() {
            strokeTextTeaser8.reset();
            strokeTextTeaser8 = new StrokeText('work-teaser-8', options);
            applyStrokeTeaser(strokeTextTeaser8);

        }, 100);
    }
    function handleViewportChangeTeaser8() {
        clearTimeout(resizeTimeoutTeaser8);
        resizeTimeoutTeaser8 = setTimeout(function() {
            strokeTextTeaser8.reset();
            strokeTextTeaser8 = new StrokeText('work-teaser-8', options);
            applyStrokeTeaser(strokeTextTeaser8);
        }, 100);
    }
    /* end of teaser8 */

    /* teaser9 */
    if( $("#work-teaser-9").length !== 0 ) {
        console.log("teaser9");
        var resizeTimeoutTeaser9;
        var strokeTextTeaser9 = new StrokeText('work-teaser-9', options);
        clearTimeout(resizeTimeoutTeaser9);
        resizeTimeoutTeaser9 = setTimeout(function() {
            strokeTextTeaser9.reset();
            strokeTextTeaser9 = new StrokeText('work-teaser-9', options);
            applyStrokeTeaser(strokeTextTeaser9);

        }, 100);
    }
    function handleViewportChangeTeaser9() {
        clearTimeout(resizeTimeoutTeaser9);
        resizeTimeoutTeaser9 = setTimeout(function() {
            strokeTextTeaser9.reset();
            strokeTextTeaser9 = new StrokeText('work-teaser-9', options);
            applyStrokeTeaser(strokeTextTeaser9);
        }, 100);
    }
    /* end of teaser9 */

    /* teaser10 */
    if( $("#work-teaser-10").length !== 0 ) {
        console.log("teaser10");
        var resizeTimeoutTeaser10;
        var strokeTextTeaser10 = new StrokeText('work-teaser-10', options);
        clearTimeout(resizeTimeoutTeaser10);
        resizeTimeoutTeaser10 = setTimeout(function() {
            strokeTextTeaser10.reset();
            strokeTextTeaser10 = new StrokeText('work-teaser-10', options);
            applyStrokeTeaser(strokeTextTeaser10);

        }, 100);
    }
    function handleViewportChangeTeaser10() {
        clearTimeout(resizeTimeoutTeaser10);
        resizeTimeoutTeaser10 = setTimeout(function() {
            strokeTextTeaser10.reset();
            strokeTextTeaser10 = new StrokeText('work-teaser-10', options);
            applyStrokeTeaser(strokeTextTeaser10);
        }, 100);
    }
    /* end of teaser10 */

    /* teaser11 */
    if( $("#work-teaser-11").length !== 0 ) {
        console.log("teaser11");
        var resizeTimeoutTeaser11;
        var strokeTextTeaser11 = new StrokeText('work-teaser-11', options);
        clearTimeout(resizeTimeoutTeaser11);
        resizeTimeoutTeaser11 = setTimeout(function() {
            strokeTextTeaser11.reset();
            strokeTextTeaser11 = new StrokeText('work-teaser-11', options);
            applyStrokeTeaser(strokeTextTeaser11);

        }, 100);
    }
    function handleViewportChangeTeaser11() {
        clearTimeout(resizeTimeoutTeaser11);
        resizeTimeoutTeaser11 = setTimeout(function() {
            strokeTextTeaser11.reset();
            strokeTextTeaser11 = new StrokeText('work-teaser-11', options);
            applyStrokeTeaser(strokeTextTeaser11);
        }, 100);
    }
    /* end of teaser11 */
    
    /* teaser12 */
    if( $("#work-teaser-12").length !== 0 ) {
        console.log("teaser12");
        var resizeTimeoutTeaser12;
        var strokeTextTeaser12 = new StrokeText('work-teaser-12', options);
        clearTimeout(resizeTimeoutTeaser12);
        resizeTimeoutTeaser12 = setTimeout(function() {
            strokeTextTeaser12.reset();
            strokeTextTeaser12 = new StrokeText('work-teaser-12', options);
            applyStrokeTeaser(strokeTextTeaser12);

        }, 100);
    }
    function handleViewportChangeTeaser12() {
        clearTimeout(resizeTimeoutTeaser12);
        resizeTimeoutTeaser12 = setTimeout(function() {
            strokeTextTeaser12.reset();
            strokeTextTeaser12 = new StrokeText('work-teaser-12', options);
            applyStrokeTeaser(strokeTextTeaser12);
        }, 100);
    }
    /* end of teaser12 */


    /***************************
     * end of TITLE FIX WORK TEASER
     **************************/


    /***************************
     * UPDATE FIXES ON RESIZE & ORIENTATION CHANGE
     **************************/

    var resizeHandler = function(){
        handleViewportChange();
        $("#work-teaser-1").length !== 0 ? handleViewportChangeTeaser1() : null;
        $("#work-teaser-2").length !== 0 ? handleViewportChangeTeaser2() : null;
        $("#work-teaser-3").length !== 0 ? handleViewportChangeTeaser3() : null;
        $("#work-teaser-4").length !== 0 ? handleViewportChangeTeaser4() : null;
        $("#work-teaser-5").length !== 0 ? handleViewportChangeTeaser5() : null;
        $("#work-teaser-6").length !== 0 ? handleViewportChangeTeaser6() : null;
        $("#work-teaser-7").length !== 0 ? handleViewportChangeTeaser7() : null;
        $("#work-teaser-8").length !== 0 ? handleViewportChangeTeaser8() : null;
        $("#work-teaser-9").length !== 0 ? handleViewportChangeTeaser9() : null;
        $("#work-teaser-10").length !== 0 ? handleViewportChangeTeaser10() : null;
        $("#work-teaser-11").length !== 0 ? handleViewportChangeTeaser11() : null;
        $("#work-teaser-12").length !== 0 ? handleViewportChangeTeaser12() : null;
    };

    $(window).resize(resizeHandler);
    window.addEventListener("orientationchange", function() {
        resizeHandler;
    }, false);

    /***************************
     * end of UPDATE FIXES ON RESIZE & ORIENTATION CHANGE
     **************************/

});