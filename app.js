'use strict';
var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'Salmon Cookie Sales';

var child1 = document.createElement('h1');
child1.textContent = 'We Sell Cookies!';
parentEl.appendChild(child1);

var seattleStand = {
  shopHours: ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      // console.log(totalSales[i]);
      return totalSales[i];
    }
  },
  locationName: 'Seattle',
  render: function() {
    for (var i = 0; i < this.shopHours.length; i++){
      var childEl1 = document.createElement('li');
      childEl1.textContent = `${this.shopHours[i]} ${this.hoursTotal(this.maxCustomers)} cookies in ${this.locationName}`;
      parentEl.appendChild(childEl1);
    }
    
  }
}
var cityName = document.createElement('h2');
parentEl.appendChild(cityName);
cityName.textContent = seattleStand.locationName;
seattleStand.render();

var tokyoStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      return totalSales[i];
    }
  },
  locationName: 'Tokyo',
  render :function() {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl2 = document.createElement('li');
      childEl2.textContent = `${this.shopHours[i]} ${this.hoursTotal(this.maxCustomers)} cookies in ${this.locationName}`;
      parentEl.appendChild(childEl2);
    }
  }
}
var cityName2 = document.createElement('h2');
parentEl.appendChild(cityName2);
cityName2.textContent = tokyoStand.locationName;
tokyoStand.render();

var dubaiStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      return totalSales[i];
    }
  },
  locationName: 'Dubai',
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl3 = document.createElement('li');
      childEl3.textContent = `${this.shopHours[i]} ${this.hoursTotal(this.maxCustomers)} cookies in${this.locationName}`;
      parentEl.appendChild(childEl3);
    }
  }
}
var cityName3 = document.createElement('h2');
parentEl.appendChild(cityName3);
cityName3.textContent = dubaiStand.locationName;
dubaiStand.render();

var parisStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      return totalSales[i];
    }
  },
  locationName: 'Paris',
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl3 = document.createElement('li');
      childEl3.textContent = `${this.shopHours[i]} ${this.hoursTotal(this.maxCustomers)} cookies in ${this.locationName}`;
      parentEl.appendChild(childEl3);
    }
  }
}
var cityName4 = document.createElement('h2');
parentEl.appendChild(cityName4);
cityName4.textContent = parisStand.locationName;
parisStand.render();

var limaStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  hoursTotal: function getRandom(num) {
    var totalSales = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      totalSales.push(Math.floor(Math.random() * Math.floor(num)));
      return totalSales[i];
    }
  },
  locationName: 'Lima',
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl3 = document.createElement('li');
      childEl3.textContent = `${this.shopHours[i]} ${this.hoursTotal(this.maxCustomers)} cookies in ${this.locationName}`;
      parentEl.appendChild(childEl3);
    }
  }
}
var cityName5 = document.createElement('h2');
parentEl.appendChild(cityName5);
cityName5.textContent = limaStand.locationName;
limaStand.render();