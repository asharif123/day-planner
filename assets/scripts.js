// array of time blocks from 9 am to 6 pm (ex: 9 - 9 am, 13 - 1 pm, 17 - 5pm, 18 - 6 pm)
var timeBlocks = [9,10,11,12,13,14,15,16,17,18]
var timings = [`<p class="timeBlocks-event-time mx-1">9:00</p>`, `<p class="timeBlocks-event-time">10:00</p>`, `<p class="timeBlocks-event-time">11:00</p>`, `<p class="timeBlocks-event-time">12:00</p>`, `<p class="timeBlocks-event-time mx-1">1:00</p>`, `<p class="timeBlocks-event-time mx-1">2:00</p>`, `<p class="timeBlocks-event-time mx-1">3:00</p>`,`<p class="timeBlocks-event-time mx-1">4:00</p>`, `<p class="timeBlocks-event-time mx-1">5:00</p>`, `<p class="timeBlocks-event-time mx-1">6:00</p>`];
// display current date and time
var currentDay = $("#currentDay");


function displayTime() {
    currentDay.text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'));
}

setInterval(displayTime, 1000)

// using moment.js to determine if time in array is past, present or future
// function determines if timearray is in past, present, or future
function pastPresentFuture(hour) {
    return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}



// if timeblock is past, color code is grey, present = color code green, future = color code red
// add each timeblock to the timeblocks container
var eventBlocks = $("#timeblocks");
for (var i = 0; i < timeBlocks.length; i++) {
    eventBlocks.append(`<div class="timeblock-information d-flex my-4">${timings[i]}<form><textarea id=${i} data-index=${i} class="timeblock-event-information mx-3 ${pastPresentFuture(timeBlocks[i])}"></textarea><button type="button" class="btn btn-primary" id="saveButton" onclick="saveEvent(event)">Save</button></form></div>`);
}

// function that saves events stored by user
// retrieve information from local storage
// if you dont have any info event storage in local storage, defaults to square bracket
// this preserves all event info as array
var allEventInfo = JSON.parse(localStorage.getItem("eventStorage")) || [];

// loadEventData loads the text information in each text box with its unique corresponding id
function loadEventData() {
    for (var i = 0; i < allEventInfo.length; i++) {
        $("#" + allEventInfo[i].id).val(allEventInfo[i].eventInformation);
    }
}

loadEventData();

// save event called when user clicks on savebutton
function saveEvent(event) {
    event.preventDefault;
    var element = (event.target);
    if (element.matches("#saveButton")) {

        
        var eventText = $(element).siblings("textarea").val().trim();
        var eventStorage = {
            eventInformation: eventText,
            id: $(element).siblings("textarea").attr("id")
        }
        allEventInfo.push(eventStorage);
        
        // id for each textbox
        console.log($(element).siblings("textarea").attr("data-index"));

        localStorage.setItem("eventStorage", JSON.stringify(allEventInfo));
    }

};
  





