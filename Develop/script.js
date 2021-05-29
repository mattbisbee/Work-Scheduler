$(document).ready(function() {

  //Variables for time
  var currentDate = moment();

  var displayDate = document.getElementById('currentDay');
  displayDate.innerHTML = currentDate.format('dddd, MMMM Do YYYY');

  var currentMonth = currentDate.format('M');
  console.log(currentMonth);

  var currentYear = currentDate.format('YYYY');
  console.log(currentYear);

  var currentTime = currentDate.format('h:mm A')
  console.log('current time', currentTime);



  //used moment js to set the hour for the timeblocks
  var hr900 = moment().hour(9).format('h:00 A');
  var hr1000 = moment().hour(10).format('h:00 A');
  var hr1100 = moment().hour(11).format('h:00 A');
  var hr1200 = moment().hour(12).format('h:00 A');
  var hr1300 = moment().hour(13).format('h:00 A');
  var hr1400 = moment().hour(14).format('h:00 A');
  var hr1500 = moment().hour(15).format('h:00 A');
  var hr1600 = moment().hour(16).format('h:00 A');
  var hr1700 = moment().hour(17).format('h:00 A');


  // add the moment js times (only the hour) to each row 
  $('#0900').append('<p>' + hr900 + '</p>');
  $('#1000').append('<p>' + hr1000 + '</p>');
  $('#1100').append('<p>' + hr1100 + '</p>');
  $('#1200').append('<p>' + hr1200 + '</p>');
  $('#1300').append('<p>' + hr1300 + '</p>');
  $('#1400').append('<p>' + hr1400 + '</p>');
  $('#1500').append('<p>' + hr1500 + '</p>');
  $('#1600').append('<p>' + hr1600 + '</p>');
  $('#1700').append('<p>' + hr1700 + '</p>');

  //jquery on click event to save info to local storage
  $('.saveBtn').on('click', function (event) {
    //event.preventDefault();

    var textArea = $(this).parent().find('textarea').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, textArea);
  });

  //display saved info upon reloading
  $('.txtAr0900').val(localStorage.getItem('box0900'));
  $('.txtAr1000').val(localStorage.getItem('box1000'));
  $('.txtAr1100').val(localStorage.getItem('box1100'));
  $('.txtAr1200').val(localStorage.getItem('box1200'));
  $('.txtAr1300').val(localStorage.getItem('box1300'));
  $('.txtAr1400').val(localStorage.getItem('box1400'));
  $('.txtAr1500').val(localStorage.getItem('box1500'));
  $('.txtAr1600').val(localStorage.getItem('box1600'));
  $('.txtAr1700').val(localStorage.getItem('box1700'));

  //clear information from Local Storage(start new day)
  $('.clearBtn').on('click', function (event) {
    event.preventDefault();

    if (confirm ('Are you sure you want to clear the entire form? This cannot be undone!') === true) {
      $('#box0900 .txtAr0900').val('');
      $('#box1000 .txtAr1000').val('');
      $('#box1100 .txtAr1100').val('');
      $('#box1200 .txtAr1200').val('');
      $('#box1300 .txtAr1300').val('');
      $('#box1400 .txtAr1400').val('');
      $('#box1500 .txtAr1500').val('');
      $('#box1600 .txtAr1600').val('');
      $('#box1700 .txtAr1700').val('');
      localStorage.clear();
    } else {
      return;
    }
  });

  //set interval function to display color in textarea depending on the time of day

  var currentHour = moment().hours();
  console.log('current hour', currentHour);


  let hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];

  var timeBlock = $("textarea");

  for (i = 0; i < timeBlock.length; i++) {
    changeColor(i);
  }

  function changeColor(currentIndex) {
    if (currentHour == hours[currentIndex]) {
      timeBlock[currentIndex].classList.add("present");
    } else if (currentHour < hours[currentIndex]) {
      timeBlock[currentIndex].classList.add("future");
    } else {
      timeBlock[currentIndex].classList.add("past");
    };
 
    console.log('current hour vs current time', testing == hours[i]);
    console.log(hours[i]);
  }
});


