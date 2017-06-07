$(function() {
    $('.one label input').eq(0).focus(function() {
        $('.one label input').eq(0).css({
            'box-shadow': '0 1px 0 #0073aa,0 0 2px 1px #33b3db'
        });
    });
    $('.one label input').eq(1).focus(function() {
        $('.one label input').eq(1).css({
            'box-shadow': '0 1px 0 #0073aa,0 0 2px 1px #33b3db'
        });
    });
    $('.one label input').blur(function() {
        $('.one label input').css({
            'box-shadow': '0 0px 0 #006799'
        });
    });
});
