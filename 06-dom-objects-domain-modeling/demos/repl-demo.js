// OBJECT LITERALS
// var myObject = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// }

var kevin = {
  firstName: 'Kevin',
  lastInitial: 'F',
  age: 33,
  enrolled: true,
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastInitial + '!';
  }
}
// kevin.introduction();
// kevin['introduction']();
// kevin.enrolled;
// kevin['enrolled'];

var forrest = {
  firstName: 'Forrest',
  lastInitial: 'H',
  age: 21,
  enrolled: true,
  introduction: function () {
    return 'Hi, my name is ' + kevin.firstName + ' ' + this.lastInitial + '!';
  }
}
// forrest.introduction();

// RANDOM NUMBER GENERATOR
// return Math.random() * (max - min) + min;

var randomNum = Math.random() * (10 - 5) + 5;
console.log('before floor', randomNum);
randomNum = Math.floor(randomNum);
console.log('after floor', randomNum);

Math.floor(Math.random() * (10 - 5) + 5);