
var currentDate = moment();
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = currentDate.format("dddd, MMMM Do YYYY");
var currentMonth = currentDate.format("M");
console.log(currentMonth);

var currentYear = currentDate.format("YYYY");
console.log(currentYear);



var hr900 = moment(currentYear + '-' + currentMonth + '-' + ' 09:00').format('h:00 A');
console.log(hr900);
var hr1000 = moment(currentYear + '-' + currentMonth + '-' + ' 10:00').format('h:00 A');
console.log(hr1000);
var hr1100 = moment(currentYear + '-' + currentMonth + '-' + ' 11:00').format('h:00 A');
console.log(hr1100);
var hr1200 = moment(currentYear + '-' + currentMonth + '-' + ' 12:00').format('h:00 A');
console.log(hr1200);
var hr1300 = moment(currentYear + '-' + currentMonth + '-' + ' 13:00').format('h:00 A');
console.log(hr1300);
var hr1400 = moment(currentYear + '-' + currentMonth + '-' + ' 14:00').format('h:00 A');
console.log(hr1400);
var hr1500 = moment(currentYear + '-' + currentMonth + '-' + ' 15:00').format('h:00 A');
console.log(hr1500);
var hr1600 = moment(currentYear + '-' + currentMonth + '-' + ' 16:00').format('h:00 A');
console.log(hr1600);
var hr1700 = moment(currentYear + '-' + currentMonth + '-' + ' 17:00').format('h:00 A');
console.log(hr1700);





