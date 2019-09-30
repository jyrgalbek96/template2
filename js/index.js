$(document).ready( function () {
    window.idTimer = setInterval(timer, 1000); 
});

function timer () {
    let timerNumber = $('.timer__number');
    let sec, minute, hours, day;

    sec = +timerNumber.eq(3).text();
    minute = +timerNumber.eq(2).text();
    hours = +timerNumber.eq(1).text();
    day = +timerNumber.eq(0).text();

    sec--;

    if (sec === -1) {
        sec = 59;
        minute--;
    }

    if (minute === -1) {
        minute = 59;
        hours--;
    }

    if (hours === -1) {
        hours = 23;
        day--;
    }

    if (day === -1) {
        clearInterval(idTimer);
        sec = minute = hours = day = 0;
    }

    timerNumber.eq(3).text(sec);
    timerNumber.eq(2).text(minute);
    timerNumber.eq(1).text(hours);
    timerNumber.eq(0).text(day);
    // console.log(day + ":" + hours + ":" + minute + ":" + sec);
}

