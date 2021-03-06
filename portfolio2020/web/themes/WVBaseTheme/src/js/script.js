/* hide textillate animated homepage title before animation kicks in */
jQuery('.textillate1').css("visibility", "hidden");
jQuery('.textillate2').css("visibility", "hidden");
jQuery('.textillate3').css("visibility", "hidden");
jQuery('.textillate4').css("visibility", "hidden");

jQuery(document).ready( function($) {

    /* current year in footer */
    var thisDate = new Date();
    var thisYear = thisDate.getFullYear();
    $("#current_year").html(thisYear);

    /* current age */
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    $("#my_age").html(getAge("October 15, 1981 01:00:00"));

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

    /* add no-bg class to frontpage header so header does not visually overlap frontpage main image */
    if ( $(".frontpage").length !== 0 ) {
        function checkFrontpageScroll() {
            var top = $("body, html").scrollTop();
            if (top < 250) {
                $("header").addClass("no-bg");
            } else {
                $("header").removeClass("no-bg");
            }
        }
        checkFrontpageScroll();
        $(window).scroll(checkFrontpageScroll);
        $("button.hamburger").click(function() {
            $("header").toggleClass("show");
        });
    }

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