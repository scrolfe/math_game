//Game Object
//Attributes that will be needed for the game/that will keep coming back
var game = {
    //Progress is a switch controller for the relationship between game-progress and direction on-screen
    progress: 0,
    //Use this to throw rewarding stimuli and prompts to provide teacher email-address to send your score
    won: false,
    //Possibly used to track successful attempts versus unsuccessful
    score: 0,
    //For tracking which tables took correctly sorted divs
    tablesComplete: {
        table1: false,
        table2: false,
        table3: false,
        table4: false
    },
    //Changes the messageBox and directionsBox when the user moves to the next section
    currentMessage: function () {
        //loop through progresses and add index to below function to clean up code
        for (var i = 1; i < $('h1').length; i++) {
            //have different 'progress' provide different messages to the user
            if (game.progress === i) {
                $('#msg' + (i - 1)).hide()
                $('#msg' + i).show()
        }}
    },
    //same as above but for directions
    currentDirections: function () {
        for (var i = 1; i < $('p').length; i++) {
            if (game.progress === i) {
                $('#dir' + (i - 1)).hide()
                $('#dir' + i).show()
        }}
    },
};
game.currentMessage();
game.currentDirections();

//\/ \/ \/ \/ \/ \/ \/ \/ \/ \/
//CLICK+DRAG FUNCTIONALITY
//\/ \/ \/ \/ \/ \/ \/ \/ \/ \/

//make seats react to tokens being dragged

//-----
//all tokens and token-seats
//-----

var activateTokenSeat = function (event, ui) {
    $('.token-seat').on('dropactivate', function(event, ui) {
        // //make tokens teeny
        // $('.token').css('height', '4em')
        // $('.token').css('width', '6em')
        //make seats taller
        $('.token-seat').css('height', '6em')
    })
};

//stop drag reaction when not being dragged anymore
var deactivateTokenSeat = function (event, ui) {
    $('.token-seat').on('dropdeactivate', function(event, ui) {
        $('.token-seat').css('height', '5em')
    })
}
var checkAnswer = function () {
    for (var i = 1; i < ($('.token-seat').length + 1); i++) {
        if ($('.ui-draggable-dragging').data('degree')===$('#token-seat').data('degree')){
            //outline box in green, showing correct answer
            $('.family' + i).css('border','1px solid green')
            } else {
            //otherwise, outline it in red showing wrong answer
            $('.family' + i).css('border','1px solid red')
    }}};


//jquery ui draggable elements main object
var draggableTokens = function () {
    $('.token').draggable({
        //make cursor change to crosshair icon on drag
        cursor: 'move',
        //make cursor stay in middle of token
        cursorAt: {left: 37, top: 25},
        //have token return to position on release
        // revert: true,
        scope: '.token',
        stack: '.token'
    });
};
//initiate dragable
draggableTokens();

//jquery ui droppable elements main object
var droppableTokenSeats = function () {
    //toggle for each token seat individually
    for (var i = 1; i < ($('.token-seat').length+1); i++) {
        $('#token-seat' + i).droppable({
            accept: '.token',
            //following 2 make seats change on pick up and put down
            activate: activateTokenSeat(),
            deactivate: deactivateTokenSeat(),
            //causes token to stick to token seats on drop
            drop: function(event, ui) {
                checkAnswer()
                $(this).append($('.ui-draggable-dragging'))
                $('.ui-draggable-dragging').css('position','static')
            },
            scope: '.token',
        })
    }};
//call droppable token-seats
droppableTokenSeats();
