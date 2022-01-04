var field = document.getElementById('field');
var dates;




window.addEventListener('submit',  (e) => {
    
        var value = Date.parse(field.value +'T00:00:00');

    let goaldate = new Date (value);
    
    var date = new Date ();

    const difference = goaldate - date;

    
    let day = Math.round(difference/1000/60/60/24);
    let hour= Math.round(difference/1000/60/60) % 24;
    let minutes = Math.round(difference/1000/60) % 60;
    let seconds = Math.round(difference/1000) % 60;

  
    localStorage.setItem('day', day);
    localStorage.setItem('hour', hour);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);


});


    
var days = localStorage.getItem('day');
var hours = localStorage.getItem('hour');
var minutes = localStorage.getItem('minutes');
var seconds = localStorage.getItem('seconds');

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;




