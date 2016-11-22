// A $( document ).ready() block.
$(document).ready(function () {
  newNumber();
});

var answer = 0;
let topNumber = Math.floor((Math.random() * 10) + 1);
let bottomNumber = Math.floor((Math.random() * 10) + 1);

//Checking user input for correctness
function checkAnswer() {

  $('.card_button').click(function () {
    var input = $('#answer').val();
    input = parseInt(input);
    if (input === answer) {
      $('.card').addClass('exit left');
      $('.past_number').addClass('Correct');
      setTimeout(newNumber, 500)
    }
    else{
      $('.card').addClass('exit right');
      setTimeout(newNumber, 500);
    }
  });
}

// Generating new cards and numbers
function newNumber() {
  topNumber = Math.floor((Math.random() * 10) + 1);
  bottomNumber = Math.floor((Math.random() * 10) + 1);
  answer = topNumber + bottomNumber;
  // Generating card numbers 
  $('.card').removeClass('exit right');
  $('.card').removeClass('exit left');
  $('#top_number').text(topNumber);
  $('#bottom_number').text(bottomNumber);
  $('.card').addClass('enter');
  $('#answer').val('');
  $('#answer').focus();
  checkAnswer();
  count();
}