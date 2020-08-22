$(document).ready(function() {

    var calcHeight = function(){
        var SingleHeight = 0;
        $('.masonry').find('.mitem').each(function() {
            SingleHeight += $(this).height();
        });
        if(document.documentElement.clientWidth<=1000){ 
            //Mobile
            SingleHeight = SingleHeight /1.75; 
        } 
        else {
            //Desktop
            SingleHeight = SingleHeight / 3 + 300;
        }
        $('.masonry').css('height', SingleHeight);
    };

    $(window).on('resize',calcHeight);
});