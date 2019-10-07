'use strict';
var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'Salmon Cookie Sales';

var child1 = document.createElement('h1');
child1.textContent = 'We Sell Cookies!';
parentEl.appendChild(child1);

var seattleStand = {
  shopHours: ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      console.log(totalSales[i]);
      return totalSales[i];
    }
  },
  locationName: 'Seattle',
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++){
      var childEl1 = document.createElement('li');
      childEl1.textContent = `${this.shopHours[i]} ${this.hoursTotal(50)} cookies in Seattle`;
      parentEl.appendChild(childEl1);
    }
    
  }
}
seattleStand.render();

var tokyoStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      console.log(totalSales[i]);
      return totalSales[i];
    }
  },
  locationName: 'Tokyo',
  render :function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl2 = document.createElement('li');
      childEl2.textContent = `${this.shopHours[i]} ${this.hoursTotal(50)} cookies in Tokyo`;
      parentEl.appendChild(childEl2);
    }
  }
}
tokyoStand.render();