//Combine Like Terms Math Game
var game = {
  slide: 0, //slides are instructions
  tablesCorrect: { table1: 0, table2: 0, table3: 0, table4: 0 },
  //Changes the messageBox and directionsBox when the user moves to the next section
  currentMessage: function () {
    if (game.slide === 0) {
      $('#msg1').hide()
      $('#msg0').show()
      $('#dir1').hide()
      $('#dir0').show()
    } else if (game.slide === 1) {
      $('#msg0').hide()
      $('#msg1').show()
      $('#dir0').hide()
      $('#dir1').show()
    }
  }
};
// switch view to instructional slide
var reviewButton = function () {
  $('.button2').click(function () {
    game.slide = 1;
    game.currentMessage();
  })
}
reviewButton();
// switch view to game directions slide
var gameButton = function () {
    $('.button3').click(function () {
        game.slide = 0
        game.currentMessage() })
}
gameButton();
// Checks if 1 or all tables are correct and complete
var tableCompletion = function () {
  for (var i = 1; i < $('.family').length + 1; i++) {
    if (game.tablesCorrect['table' + i] === 4) {
      $('.family' + i).css('border', '3px dashed green') }
    }
    if (game.tablesCorrect['table1'] === 4 && game.tablesCorrect['table2'] === 4 && game.tablesCorrect['table3'] === 4 && game.tablesCorrect['table4'] === 4){
      $('.token-seat').css('background-color','gold')
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      $('h1').eq(0).text('You win!!')
      $('p').eq(0).hide()
    }
};
game.currentMessage();
//See if each token drop arrives at correct token-seats
var checkAnswer = function (seat) {
  var correctTable = $(seat).data('degree') + 1
  if ($(seat).data('degree')===$('.ui-draggable-dragging').data('degree')){
    //right answer
    $('.family' + correctTable).css('border','1px solid green')
    game.tablesCorrect["table" + correctTable] += 1
  } else {
    //wrong answer
    $('.family' + correctTable).css('border','1px solid red')}
    tableCompletion();
};
//Seats go to expanded state when user picks up tokens
var activateTokenSeat = function (event, ui) {
  $('.token-seat').on('dropactivate', function(event, ui) {
    $('.token-seat').css('height', '6em') })
};
//Seats return to original state when user drops tokens
var deactivateTokenSeat = function (event, ui) {
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
// ui controls
var draggableTokens = function () {
  $('.token').draggable({
    cursor: 'move',
    cursorAt: {left: 37, top: 25},
    revert: true,
    scope: '.token',
    stack: '.token'
  })
};
draggableTokens();
var droppableTokenSeats = function () {
  $('.token-seat').droppable({
    accept: '.token',
    activate: activateTokenSeat(),
    deactivate: deactivateTokenSeat(),
    drop: function(event, ui) {
      $(this).append($('.ui-draggable-dragging'));
      $('.ui-draggable-dragging').css('position','static');
      checkAnswer(this)},
    scope: '.token',
  })
};
droppableTokenSeats();
