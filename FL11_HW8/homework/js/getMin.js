function getMin() {
    let args = Array.prototype.slice.call(arguments, getMin.length);
    let min = Math.min(... args);
    return Math.round(min);
}
getMin();