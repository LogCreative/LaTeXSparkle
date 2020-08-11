$(document).ready(function() {

    var getValue = function() {
        return $(window).scrollTop();
    }

    var getMax = function() {
        return $(document).height() - $(window).height();
    } 

    if ('max' in document.createElement('progress')) {
        // Browser supports progress element
        var progressBar = $('progress');

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

        $(window).resize(function() {
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({
                max: getMax(),
                value: getValue()
            });
        });

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

        var refresh = function () {
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', refresh);
    }
});