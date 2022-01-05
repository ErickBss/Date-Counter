var field = document.getElementById('field');
var dates;




window.addEventListener('submit',  (e) => {
    
    var value = Date.parse(field.value +'T00:00:00');
    localStorage.setItem('updatedDate',value);
    
});

function update (){
    let value = parseInt( localStorage.getItem('updatedDate'));
    let date = new Date ();
    let goaldate = new Date (value);

    var difference = goaldate - date;


    let day = Math.floor(difference/1000/60/60/24);
    let hour= Math.floor(difference/1000/60/60) % 24;
    let minutes = Math.floor(difference/1000/60) % 60;
    let seconds = Math.floor(difference/1000) % 60;

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}
setInterval(update, 1000);
window.addEventListener('load', update);





