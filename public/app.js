
showTime();
function showTime() {
    let time = new Date();
    let hours = addZero(time.getHours());
    let mins = addZero(time.getMinutes());
    let secs = addZero(time.getSeconds());

    let curr_time = `${hours}:${mins}:${secs}`;

    let output = document.querySelector('h3');
    output.innerText = curr_time;
}

function addZero(num) {
    return num < 10 ? `0${num}` : num;
}