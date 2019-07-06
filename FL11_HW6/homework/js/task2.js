let a = prompt('enter A length');
let b = prompt('enter B length');
let c = prompt('enter C length');
let Equivalent = a === b && b === c && c === a;
let Isosceles = a === b || a === c || b === c;

if ((+a < +b + +c || +b < +c + +a || +c < +b + +a) && (+a > 0 && +b > 0 && +c > 0)) {
    if (Equivalent) {
        console.log('Eequivalent triangle');
    } else if (Isosceles) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}