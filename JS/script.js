$('h1').eq(0).on('click', messageUpdate);
//make game object
var game = {
    progress: 0,
    won: false,
    score: 0,
    tablesComplete: {
        table1: false,
        table2: false,
        table3: false,
        table4: false
    }
}


//create prompt function that changes instructions/narrative based on game progress
var messageUpdate = function (prompt) {
    $('h1').text(prompt)
    if (progress === 0) {
        prompt = "Welcome to the 'Like-Terms' Family Banquet Hall!"
    } else {
        prompt = "test"
    }
}
