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

    /* add classes to eu cookie compliance banner buttons  */
    $(".eu-cookie-compliance-banner .agree-button").addClass("btn btn-primary");
    $(".eu-cookie-compliance-banner .decline-button").addClass("btn btn-primary");

    /* AOS init */
    AOS.init();

    /* Textillate effect homepage */
    $(function () {
        $('.textillate1').textillate({
            loop: false,
            initialDelay: 1000,
            autoStart: true,
            in: {
                effect: 'fadeInDown',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: true
            },
            type: 'char'
        });
    })

    $(function () {
        $('.textillate2').textillate({
            loop: false,
            initialDelay: 1000,
            autoStart: true,
            in: {
                effect: 'fadeInUp',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: true
            },
            type: 'char'
        });
    })

    $(function () {
        $('.textillate3').textillate({
            loop: false,
            initialDelay: 500,
            autoStart: true,
            in: {
                effect: 'fadeInDown',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false
            },
            type: 'char'
        });
    })

    $(function () {
        $('.textillate4').textillate({
            loop: false,
            initialDelay: 500,
            autoStart: true,
            in: {
                effect: 'fadeInUp',
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: false,
                reverse: false
            },
            type: 'char'
        });
    })
    /* end of Textillate effect homepage */
});