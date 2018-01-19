// FOR LOOP

var favoriteFoods = ['pizza', 'sushi', 'pho', 'chocolate chip cookies', 'pasta'];

// for(start; condition; increment) {
//   code to be executed on every element
// }

var foodGuess = prompt('Can you guess one of my favorite foods?').toLowerCase();

for(var i = 0; i < favoriteFoods.length; i++) {
  console.log('i is equal to ' + i);
  console.log('food: ' + favoriteFoods[i]);
}

for(var i = 0; i < favoriteFoods.length; i++) {
  // check if the user guessed one of the foods
  if (foodGuess === favoriteFoods[i]) {
    // if so, tell the user and stop the loop
    alert('That is correct! I love ' + favoriteFoods[i]);
    break;
  }
  // if not, keep checking
  // if (some condition is met) continue;

  // other logic that doesn't run after continue but loop keeps going
}

// WHILE LOOP
// might never run

// while(condition is met) {
//   do this stuff
// }

// var favoriteNum = 4;
var counter = 0;
var flag = false;
while (counter < 5 && flag === false) {
  // favoriteNum++;
  counter++;
  console.log(counter);
}

// DO WHILE LOOP
// runs at least once
// do {
//   do this stuff
// } while (this condition is true)
var faveNum = 2;
var counter2 = 0;
var flag2 = false;
do {
  var question2 = prompt('Question...');
  counter++;
  // if/else to toggle flag to true
  if (question2 === faveNum || counter === 7) {
    flag2 = true;
  }
} while (flag2 === false);