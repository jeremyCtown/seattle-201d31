'use strict';

var months = ['May', 'June', 'July', 'August', 'September'];

// make an object literal for each year
// store the values for the miles hiked
// display the result as list items

var twoThousandFifteen = {
  miles: [13, 52, 44, 82, 6],
  render: function() {
    // access the ul from index.html
    var ulEl = document.getElementById('fifteen');

    for(var i = 0; i < this.miles.length; i++) {
      // 1. create list items
      var liEl = document.createElement('li');
      // 2. give them content
      liEl.textContent = months[i] + ': ' + this.miles[i] + ' miles';
      // 3. append the li to the ul
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
  }
};

var twoThousandSixteen = {
  miles: [44, 6, 13, 76, 2],
  render: function () {
    // access the ul from index.html
    var ulEl = document.getElementById('sixteen');

    for (var i = 0; i < this.miles.length; i++) {
      // 1. create list items
      var liEl = document.createElement('li');
      // 2. give them content
      liEl.textContent = months[i] + ': ' + this.miles[i] + ' miles';
      // 3. append the li to the ul
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
  }
};

var twoThousandSeventeen = {
  miles: [99, 67, 88, 44, 60],
  render: function () {
    // access the ul from index.html
    var ulEl = document.getElementById('seventeen');

    for (var i = 0; i < this.miles.length; i++) {
      // 1. create list items
      var liEl = document.createElement('li');
      // 2. give them content
      liEl.textContent = months[i] + ': ' + this.miles[i] + ' miles';
      // 3. append the li to the ul
      // parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
  }
};

twoThousandFifteen.render();
twoThousandSixteen.render();
twoThousandSeventeen.render();