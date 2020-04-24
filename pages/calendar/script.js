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


/*
function myFunction() {
    var d = new Date();
    var n = d.getMonth();
    document.getElementById("demo").innerHTML = n;
  }
*/