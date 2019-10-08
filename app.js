'use strict';
var parentEl = document.getElementById('parentElement');
// parentEl.textContent = 'Salmon Cookie Sales';

var child1 = document.createElement('h1');
child1.textContent = 'We Sell Cookies!';
parentEl.appendChild(child1);

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
      var childEl1 = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      childEl1.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(childEl1);
    }
    this.locationTotal = totalPerDay;
  }
}
seattleStand.randomCustomers();
var cityName = document.createElement('h2');
parentEl.appendChild(cityName);
cityName.textContent = seattleStand.locationName;
seattleStand.render();
// console.log(seattleStand.locationTotal);
var totalForLocation = document.createElement('li');
parentEl.appendChild(totalForLocation);
totalForLocation.textContent = "Total: " + seattleStand.locationTotal + " cookies";

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
      var childEl2 = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      childEl2.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(childEl2);
    }
    this.locationTotal = totalPerDay;
  }
}
tokyoStand.randomCustomers();
var cityName2 = document.createElement('h2');
parentEl.appendChild(cityName2);
cityName2.textContent = tokyoStand.locationName;
tokyoStand.render();
// console.log(tokyoStand.locationTotal);
var totalForLocation = document.createElement('li');
parentEl.appendChild(totalForLocation);
totalForLocation.textContent = "Total: " + tokyoStand.locationTotal + " cookies";

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
      var childEl3 = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      childEl3.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(childEl3);
    }
    this.locationTotal = totalPerDay;
  }
}
dubaiStand.randomCustomers();
var cityName3 = document.createElement('h2');
parentEl.appendChild(cityName3);
cityName3.textContent = dubaiStand.locationName;
dubaiStand.render();
// console.log(dubaiStand.locationTotal);
var totalForLocation = document.createElement('li');
parentEl.appendChild(totalForLocation);
totalForLocation.textContent = "Total: " + dubaiStand.locationTotal + " cookies";

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
      var childEl4 = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      childEl4.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(childEl4);
    }
    this.locationTotal = totalPerDay;
  }
}
parisStand.randomCustomers();
var cityName4 = document.createElement('h2');
parentEl.appendChild(cityName4);
cityName4.textContent = parisStand.locationName;
parisStand.render();
// console.log(parisStand.locationTotal);
var totalForLocation = document.createElement('li');
parentEl.appendChild(totalForLocation);
totalForLocation.textContent = "Total: " + parisStand.locationTotal + " cookies";

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
      var childEl5 = document.createElement('li');
      var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgCookieSale);
      totalPerDay += totalPerHour;
      childEl5.textContent = `${this.shopHours[i]} ${totalPerHour} cookies`;
      parentEl.appendChild(childEl5);
    }
    this.locationTotal = totalPerDay;
  }
}
limaStand.randomCustomers();
var cityName5 = document.createElement('h2');
parentEl.appendChild(cityName5);
cityName5.textContent = limaStand.locationName;
limaStand.render();
// console.log(limaStand.locationTotal);
var totalForLocation = document.createElement('li');
parentEl.appendChild(totalForLocation);
totalForLocation.textContent = "Total: " + limaStand.locationTotal + " cookies";