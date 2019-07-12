function reverseNumber(num) {
    let reverseNumber = 0;
    let isNegative = 0 > num;
    isNegative && (num *= -1);
    while (num > 0) {
        reverseNumber *= 10;
        reverseNumber += num % 10;
        num = parseInt(num / 10);
    }
    return isNegative ? -reverseNumber : reverseNumber;
}
reverseNumber();