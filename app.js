'use strict';
var seattleElement = document.getElementById('seattle');
var tokyoElement = document.getElementById('tokyo');
var dubaiElement = document.getElementById('dubai');
var parisElement = document.getElementById('paris');
var limaElement = document.getElementById('lima');

var seattleStand = {
  shopHours: ['6:00am', '7:00am', '8:00am','9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
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
      seattleElement.appendChild(seattle);
    }
    this.locationTotal = totalPerDay;
  }
};
seattleStand.randomCustomers();
var cityName1 = document.createElement('h2');
seattleElement.appendChild(cityName1);
cityName1.textContent = seattleStand.locationName;
seattleStand.render();
var totalForLocation = document.createElement('p');
seattleElement.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + seattleStand.locationTotal + ' cookies';
console.log(seattleStand.locationTotal);


var tokyoStand = {
  shopHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
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
      var tokyoTotal = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      tokyoTotal.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      tokyoElement.appendChild(tokyoTotal);
    }
    this.locationTotal = totalPerDay;
  }
};
tokyoStand.randomCustomers();
var cityName2 = document.createElement('h2');
tokyoElement.appendChild(cityName2);
cityName2.textContent = tokyoStand.locationName;
tokyoStand.render();
// eslint-disable-next-line no-redeclare
var totalForLocation = document.createElement('p');
tokyoElement.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + tokyoStand.locationTotal + ' cookies';

var dubaiStand = {
  shopHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
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
      dubaiElement.appendChild(dubai);
    }
    this.locationTotal = totalPerDay;
  }
};
dubaiStand.randomCustomers();
var cityName3 = document.createElement('h2');
dubaiElement.appendChild(cityName3);
cityName3.textContent = dubaiStand.locationName;
dubaiStand.render();
// eslint-disable-next-line no-redeclare
var totalForLocation = document.createElement('p');
totalForLocation.textContent = 'Total: ' + dubaiStand.locationTotal + ' cookies';
dubaiElement.appendChild(totalForLocation);



var parisStand = {
  shopHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
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
      parisElement.appendChild(paris);
    }
    this.locationTotal = totalPerDay;
  }
};
parisStand.randomCustomers();
var cityName4 = document.createElement('h2');
parisElement.appendChild(cityName4);
cityName4.textContent = parisStand.locationName;
parisStand.render();
// eslint-disable-next-line no-redeclare
var totalForLocation = document.createElement('p');
parisElement.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + parisStand.locationTotal + ' cookies';

var limaStand = {
  shopHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
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
      limaElement.appendChild(lima);
    }
    this.locationTotal = totalPerDay;
  }
};
limaStand.randomCustomers();
var cityName5 = document.createElement('h2');
limaElement.appendChild(cityName5);
cityName5.textContent = limaStand.locationName;
limaStand.render();
// eslint-disable-next-line no-redeclare
var totalForLocation = document.createElement('p');
limaElement.appendChild(totalForLocation);
totalForLocation.textContent = 'Total: ' + limaStand.locationTotal + ' cookies';
