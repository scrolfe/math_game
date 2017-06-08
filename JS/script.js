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
        for (var i = 1; i < $('h1').length; i++) {
            if (game.progress === i) {
                $('#msg000' + (i - 1)).hide()
                $('#msg000' + i).show()
        }}
    },
    currentDirections: function () {
        for (var i = 1; i < $('p').length; i++) {
            if (game.progress === i) {
                $('#dir000' + (i - 1)).hide()
                $('#dir000' + i).show()
        }}
    },
};
game.currentMessage();
game.currentDirections();
