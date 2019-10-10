'use strict';
var tableBody = document.getElementById('tableElement');
CookieStand.shopHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
CookieStand.allLocations = [];
CookieStand.locationHourlyTotals = [];
var renderHeaderRow = function(){
  var tableRowEl = document.createElement('tr');
  var tableHeadEl = document.createElement('th');
  tableHeadEl.textContent = 'Location';
  tableRowEl.appendChild(tableHeadEl);
  
  for (var i = 0; i < CookieStand.shopHours.length; i++) {
    var tableDataEl = document.createElement('td');
    tableDataEl.textContent = CookieStand.shopHours[i];
    tableRowEl.appendChild(tableDataEl);
  }
  tableBody.appendChild(tableRowEl);
  tableBody.setAttribute('style', 'background-color: #6D7993;');
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Daily Total';
  tableRowEl.appendChild(totalTh);
  tableRowEl.setAttribute('id', 'headerRow');
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
  var tableRowEl = document.createElement('tr');
  var tableHeadEl = document.createElement('th');
  var hourlyTotalTh = document.createElement('td');
  hourlyTotalTh.textContent = 'Total: ';
  tableRowEl.appendChild(tableHeadEl);
  tableBody.appendChild(tableRowEl);
  tableHeadEl.textContent = `${this.location}`;
  tableBody.appendChild(tableHeadEl);

  for (var i = 0; i < CookieStand.shopHours.length; i++) {
    var tableDataEl = document.createElement('td');
    var totalPerHour = Math.floor(this.totalCustomers[i] * this.avgSalePerCustomer);
    totalPerDay += totalPerHour;
    tableDataEl.textContent = `${totalPerHour}`;
    tableBody.appendChild(tableDataEl);
    this.hourlyTotal.push(totalPerHour);
  }
  this.locationTotal = totalPerDay;
  var dailyLocationTotalSales = this.locationTotal;
  var totalTd = document.createElement('td');
  totalTd.textContent = `${dailyLocationTotalSales}`;
  tableBody.appendChild(totalTd);
};

var renderFooterRow = function () {
  var tableRowEl = document.createElement('tr');
  var tfEl = document.createElement('th');
  var tableDataEl = document.createElement('td');
  tfEl.textContent = 'Total: ';
  tfEl.setAttribute('id', 'footer-totals')
  tableRowEl.appendChild(tfEl);
  tableRowEl.setAttribute('id', 'totalRow'); //identify the total row/footer
  
  var grandTotal = 0;
  for (var j = 0; j < CookieStand.shopHours.length; j++) {
    var total = 0;
    var tableDataEl = document.createElement('td');
    for (var i = 0; i < CookieStand.allLocations.length; i++) {
      total += CookieStand.allLocations[i].hourlyTotal[j];
      CookieStand.locationHourlyTotals.push(total);
    }
    tableDataEl.textContent = total;
    tableRowEl.appendChild(tableDataEl);
    
    grandTotal += total; //total for all locations for every hour
  }
  // console.log(grandTotal);
  tableBody.appendChild(tableRowEl);
  var tableDataEl = document.createElement('td');
  tableDataEl.textContent = `${grandTotal}`;
  tableDataEl.setAttribute('id', 'grand-total');
  tableRowEl.appendChild(tableDataEl);
};
  
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);
//Form
var userForm = document.getElementById('new-stand');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log('event.target.location.value', event.target.location.value);
  var location = event.target.location.value
  var minCustomer = event.target.minCust.value
  var maxCustomer = event.target.maxCust.value
  var avgPerCustomer = event.target.avgSale.value
  // hideTotals.setAttribute('style', 'display: none;');
  //delete the initial footer row 
  tableBody.deleteRow(-1);
  new CookieStand(location, +minCustomer, +maxCustomer, +avgPerCustomer);
  userForm.reset();//clear form after submit
    //render the new total row with the new location
  renderFooterRow(); 
};
renderFooterRow(); 