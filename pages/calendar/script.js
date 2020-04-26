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
}

// When the user clicks on div, open the popup
function event_popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}