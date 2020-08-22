$(document).ready(function() {

   

    // 计算瀑布流高度
    var calcHeight = function(){
        var SingleHeight = 0;

        $('.masonry').find('.mitem').each(function() {
            // console.log($(this));
            // var ord = $(this).getAttribute('order');
            // console.log(ord);
            SingleHeight += $(this).height();
        });
        if(document.documentElement.clientWidth<=1000){ 
            //Mobile
            SingleHeight = SingleHeight /1.8; 
        } 
        else {
            //Desktop
            SingleHeight = SingleHeight / 2.75;
        }
        $('.masonry').css('height', SingleHeight);

    };

    $(window).on('resize',calcHeight);
});