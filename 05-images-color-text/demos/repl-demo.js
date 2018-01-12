function clue(person, location, weapon) {
  return 'The muder was committed by ' + person + ' in the ' + location + ' with the' + weapon + '!';
}

clue('Allie', 'kitchen', 'butcher knife');

// variables can be passed in as arguments
var whoDidIt = 'Allie';
var whereDidItHappen = 'kitchen';
var whatWasUsed = 'butcher knife';

clue(whoDidIt, whereDidItHappen, whatWasUsed);

// if(person === undefined) {
//     do something, such as set to default value
// }

clue('kitchen', 'candle stick');
// will return: "The murder was committed by kitchen in the candle stick with the undefined!"

function math(num1, num2) {
  var sum = num1 + num2;
  var product = num1 * num2;
  var subtract = num1 - num2;
  return [sum, product, subtract];
}
math(3, 8);
// to access one value of the array, use bracket notation
math(3,8)[0];