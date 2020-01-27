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
     * TITLE FIX PAGE TITLE
     **************************/

    var content = $(".textcontent").html();
    // console.log(content);

    var content_slices = content.split("\n");
    // console.log(content_slices);

    function first_line(element) {
        var el = document.getElementById(element);
        console.log("el van de node title = " + el);
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
        $(".title-first-line").remove();
        if (matchMedia('(max-width: 480px)').matches) {
            var svgElement = "<svg class='title-first-line' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text class='h1' id='lift' x='50%' y='25' text-anchor='middle'>" + content_slice1 + "</text><use id='use' xlink:href='#lift' /></svg>";
        } else if (matchMedia('(max-width: 1199px)').matches) {
            var svgElement = "<svg class='title-first-line' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text class='h1' id='lift' x='50%' y='38' text-anchor='middle'>" + content_slice1 + "</text><use id='use' xlink:href='#lift' /></svg>";
        } else {
            var svgElement = "<svg class='title-first-line' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text class='h1' id='lift' x='50%' y='86' text-anchor='middle'>" + content_slice1 + "</text><use id='use' xlink:href='#lift' /></svg>";
        }
        $(".node-title-wrapper").append(svgElement);
    }

    get_first_line();
    $(window).resize( get_first_line );

    /***************************
     * end of TITLE FIX PAGE TITLE
     **************************/


    /***************************
     * TITLE FIX WORK TEASER
     **************************/

    $(".work-teaser").each( function(index) {
        var content_teaser = $(this).find(".work-teaser-textcontent").html();
        console.log(content_teaser);

        var content_slices_teaser = content_teaser.split("\n");
        console.log(content_slices_teaser);
        console.log(index);

        function first_line_work_teaser(index) {
            var el = document.getElementsByClassName("work-teaser-textcontent")[index];
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

        var self = $(this);

        function get_first_line_work_teaser(index) {
            var content_slice1_teaser = first_line_work_teaser(index);
            console.log("brrrr" + content_slice1_teaser);
            self.find(".title-first-line_teaser").remove();
            var idThis = "teaser" + index;
            var idThisPlus = "#" + idThis;

            var svgElement_teaser = "<svg class='title-first-line_teaser' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text class='h1' id=idThis x='50%' y='86' text-anchor='middle'>" + content_slice1_teaser + "</text><use xlink:href=idThisPlus /></svg>";

            self.find(".teaser-title-wrapper").append(svgElement_teaser);
        }

        get_first_line_work_teaser(index);

    } );

    /***************************
     * end of TITLE FIX PWORK TEASER
     **************************/

});