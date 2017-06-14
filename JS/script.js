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
                $('#dir' + i).show() }}}
};
game.currentMessage();
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
};
var checkAnswer = function (seat) { //See if each token drop arrives at correct token-seats
        var correctTable = $(seat).data('degree') + 1 //current token-seat data-degree placeholder
        if ($(seat).data('degree')===$('.ui-draggable-dragging').data('degree')){ //same token/seat degree?
            $('.family' + correctTable).css('border','1px solid green') //right
            } else {
            $('.family' + correctTable).css('border','1px solid red')} //wrong
};
var draggableTokens = function () { //token draggable attributes
    $('.token').draggable({
        cursor: 'move', //make cursor change to crosshair icon on drag
        cursorAt: {left: 37, top: 25}, //make cursor stay in middle of token
        revert: true, //have token return to position on release
        scope: '.token', //this and below has to do with z-index
        stack: '.token' });
};
draggableTokens();
var droppableTokenSeats = function () { //token-seat droppable attributes
    $('.token-seat').droppable({
        accept: '.token',
        activate: activateTokenSeat(), //seats change on pick-up and put-down
        deactivate: deactivateTokenSeat(),
        drop: function(event, ui) { //occurence when dropped on target
            $(this).append($('.ui-draggable-dragging')); //appends dragged token to token seat
            $('.ui-draggable-dragging').css('position','static'); //resets token formatting for new token positioning
            checkAnswer(this)}, //checks for data- attr match between token and seat
        scope: '.token', })
};
droppableTokenSeats();
