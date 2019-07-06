let a1 = prompt('enter x for point A');
let a2 = prompt('enter y for point A');
let b1 = prompt('enter x for point B');
let b2 = prompt('enter y for point B');
let c1 = prompt('enter x for point C');
let c2 = prompt('enter y for point C');

let dataChecking = (+a1 + +b1) / 2 === +c1 && (+a2 + +b2) / 2 === +c2;
console.log(dataChecking);