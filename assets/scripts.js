// array of time blocks from 9 am to 6 pm (ex: 9 - 9 am, 13 - 1 pm, 17 - 5pm, 18 - 6 pm)
var timeBlocks = [9,10,11,12,13,14,15,16,17,18]
var timings = [`<p>9 AM</p>`, `<p>10 AM<\p>`, `<p>11 AM</p>`, `<p>12 PM</p>`, `<p>1 PM</p>`, `<p>2 PM</p>`, `<p>3 PM</p>`,`<p>4 PM</p>`, `<p>4 PM</p>`, `<p>5 PM</p>`];
// display current date and time
var currentDay = $("#currentDay");
currentDay.text(moment().format("MMM Do YY, h:mm:ss:a"));

// using moment.js to determine if time in array is past, present or future
// function determines if timearray is in past, present, or future
function pastPresentFuture(hour) {
    return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}



// if timeblock is past, color code is grey, present = color code green, future = color code red
// add each timeblock to the timeblocks container
var eventBlocks = $("#timeblocks");
for (var i = 0; i < timeBlocks.length; i++) {
    console.log(i);
    eventBlocks.append(` ${timings[i]}<textarea class="${pastPresentFuture(timeBlocks[i])}"></textarea>`);
}

// function that saves events stored by user
// user clicks on a event and has the option to add information
// once info is entered, user can save that event
// user can edit that event
function saveEvent(event) {

}