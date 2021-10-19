// array of time blocks from 9 am to 6 pm (ex: 9 - 9 am, 13 - 1 pm, 17 - 5pm, 18 - 6 pm)
var timeBlocks = [9,10,11,12,13,14,15,16,17,18]
var timings = [`<p class="timeBlocks-event-time mx-1">9 AM</p>`, `<p class="timeBlocks-event-time">10 AM<\p>`, `<p class="timeBlocks-event-time">11 AM</p>`, `<p class="timeBlocks-event-time">12 PM</p>`, `<p class="timeBlocks-event-time mx-1">1 PM</p>`, `<p class="timeBlocks-event-time mx-1">2 PM</p>`, `<p class="timeBlocks-event-time mx-1">3 PM</p>`,`<p class="timeBlocks-event-time mx-1">4 PM</p>`, `<p class="timeBlocks-event-time mx-1">5 PM</p>`, `<p class="timeBlocks-event-time mx-1">6 PM</p>`];
// display current date and time
var currentDay = $("#currentDay");

function displayTime() {
    currentDay.text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'));
}

setInterval(displayTime(), 1000)

// using moment.js to determine if time in array is past, present or future
// function determines if timearray is in past, present, or future
function pastPresentFuture(hour) {
    return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}



// if timeblock is past, color code is grey, present = color code green, future = color code red
// add each timeblock to the timeblocks container
var eventBlocks = $("#timeblocks");
for (var i = 0; i < timeBlocks.length; i++) {
    eventBlocks.append(`<div class="timeblock-information d-flex my-4">${timings[i]}<textarea class=" mx-3 ${pastPresentFuture(timeBlocks[i])}"></textarea></div>`);
}

// function that saves events stored by user
// user clicks on a event and has the option to add information
// once info is entered, user can save that event
// user can edit that event
function saveEvent(event) {

}