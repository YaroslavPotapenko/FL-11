function isInteger(num) {
    return num === +num && num === (num|0);
}
isInteger();