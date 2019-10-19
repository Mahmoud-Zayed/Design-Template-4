
$(function () {
    "use strict";
    /*
    $('.awsemoe img').mousemove(function () {
        $('.overlay').hide();
    });
    */

    $('.first').click(function () {
        $('.f1 .one').show().siblings().hide();
    });
    $('.second').click(function () {
        $('.f1 .two').show().siblings().hide();
    });

    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 550) {
            $('.header').slideDown();
        } else {
            $('.header').slideUp();
        }
    });


	$(".fancybox").fancybox();

    $('.one1').css('display','block');
    $('.acordion h3').click(function () {
        $(this).next().slideToggle();
        $('.acordion p').not($(this).next()).slideUp();
    });



    $('.download').click(function () {
        $('.timer').countTo();
    });

    $('.all_img').mixItUp();

    $("body").niceScroll({
        cursorcolor: "#e84118",
        cursorwidth: "10px",
        cursorborder: "1px solid #e84118",
    });

});
