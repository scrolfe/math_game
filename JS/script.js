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
        if (game.progress === 1) {
            $('#msg0000').hide()
        }
    },
    currentDirections: function () {
        if (game.progress === 1) {
            $('#dir0000').hide()
        }
    },
};
game.currentMessage();
game.currentDirections();
