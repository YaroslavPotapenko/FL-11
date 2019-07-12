function formatTime(time) {
    let minutes = ~~time % 60;
    let hours = ~~(time / 60) % 24;
    let days = ~~(time / 1440) % 24;
    let result;
    result = `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
    return result;
}
formatTime();