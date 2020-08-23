$(document).ready(function() {

    var max = function(a,b){
        return (a>b?a:b);
    };
   
    // 计算瀑布流高度
    var calcHeight = function(){
        var resultHeight = 0;
        var count = 1;
        if(document.documentElement.clientWidth<=1000){ 
            //Mobile 2 Columns
            var Heights = [0,0];
            $('.masonry').find('.mitem').each(function(){
                Heights[(count++) % 2] += $(this).height();
            });
            resultHeight = max(Heights[0],Heights[1]) + count / 2 * 10;
            //SingleHeight = SingleHeight /1.8; 
        } 
        else {
            //Desktop 3 Columns
            var SingleHeight = 0;
            $('.masonry').find('.mitem').each(function(){
                SingleHeight += $(this).height();
            });
            resultHeight = SingleHeight / 2.8 + 100;
        }
        $('.masonry').css('height', resultHeight);

    };

    $(window).on('resize',calcHeight);
});