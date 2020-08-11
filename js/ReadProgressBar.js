$(document).ready(function() {

    var getValue = function() {
        return $(window).scrollTop();
    }

    var getMax = function() {
        return $(document).height() - $(window).height();
    } 

    var windowWidth = document.documentElement.clientWidth;

    if (windowWidth<=768) {
        // Mobile
        var progressBar = $('progress');

        if ('max' in document.createElement('progress')) {
            // Browser supports progress element
            
            // Set the Max attr for the first time
            progressBar.attr({
                max: getMax()
            });
    
            $(document).on('scroll', function() {
                // On scroll only Value attr needs to be calculated
                progressBar.attr({
                    value: getValue()
                });
            });

            var refresh = function(){
                // On resize, both Max/Value attr needs to be calculated
                progressBar.attr({
                    max: getMax(),
                    value: getValue()
                });
            }
    
            // $(window).resize(refresh);

            // After loading some elements
            $(document).resize(refresh);
    
        } else {
    
    
            var getWidth = function() {
                // Calculate width in percentage
                value = getValue();
                width = (value / max) * 100;
                width = width + '%';
                return width;
            }
    
            var setWidth = function() {
                progressBar.css({
                    width: getWidth()
                });
            }
    
            var refresh = function() {
                // Need to reset the Max attr
                max = getMax();
                setWidth();
            }
    
            $(document).on('scroll', setWidth);
            // $(window).on('resize', refresh);
            $(document).on('resize',refresh);
        }

    } else {
        // Desktop
        
        var loadbar = $('#loadbar');
        var bar = $('#bar');

        var setHeight = function(){
            // minimized by the factor of 10
            value = getValue() / 10.0;

            bar.css({
                height: value + 'px'
            });
        }

        var refreshHeight = function(){
            total = getMax() / 10.0;

            loadbar.css({
                height: total + 'px'
            });

            setHeight();
        }

        refreshHeight();

        $(document).on('scroll', setHeight);
        $(document).on('resize', refreshHeight);        

    }


});