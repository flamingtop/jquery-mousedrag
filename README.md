# jQuery mousedrag plugin/event

Simulate mouse dragging event(mousemove while mousedown).

## Usage

**as a plugin**

    $('#foo').mousedrag(function(ev) { // mouse being dragged });

    $('#foo').mousedrag(
        function(ev) {  // mouse being dragged }, 
        {  
            // optional
            start: function(ev) { // drag is started  },
            stop: function(ev) { // drag is stopped }
        }
    );
    
**as a special event**

    $('#foo').on('mousedrag', function(ev) { // mouse being dragged });
    
    $('#foo').on(
        'mousedrag',
        {
            start: function(ev) {},
            stop: function(ev) {}
        },
        function(ev) {}
    );

## dependencies

jquery 1.4+ 
