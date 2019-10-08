'use strict';
var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'Salmon Cookie Sales';

var title = document.createElement('h1');
title.textContent = 'We Sell Cookies!';
parentEl.appendChild(title);
var totalForLocation = document.createElement('li');

var seattleStand = {
  shopHours: ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  totalCustomers: [],
  locationTotal: 0,
  randomCustomers: function getRandom() {
    this.totalCustomers = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomNum =  Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.totalCustomers.push(randomNum);
    }
  },
  locationName: 'Seattle',
  render: function() {
    var totalPerDay = 0;
    for (var i = 0; i < this.shopHours.length; i++){
      var seattle = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      seattle.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(seattle);
    }
    this.locationTotal = totalPerDay;
  }
};
seattleStand.randomCustomers();
var cityName = document.createElement('h2');
parentEl.appendChild(cityName);
cityName.textContent = seattleStand.locationName;
seattleStand.render();
// console.log(seattleStand.locationTotal);

parentEl.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + seattleStand.locationTotal + ' cookies';

var tokyoStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  totalCustomers: [],
  locationTotal: 0,
  randomCustomers: function getRandom() {
    this.totalCustomers = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomNum = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.totalCustomers.push(randomNum);
    }
  },
  locationName: 'Tokyo',
  render: function() {
    var totalPerDay = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var tokyo = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      tokyo.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(tokyo);
    }
    this.locationTotal = totalPerDay;
  }
};
tokyoStand.randomCustomers();
var cityName2 = document.createElement('h2');
parentEl.appendChild(cityName2);
cityName2.textContent = tokyoStand.locationName;
tokyoStand.render();
// console.log(tokyoStand.locationTotal);

parentEl.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + tokyoStand.locationTotal + ' cookies';

var dubaiStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  totalCustomers: [],
  locationTotal: 0,
  randomCustomers: function getRandom() {
    this.totalCustomers = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomNum = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.totalCustomers.push(randomNum);
    }
  },
  locationName: 'Dubai',
  render: function () {
    var totalPerDay = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var dubai = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      dubai.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(dubai);
    }
    this.locationTotal = totalPerDay;
  }
};
dubaiStand.randomCustomers();
var cityName3 = document.createElement('h2');
parentEl.appendChild(cityName3);
cityName3.textContent = dubaiStand.locationName;
dubaiStand.render();
// console.log(dubaiStand.locationTotal);

parentEl.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + dubaiStand.locationTotal + ' cookies';

var parisStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  totalCustomers: [],
  locationTotal: 0,
  randomCustomers: function getRandom() {
    this.totalCustomers = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomNum = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.totalCustomers.push(randomNum);
    }
  },
  locationName: 'Paris',
  render: function () {
    var totalPerDay = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var paris = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      paris.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(paris);
    }
    this.locationTotal = totalPerDay;
  }
};
parisStand.randomCustomers();
var cityName4 = document.createElement('h2');
parentEl.appendChild(cityName4);
cityName4.textContent = parisStand.locationName;
parisStand.render();
// console.log(parisStand.locationTotal);

parentEl.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + parisStand.locationTotal + ' cookies';

var limaStand = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  totalCustomers: [],
  locationTotal: 0,
  randomCustomers: function getRandom() {
    this.totalCustomers = [];
    for (var i = 0; i < this.shopHours.length; i++) {
      var randomNum = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
      this.totalCustomers.push(randomNum);
    }
  },
  locationName: 'Lima',
  render: function () {
    var totalPerDay = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var lima = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      lima.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(lima);
    }
    this.locationTotal = totalPerDay;
  }
};
limaStand.randomCustomers();
var cityName5 = document.createElement('h2');
parentEl.appendChild(cityName5);
cityName5.textContent = limaStand.locationName;
limaStand.render();
// console.log(limaStand.locationTotal);

parentEl.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + limaStand.locationTotal + ' cookies';
