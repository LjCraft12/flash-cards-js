var topNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var bottomNumber = ["1", "2,", "3", "4", "5", "6", "7", "8", "9", "10"];


function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// injecting card number on button press
var cardNumber = 1;
 function cardToggle() {
   $('.card').toggleClass('enter exit');
 }

 $('.card button' ).click(function() {
   cardNumber++;
   $('#question-number').text("Question " + cardNumber);
   $('.card').toggleClass('left right');
   cardToggle();
   setTimeout( cardToggle, 100);  
 });

//Inserting top number to question
$('#top-number').text(topNumber);
