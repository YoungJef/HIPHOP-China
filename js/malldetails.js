$(function() {
    $('.icons a').hover(function() {
        var index = $(this).index();
        $('.xb div').eq(index).siblings().css({
            display: 'none'
        });
        $('.xb div').eq(index).css({
            display: 'block'
        });
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 685) {
            $('.golb').css({
                display: 'block'
            });
            $('.tab').css({
                height: 0,
                position: 'fixed',
                top: 0
            });
            $('.tab').animate({
                height: 50
            });
        }
        if ($(window).scrollTop() < 685) {
            $('.tab').css({
                height: '50px',
                position: 'relative',
                top: 0
            });
            $('.golb').css({
                display: 'none'
            });
        }
    });
    $('.tab ul li').click(function() {
        var index = $(this).index();
        console.log(index);
        $('.tab ul li').removeClass().eq(index).addClass('showme');
    });

});
