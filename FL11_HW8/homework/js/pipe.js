function addOne(num) {
    return num + 1;
}
function pipe(num) {
    let args = [];
    for (let i = 1; i < arguments.length - 1; i++) {
        args[i] = arguments[i];
        num++;
    }
    return addOne(num);
}
pipe();