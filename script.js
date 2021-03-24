var dayse1 = document.getElementById("days");
var hourse1 = document.getElementById("hours");
var minse1 = document.getElementById("mins");
var secondse1 = document.getElementById("secs");

const newYear = "1 jan 2022";

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const milliseconds = newYearDate-currentDate;
    const secondUse = milliseconds/1000;
    const days = Math.floor(secondUse/(3600*24));
    const hours = Math.floor(secondUse/3600)%24;
    const mins = Math.floor(secondUse/60)%60;
    const seconds = Math.floor(milliseconds/1000)%60;

    dayse1.innerHTML= days;
    hourse1.innerHTML= correct(hours);
    minse1.innerHTML= correct(mins);
    secondse1.innerHTML=  correct(seconds);
}

function correct(time) {
    return time < 10? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);



