'use strict';
var tableBody = document.getElementById('tableElement');
CookieStand.shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
CookieStand.allLocations = [];
CookieStand.locationHourlyTotals = [];

var renderHeaderRow = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < CookieStand.shopHours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = CookieStand.shopHours[i];
    trEl.appendChild(tdEl);
  }
  tableBody.appendChild(trEl);
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Daily Total Location';
  trEl.appendChild(totalTh);
};
renderHeaderRow();
//constructor
function CookieStand(location, minCustomers, maxCustomers, avgSalePerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSalePerCustomer = avgSalePerCustomer;
  this.totalCustomers = [];
  this.hourlyTotal = [];
  this.locationTotal = 0;
  CookieStand.allLocations.push(this);
  this.randomCustomers();
  this.render();
}

CookieStand.prototype.randomCustomers = function() {
  for (var i = 0; i < CookieStand.shopHours.length; i++) {
    var randomCustomers = Math.floor(Math.random() * Math.floor(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
    this.totalCustomers.push(randomCustomers);
  }
};

CookieStand.prototype.render = function() {
  var totalPerDay = 0;
  // var hourlyGrandtotal = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var hourlyTotalTh = document.createElement('td');
  hourlyTotalTh.textContent = 'Total: ';
  trEl.appendChild(thEl);
  tableBody.appendChild(trEl);
  thEl.textContent = `${this.location}`;
  tableBody.appendChild(thEl);

  for (var i = 0; i < CookieStand.shopHours.length; i++) {
    var tdEl = document.createElement('td');
    var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgSalePerCustomer);
    totalPerDay += totalPerHour;
    tdEl.textContent = `${totalPerHour}`;
    tableBody.appendChild(tdEl);
    this.hourlyTotal.push(totalPerHour);
  }
  this.locationTotal = totalPerDay;
  var dailyLocationTotalSales = this.locationTotal;
  var totalTd = document.createElement('td');
  totalTd.textContent = `${dailyLocationTotalSales}`;
  tableBody.appendChild(totalTd);
 
};
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);

var renderFooterRow = function () {
  var trEl = document.createElement('tr');
  var tfEl = document.createElement('th');
  var tdEl = document.createElement('td');
  tfEl.textContent = 'Total: ';
  tfEl.setAttribute('id', 'footer-totals')
  trEl.appendChild(tfEl);
  var grandTotal = 0;
  for (var j = 0; j < CookieStand.shopHours.length; j++) {
    var total = 0;
    var tdEl = document.createElement('td');
    for (var i = 0; i < CookieStand.allLocations.length; i++) {
      total += CookieStand.allLocations[i].hourlyTotal[j];
      CookieStand.locationHourlyTotals.push(total);
    }
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
    grandTotal += total;
  }
  console.log(grandTotal);
  tableBody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = `${grandTotal}`;
  tdEl.setAttribute('id', 'grand-total')
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
};
renderFooterRow();
