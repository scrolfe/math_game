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
                $('#msg000' + (i - 1)).hide()
                $('#msg000' + i).show()
        }}
    },
    //same as above but for directions
    currentDirections: function () {
        for (var i = 1; i < $('p').length; i++) {
            if (game.progress === i) {
                $('#dir000' + (i - 1)).hide()
                $('#dir000' + i).show()
        }}
    },
};
//call message
game.currentMessage();
//call directions
game.currentDirections();
//\/ \/ \/ \/ \/ \/ \/ \/ \/ \/
//CLICK+DRAG FUNCTIONALITY
//\/ \/ \/ \/ \/ \/ \/ \/ \/ \/
//make seats react to tokens being dragged


//-----
//individual tokens and token-seats
//-----

//activate individual token seats
//deactivate individual token seat

//change token seats to be circular, change color, and take term when token drops
// var tokenDropped = function (event, ui) {
//     $('.token').on('drop', function (event, ui) {
//         alert('test')
//         // $('.token').hide()
//         // $('.token-seat').css('border-radius', '300px')
//         // $('.token-seat').css('background-color', 'purple')
//     })
// }

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

//main jquery ui draggable elements hub
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
//main jquery ui dropable elements hub
var droppableTokenSeats = function () {
    $('.token-seat').droppable({
        //should make token-seat accept token
        accept: '.token',
        //method (see activate...() above)
        activate: activateTokenSeat(),
        //method (see deactivate...() above)
        deactivate: deactivateTokenSeat(),
        scope: '.token'
        // over: tokenOverSeat(),
    })
};
var droppableTokenSeat0001 = function () {
    $('#top-left-family_top-left-token-seat').droppable({
        accept: '#token0001',
        drop: function(event, ui) {
            alert('hello')
            $('#token0001').hide()
            $('#top-left-family_top-left-token-seat')
        },
        scope: '.token'
})}
droppableTokenSeat0001();
//call droppability of token-seats
droppableTokenSeats();

//make function for droppable circularity                                           H
    //for each token-seats                                                          o
        //if token drops to seat                                                    w
            //hide token
            //make token-seat border radius 300px                                   d
            //change token-seat color                                               o
            //have token-seat adopt dropped token's term                            ?
