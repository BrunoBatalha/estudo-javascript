let date = new Date();
date.setMilliseconds(359999)
//console.log(`${359999%60}:${date.getMinutes()}:${date.getSeconds()}`);

function formatSecondsInHoursMinutesAndSeconds(seconds) {
    if (seconds < 60) return `00:00:${seconds > 9 ? seconds : "0" + seconds}`;
    let hour = parseInt(seconds / 3600) == 0 ? '0' : parseInt(seconds / 3600);
    let minutes = parseInt(seconds / 60) == 0 ? '00' : parseInt(seconds / 60);
    seconds = seconds % 60 == 0 ? '00' : seconds % 60;
    return `${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}:${seconds}`
}

console.log(formatSecondsInHoursMinutesAndSeconds(45296));