(function($) {

    $.fn.mousedrag = function() {

        var that = this;

        if (arguments[0] == 'destroy') {
            this.off('mousedown.md mouseup.md mousemove.md mouseleave.md');
            return this;
        }

        var // is mouse button held down?
            isMouseDown = false, 
            // has dragging started
            started = false, 
            // the dragging handler
        	dragHandler = $.isFunction(arguments[0]) ? arguments[0] : null, 
            // extra handlers/options
            // data.start() and data.stop() are available
            data = $.isPlainObject(arguments[1]) ? arguments[1] : null;

        this
            .on('mousemove.md', function() {
                if ( isMouseDown ) {
                    if (!started) {
                        // dragging started
                        $.isFunction(data.start) && data.start.apply(that, arguments);
                    }
                    // being dragged
                    dragHandler && dragHandler.apply(that, arguments);
                    started = true;
                }

            })
            .on('mousedown.md', function() {
                isMouseDown = true;
            })
            .on('mouseup.md mouseleave.md', function() {
                if (started) {
                    // dragging stopped
                    $.isFunction(data.stop) && data.stop.apply(that, arguments);
                }
                isMouseDown = false;
                started = false;
            });

        return this;
    };

    $.event.special.mousedrag = {
        add: function(handlerObj) {
            $(this).mousedrag(handlerObj.handler, handlerObj.data);
            return false;
        },
        remove: function() {
            $(this).mousedrag('destroy');            
            return false;
        }
    };

})(jQuery);
