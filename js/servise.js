$(function() {
    var timer;
    var top = 0;

    function gundong() {
        $('.gundong ul').animate({
            'top': top - 22
        }, 1000);
    }

    function gun() {
        $('.gundong ul').css({
            'top': 0
        });
        $('.gundong ul li').eq(1).prependTo('.gundong ul');
        gundong();
    }
    setInterval(gun, 2000);
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 190) {
            $('.nav').css({
                'position': 'fixed',
                'top': -10,
                'left': 38,
                'z-index': 999
            })
        }
        if ($(window).scrollTop() < 190) {
            $('.nav').css({
                'position': 'relative',
                'top': 0,
                'left': 0,
                'z-index': 1
            })
        }

        if ($(window).scrollTop() >= 50) {
            $('.shangxia').animate({
                'bottom': '50px'
            })
        }
    });
    $('.username').focus(function() {
        $('.username').val('');
    });
    $('.password').focus(function() {
        $('.password').val('');
    });
    $('.topinput').focus(function() {
        function shan() {
            $('.topinput').css({
                'background': 'rgb(253,123,47)',
                'opacity': rand(70, 100) / 100
            })
        }
        setInterval(shan, 600);

    });

    function rand(m, n) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }
    var key = 0;
    $('.tototop').click(function() {
        timer = setInterval(function() {
            key = $(document).scrollTop();
            key -= 10;
            if ($(document).scrollTop() == 0) {
                clearInterval(timer);
            } else {
                $(document).scrollTop(key);
            }
        }, 1)
    });
    $('.gotop').click(function() {
        timer = setInterval(function() {
            key = $(document).scrollTop();
            key -= 10;
            if ($(document).scrollTop() == 0) {
                clearInterval(timer);
            } else {
                $(document).scrollTop(key);
            }
        }, 1)
    });
    $('.totodown').click(function() {
        timer = setInterval(function() {
            key = $(document).scrollTop();
            key += 10;
            if ($(document).scrollTop() >= 1388) {
                clearInterval(timer);
            } else {
                $(document).scrollTop(key);
            }
        }, 1)
    });
});
