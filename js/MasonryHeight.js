$(document).ready(function() {

    // 自适应调整 svg 宽度，并整体缩放

    // 计算瀑布流高度
    var calcHeight = function(){
        var SingleHeight = 0;
        var itemWidth = $('.mitem').width();

        $('.masonry').find('.mitem').each(function() {
            SingleHeight += $(this).height();
            $(this).find('.mcontent .svgimg embed').each(function() {
                //寻找 svg 标签
                var d = $(this).getSVGDocument();
                var svg = d.querySelector('svg');
                console.log(svg);
                
                if(svg.getAttribute('width')>itemWidth){
                    //需要缩放
                    svg.setAttribute("preserveAspectRatio","xMinYMin meet");
                    svg.style.overflow="hidden";
                    var viewBoxVal = svg.getAttribute("viewBox");
                    if(viewBoxVal){
                        var viewBoxWidth = viewBoxVal.split(" ")[2];
                        var viewBoxHeight = viewBoxVal.split(" ")[3];
                        svg.removeAtrribute("width");
                        svg.removeAtrribute("height");
        
                        var setHeight = itemWidth * viewBoxHeight / viewBoxWidth;
                        svg.setAttribute("width", itemWidth);
                        svg.setAttribute("height", setHeight);
                    }
                }
            });
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