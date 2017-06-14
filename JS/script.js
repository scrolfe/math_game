//Combine Like Terms Math Game
var game = { //Game Object: Recurring game conditions and attributes
    slide: 0, //Controls which slide is displayed in the message box
    tablesCorrect: { table1: 0, table2: 0, table3: 0, table4: 0 }, //Tracks correct tables
    currentMessage: function () { //Changes the messageBox and directionsBox when the user moves to the next section
        for (var i = 1; i < $('h1').length; i++) {
            if (game.slide === i) { //slide will be connected to button
                $('#msg' + (i - 1)).hide()
                $('#msg' + i).show()
                $('#dir' + (i - 1)).hide()
                $('#dir' + i).show() }}}
};
var reviewButton = function () {
    $('.button2').click(function () {
        game.slide = 1
        game.currentMessage()
    })
}
var gameButton = function () {
    $('.button3').click(function () {
        game.slide = 0
        game.currentMessage()
    })
}
reviewButton();
gameButton();
var tableCompletion = function () { // Checks is 1 or all tables are correct and complete
    for (var i = 1; i < $('.family').length + 1; i++) {
        if (game.tablesCorrect['table' + i] === 4) { // if a table has 4 correct spots filled
            $('.family' + i).css('border', '3px dashed green') } //dotted green border
        }
        if (game.tablesCorrect['table1'] === 4 && game.tablesCorrect['table2'] === 4 && game.tablesCorrect['table3'] === 4 && game.tablesCorrect['table4'] === 4){ //if all of them are green
            alert('all correct')
            $('.token-seat').css('background-color','gold') // turn the spots gold
        }
};
game.currentMessage();
var checkAnswer = function (seat) { //See if each token drop arrives at correct token-seats
        var correctTable = $(seat).data('degree') + 1 //current token-seat data-degree placeholder
        if ($(seat).data('degree')===$('.ui-draggable-dragging').data('degree')){ //same token/seat degree?
            $('.family' + correctTable).css('border','1px solid green') //right
            game.tablesCorrect["table" + correctTable] += 1
            } else {
            $('.family' + correctTable).css('border','1px solid red')} //wrong
            tableCompletion();
};
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
var resetGame = function () {
    $('.button1').click(function () {
        window.location.reload()
    })
}
resetGame();
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
        activate: activateTokenSeat(), //this and below make seats change on pick-up and put-down
        deactivate: deactivateTokenSeat(),
        drop: function(event, ui) { //occurence when dropped on target
            $(this).append($('.ui-draggable-dragging')); //appends dragged token to token seat
            $('.ui-draggable-dragging').css('position','static'); //resets token formatting for new token positioning
            checkAnswer(this)}, //checks for data- attr match between token and seat
        scope: '.token', })
};
droppableTokenSeats();
