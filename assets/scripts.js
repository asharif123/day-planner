// array of time blocks from 9 am to 6 pm (ex: 9 - 9 am, 13 - 1 pm, 17 - 5pm, 18 - 6 pm)
var timeBlocks = [9,10,11,12,13,14,15,16,17,18]
var timings = [`<p class="timeBlocks-event-time mx-1">9:00</p>`, `<p class="timeBlocks-event-time">10:00</p>`, `<p class="timeBlocks-event-time">11:00</p>`, `<p class="timeBlocks-event-time">12:00</p>`, `<p class="timeBlocks-event-time mx-1">1:00</p>`, `<p class="timeBlocks-event-time mx-1">2:00</p>`, `<p class="timeBlocks-event-time mx-1">3:00</p>`,`<p class="timeBlocks-event-time mx-1">4:00</p>`, `<p class="timeBlocks-event-time mx-1">5:00</p>`, `<p class="timeBlocks-event-time mx-1">6:00</p>`];
// display current date and time
var currentDay = $("#currentDay");
// save button
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
    eventBlocks.append(`<div class="timeblock-information d-flex my-4">${timings[i]}<form><textarea data-index=${i} class="timeblock-event-information mx-3 ${pastPresentFuture(timeBlocks[i])}"></textarea><button type="button" class="btn btn-primary" onclick="saveEvent(event)" id="saveButton">Save</button></form></div>`);
}

// function that saves events stored by user
// user clicks on a event and has the option to add information
// once info is entered, user can save that event from add button
// user can edit that event
// when user clicks save button, find the save button's closest textbox information
// save in localstorage
var saveButton = $("#saveButton");
var allEventInfo = [];

function saveEvent(event) {
    event.preventDefault();
    var element = (event.target);
    if (element.matches("#saveButton")) {
        var eventText = $(element).siblings("textarea").val().trim();
        // allEventInfo.push(eventText);
        var eventStorage = {
            eventInformation: eventText
        }

        // sees every event stored in the list
        console.log(eventStorage.eventInformation);
        
        // id for each textbox
        console.log($(element).siblings("textarea").attr("data-index"));

        localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
        var lastPlayerInfo = JSON.parse(localStorage.getItem("eventStorage"));
        $(element).siblings("textarea").text(lastPlayerInfo.eventInformation);


    }
}



saveButton.on("click", saveEvent);


