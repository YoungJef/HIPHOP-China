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
    var i = 0;

    function autoPlay() {
        i++;
        if (i >= 4) {
            i = 0;
        }
        $('.img ul li').eq(i).siblings()
            .stop().animate({
                'opacity': 0
            }, 500);
        $('.img ul li').eq(i).stop().animate({
            'opacity': 1
        }, 500)
        $('.dian a').eq(i).siblings().css({
            'background': '#fff'
        });
        $('.dian a').eq(i).css({
            'background': '#ff6100'
        });
    }
    timer = setInterval(autoPlay, 3000);
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
    $('.img ul img').mouseenter(function() {
        $('.img ul img').css({
            'opacity': '.8',
            'transform': 'scale(1.1)'
        });
        clearInterval(timer)
    });
    $('.img ul img').mouseleave(function() {
        $('.img ul img').css({
            'opacity': '1',
            'transform': 'scale(1)'
        })
        timer = setInterval(autoPlay, 3000);
    });
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
