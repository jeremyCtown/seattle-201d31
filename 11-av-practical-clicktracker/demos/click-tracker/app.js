'use strict';

// array to store all goat instances
Goat.allGoats = [];

// make a constructor for Goat objects
function Goat(filepath, name){
  this.filepath = filepath;
  this.name = name;
  Goat.allGoats.push(this);
}

// create instances of Goats
new Goat('img/cruisin-goat.jpg', 'Cruisin Goat');
new Goat('img/kissing-goat.jpg', 'Kissing Goat');
new Goat('img/sassy-goat.jpg', 'Sassy Goat');
new Goat('img/smiling-goat.jpg', 'Smiling Goat');
new Goat('img/sweater-goat.jpg', 'Sweater on a goat!!');

// access the image element from the DOM
var imgEl = document.getElementById('goat-pic');

// event listener on the image
imgEl.addEventListener('click', randomGoat);

// callback function for event listener to randomly display a goat image
function randomGoat() {
  // random number generator to return a number between 0 and the length of the array (Goat.allGoats)
  var randomIndex = Math.floor(Math.random() * Goat.allGoats.length);
  
  // use the random number to display a goat at that random index
  imgEl.src = Goat.allGoats[randomIndex].filepath;
}

// invoke the callback on page load to show a random baby goat
randomGoat();