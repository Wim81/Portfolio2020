jQuery(document).ready( function($) {

    /* huidig jaartal in footer */
    var thisDate = new Date();
    var thisYear = thisDate.getFullYear();
    $("#current_year").html(thisYear);

    // pp_slider_testimonial slider action
    /*$(".pp_slider_testimonial-wrapper").slick({
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     });*/

    // pp_slider_slider-images slider action
    /*$(".slider-image-wrapper").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true
    });*/

    // pp_image_gallery interactive modal action
    /*if( $(".gallery a").length ) {
        var lightbox = $(".gallery a").simpleLightbox();
    }*/

    /* make form labels appear when there is input */
    $(".label-switch").keyup(function() {
        if ($(this).val() ) {
            $(this).prev().css("opacity", 1);
        } else {
            $(this).prev().css("opacity", 0);
        }
    });

    /* form checkbox toggle */
    $("form .label-checkbox").on("click", function() {
       $(this).toggleClass("checked");
    });

    // form custom select box with selectize.js
    $(".form-select").selectize({
        create: false
    });

    /* form show file name uploaded file */
    $('.file-input-action').bind('change', function() {
        var fileName = '';
        fileName = $(this).val();
        $(this).parent().find('.file-input-wrapper-filename').html(fileName);
    });

    /* animated hamburger menu class toggle */
    $('.hamburger').on("click", function() {
        $(this).toggleClass("is-active");
    });

    /***************************
     * TITLE FIX
     **************************/

    var content = $(".textcontent").html();
    // console.log(content);

    var content_slices = content.split("\n");
    // console.log(content_slices);

    var testr = document.getElementById('textcontent');
    // console.log(testr);

    function first_line(element) {
        var el = document.getElementById(element);
        var cache = el.innerHTML;
        var text = el.innerHTML;
        el.innerHTML = 'a'; var initial = el.offsetHeight; el.innerHTML = cache;
        var arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            text = text.substring(0, text.lastIndexOf(" "));
            if (el.offsetHeight == initial) {
                var temp = el.innerHTML;
                el.innerHTML = cache;
                return temp;
            }
            el.innerHTML = text;
        }
    }

    function get_first_line() {
        var content_slice1 = first_line('textcontent');
        console.log(content_slice1);
        $(".title-first-line").remove();
        var svgElement = "<svg class='title-first-line' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text class='h1' id='lift' x='50%' y='18%'>" + content_slice1 + "</text><use id='use' xlink:href='#lift' /></svg>";
        $(".node-title-wrapper").append(svgElement);
    }

    get_first_line();
    $(window).resize( get_first_line );

    /***************************
     * end of TITLE FIX
     **************************/
});