$(document).ready(function() {

    var getValue = function() {
        return $(window).scrollTop();
    }

    var getMax = function() {
        return $(document).height() - $(window).height();
    } 

    var tranfunc = function() {
        var windowWidth = document.documentElement.clientWidth;

        if (windowWidth<=768) {
            // Mobile

            var createmobtoc = function(){
                (function() {
                    var id = '__jump__menu__';
                    var count = 1;
                    
                    $("#bottom-link").text('');
                    
                    var first = true;
                    // var liprev = $('<div/>');
                    var aprev = $('<a/>');
                    var leftprev = 0;
                    $('#content').find('h3').each(function() {
                
                        var $section = $(this);
                        // var lis = $section.nextUntil("h2", 'h3');
                
                        /*---------------------
                        * Create menu item
                        *--------------------*/

                        var aout = $('<a/>',{
                            href: '#' + id + count
                        });
                        var but = $('<button/>',{
                           // text: count
                           text: $section.text()
                        });
                        but.appendTo(aout);

                        // var li = $('<li/>');
                        // var a = $('<a/>', {
                        //     text: count,
                        //     href: '#' + id + count
                        // });
                        // li.appendTo(a);
                
                        /*---------------------
                        * Add anchor
                        *--------------------*/
                        $section.attr('id', id + count);
                        count++;
                
                        var labelleftnum = $(this).offset().top / getMax() * windowWidth;
                        
                        if(!first){
                            var labelprevwidth = labelleftnum - leftprev;
                            aprev.children().css({
                                width: labelprevwidth
                            });
                            $('#bottom-link').append(aprev);
                        } else{
                            first = false;
                        }
        
                        aout.css({
                            left: labelleftnum
                        });
                        leftprev = labelleftnum;

                        // liprev=li;
                        aprev = aout;
                    });

                    aprev.children().css({
                        width: windowWidth - leftprev
                    });

                    // liprev.css({
                    //     width: 100 - leftprev + '%'
                    // });

                    $('#bottom-link').append(aprev);
                })();
            }

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
                    createmobtoc();
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
                    createmobtoc();
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

            var createtoc = function(){
                (function() {
                    var id = '__jump__menu__';
                    var count = 0;
                    
                    $("#side-menu").text('');
                    
                    $('#content').find('h3').each(function() {
                
                        var $section = $(this);
                        // var lis = $section.nextUntil("h2", 'h3');
                
                        /*---------------------
                        * Create menu item
                        *--------------------*/
                        var li = $('<div/>');
                        var a = $('<a/>', {
                            text: $section.text(),
                            href: '#' + id + count
                        });
                        a.appendTo(li);
                
                        /*---------------------
                        * Add anchor
                        *--------------------*/
                        $section.attr('id', id + count);
                        count++;
                
                        var labeltop = $(this).offset().top / 10 - 20;

                        $('#side-menu').append(li);

                        li.css({
                            top: labeltop
                        });
                    });
                })();
            }

            var refreshHeight = function(){
                total = getMax() / 10.0;

                loadbar.css({
                    height: total + 'px'
                });

                setHeight();
                createtoc();
            }

            refreshHeight();

            $(document).on('scroll', setHeight);
            $(document).on('resize', refreshHeight);        

        }
    }

    $(window).on('resize',tranfunc);

    tranfunc();

});