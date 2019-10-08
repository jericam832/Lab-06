/* eslint-disable no-unused-vars */
'use strict';
var shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var allLocations = [];
var tableBody = document.getElementById('tableElement');

var renderHeaderRow = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < shopHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = shopHours[i];
    trEl.appendChild(tdEl);
  }
  tableBody.appendChild(trEl);
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Daily Total Location';
  trEl.appendChild(totalTh)
};
renderHeaderRow();
//constructor
function CookieStand(location, minCustomers, maxCustomers, avgSalePerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSalePerCustomer = avgSalePerCustomer;
  this.totalCustomers = [];
  this.locationTotal = 0;
  allLocations.push(this);
}

CookieStand.prototype.randomCustomers = function() {
  // this.totalCustomers = [];
  for (var i = 0; i < shopHours.length; i++) {
    var randomCustomers = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.totalCustomers.push(randomCustomers);
  }
};

CookieStand.prototype.render = function() {
  var totalPerDay = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  tableBody.appendChild(trEl);
  thEl.textContent = `${this.location}`;
  tableBody.appendChild(thEl);
  for (var i = 0; i < shopHours.length; i++) {
    var tdEl = document.createElement('td');
    var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgSalePerCustomer);
    totalPerDay += totalPerHour;
    tdEl.textContent = `${totalPerHour}`;
    tableBody.appendChild(tdEl);
  }
  this.locationTotal = totalPerDay;
  var dailyLocationTotalSales = this.locationTotal;
  var totalTd = document.createElement('td');
  totalTd.textContent = `${dailyLocationTotalSales}`;
  tableBody.appendChild(totalTd);
};
var seattle = new CookieStand('Seattle', 23, 65, 6.3);
var tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
var dubai = new CookieStand('Dubai', 11, 38, 3.7);
var paris = new CookieStand('Paris', 20, 38, 2.3);
var lima = new CookieStand('Lima', 2, 16, 4.6);
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].randomCustomers();
  allLocations[i].render();
}
