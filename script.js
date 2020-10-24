const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//run clock function
function runClock() {
    //get current date
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: "+hr+ " Minute: "+min+ " Second: " +sec);

    //set arms position
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    //rotate the clock arms
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

//set runClock function to run every 1000 milisecs usgin setInterval()
var interval = setInterval(runClock, 1000);