'use strict';

//FUNCTIONS
function multiply(a, b) {
  return a * b;
}

var result = multiply(2, 3);
// console.log('The result is', result);

function greeting(name) {
  console.log('Hello', name);
}
// greeting('Megan');
// greeting('Allie');
// greeting('Tyler');
// greeting('Patricia');
// greeting('Steven');

// VARIABLE SCOPE

// function variableScope() {
//   var dog = 'Charlotte';
//   console.log('inside', dog);
// }

// variableScope();

// console.log('outside', dog);



function secondScope(dogParam) {
  // dog = 'Gary'
  console.log('inside', dogParam);
  console.log('we\'re inside the function.');
}

var dog = 'Charlotte';
console.log('outside', dog);
secondScope();









