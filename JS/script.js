//make game object

var game = {
    //determine some attributes that will be needed for the game/keep coming back
    progress: 0,
    /*make method that changes the messagebox and directionsbox when the user
    moves to the next section */
    won: false,
    score: 0,
    tablesComplete: {
        table1: false,
        table2: false,
        table3: false,
        table4: false
    },
    //create prompt function that changes instructions/narrative based on game progress
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
//call message and directions
game.currentMessage();
game.currentDirections();

//make seats react to tokens being dragged
var activateTokenSeat = function (event, ui) {
    $('.token-seat').on('dropactivate', function(event, ui) {
        $('.token-seat').css('height', '6em')
    })
};

//stop drag reaction when not being dragged anymore
var deactivateTokenSeat = function (event, ui) {
    $('.token-seat').on('dropdeactivate', function(event, ui) {
        $('.token-seat').css('height', '5em')
    })
}

//make function for tokens being draggable using jquery-ui
var draggableTokens = function () {
    $('.token').draggable({
        //make cursor change icons on click+drag
        cursor: 'move',
        cursorAt: {left: 75, top: 50},
        revert: true,
        // scroll: true,
        // scrollSensitivity: 25,
        // scrollSpeed: 25,
        //make cursor prefer edges of .token-seat div
        snap: '.token-seat'
    });
};
//call draggability of tokens
draggableTokens();
//make token-seats droppable
var droppableTokenSeats = function () {
    $('.token-seat').droppable({
        accept: '.token',
        activate: activateTokenSeat(),
        deactivate: deactivateTokenSeat(),
        // drop: tokenSeatReactToDrop(),
    })
};
//call droppability of token-seats
droppableTokenSeats();

//change token seats to be circular and take term when token drops
var tokenDropped = function (event, ui) {
    $('.token-seat').on('droppabledrop', function (event, ui) {
        console.log('testing')
        // $('.token').hide()
        // $('.token-seat').css('border-radius', '300px')
        // $('.token-seat').css('background-color', 'purple')
    })
}

var tokenOverSeat = function (event, ui) {
    $('.token-seat').on('droppableover', function (event, ui) {
        console.log('thing')
    })
}
//make function for droppable circularity
    //for each token-seats
        //if token drops to seat
            //hide token
            //make token-seat border radius 300px
            //change token-seat color
            //have token-seat adopt dropped token's term
