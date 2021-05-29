# Work Scheduler

## Work day scheduler using Jquery and Moment JS

### **Criteria**
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

### **General Info:**
Using Moment JS, the first thing I did was to display the current day in the header below the title. I knew that the rest of my moment objects would be based on that so I wanted to get that out of the way.
I then wrote variables for the current day, month, and year which I used later to create moment objects and compare the time of day to the time listed in each block. 
I hardcoded the divs for each time block and assigned id's on their different sections. With the color change, a class is added depending on the time. With the help of my tutor, I created an array of hours that gets compared to the current hour variable depending on whether its equal to, greater than, or less than. The set interval function then checks it hourly to update the text area color depending on the time.

### **Final Notes**
This assignement was very challenging but, as I have discovered in previous assignments, the simpler the better. It's easy to get lost and I went over my code again and again ensuring I wasn't over complicating it. Getting the color in the background to change according to the time of day was tricky as well but my tutor Trever helped me through it. 


### **Location:**
Website can be found at : https://mattbisbee.github.io/Work-Scheduler/

GitHub: https://github.com/mattbisbee/Work-Scheduler.git

## **Images:**
![Screenshot](capture.jpg)