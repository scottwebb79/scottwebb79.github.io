// Function to get month for calendar

function myFunction() {
    var d = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const monthName = months[d.getMonth()];
    console.log(monthName);
    document.getElementById("calMonth").innerHTML = monthName;
};

// When the user clicks on div, open the popup
function event_popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
};


// When the user clicks on new event buton, open popup form
function openForm() {
  document.getElementById("event_formPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("event_formPopup").style.display = "none";
};

/* Drag and Drop for calendar Events */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data))
};