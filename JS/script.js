//Combining Like Terms Math Game
var game = { //Game Object: Recurring game conditions and attributes
    slide: 0, //Controls which slide is displayed in the message box
    tablesCorrect: { table1: false, table2: false, table3: false, table4: false }, //Tracks correct tables
    currentMessage: function () { //Changes the messageBox and directionsBox when the user moves to the next section
        for (var i = 1; i < $('h1').length; i++) {
            if (game.slide === i) { //slide will be connected to button
                $('#msg' + (i - 1)).hide()
                $('#msg' + i).show()
                $('#dir' + (i - 1)).hide()
                $('#dir' + i).show()
        }}
    }
};
game.currentMessage();
// game.currentDirections();

//\/ \/ \/ CLICK+DRAG \/ \/ \/
var activateTokenSeat = function (event, ui) { //Seats go to expanded state when user picks up tokens
    $('.token-seat').on('dropactivate', function(event, ui) {
        $('.token-seat').css('height', '6em')
    })
};

var deactivateTokenSeat = function (event, ui) { //Seats return to original state when user drops tokens
    $('.token-seat').on('dropdeactivate', function(event, ui) {
        $('.token-seat').css('height', '5em')
    })
}
var checkAnswer = function (seat) { //See if each token drop arrives at correct token-seats
        var correctTable = $(seat).data('degree') + 1 //current token-seat data-degree placeholder
        if ($(seat).data('degree')===$('.ui-draggable-dragging').data('degree')){ //same token/seat degree?
            $('.family' + correctTable).css('border','1px solid green') //right
            } else {
            $('.family' + correctTable).css('border','1px solid red') //wrong
    }};
 // && $('.ui-draggable-dragging').data('degree') === $('.family'+correctTable).data('degree')
//jquery ui draggable elements main object
var draggableTokens = function () {
    $('.token').draggable({
        //make cursor change to crosshair icon on drag
        cursor: 'move',
        //make cursor stay in middle of token
        cursorAt: {left: 37, top: 25},
        //have token return to position on release
        revert: true,
        scope: '.token',
        stack: '.token'
    });
};
//initiate dragable
draggableTokens();

// droppableTokenSeats();
var droppableTokenSeats = function () {
    //toggle for all token seats
    $('.token-seat').droppable({
        accept: '.token',
        //following 2 make seats change on pick up and put down
        activate: activateTokenSeat(),
        deactivate: deactivateTokenSeat(),
        //causes token to stick to token seats on drop
        drop: function(event, ui) {

            //grabs token jquery ui-draggable-dragging class and appends it to token-seat
            $(this).append($('.ui-draggable-dragging'));

            //reset token formatting for new token positioning
            $('.ui-draggable-dragging').css('position','static');

            //check if dragged box html data- attr matches token-seat html data- attr
            checkAnswer(this);
        },
        scope: '.token',
})};
//call droppable token-seats
droppableTokenSeats();
