'use strict';
var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'Sup, everyone.';

var child = document.createElement('h1');
child.textContent = 'Proof of life.';
parentEl.appendChild(child);

var cookieStand1 = {
  shopHours: ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      console.log(totalSales[i]);
      return totalSales[i];
    }
  },
  locationName: '',
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++){
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]} ${this.hoursTotal(50)} cookies`;
      parentEl.appendChild(childEl);
    }
    
  }
}
cookieStand1.render();
// cookieStand.randomNumber();
cookieStand1.hoursTotal();
