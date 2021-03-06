// User Info Flyoutv
var userInfoDataLoaded = false;

// User Info Flyout
$(function () {
    $("#userInfo .trigger").click(function () {
        if($(this).parent().css("right") == "-335px"){
            if(!userInfoDataLoaded){
                $('#userInfoData').load('/application/ajax/location-clickstream.html');
                userInfoDataLoaded=true;
            };
            $(this).parent().animate({right:'-10px'}, {queue: false, duration: 500});
        }else{
            $(this).parent().animate({right:'-335px'}, {queue: false, duration: 500});
        }
    })
});

function activeAddress(text) {
    $('#address-title span').fadeOut('fast', function() {
        $(this).text(text + 'Address');
        $(this).fadeIn();
    });
}

$(document).on('ready', function() {

    var x;
    x = $(window).height() - $(".header-navbar").height() - $(".footer-wrapper").height() - 100;
    $(".content-wrap").css("min-height", x);

    // Calling the Fancybox
    $('.js-fancybox-img').fancybox({
        type: 'image'
    });

    $('.fancybox-swf').fancybox({
        type: 'swf'
    });
    
    $('.js-fancybox-inline').fancybox();

    $('.js-fancybox-media-link').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });

    $('.js-fancybox-media-file').fancybox();

    // CREATE ACCOUNT PAGE
    // To change the heading text in the address section
    $('.js-address-type .btn').on('click', function() {
        text = $(this).text();
        activeAddress(text);
    });

    // HOME CAROUSEL
    $('#carousel-home').carousel({
        'pause': 'hover'
    });

    // TABLE SORTER
    $('.sorted-tables').tablesorter({
        sortList: [[0,0]]
    });

    // CHOSEN for the product detail and the event page
    $('.js-product-nav, .js-event-categories').chosen({
        width: '100%'
    });
});

// Video.js
videojs.options.flash.swf = '/_bower_components/video.js/video-js.swf';
