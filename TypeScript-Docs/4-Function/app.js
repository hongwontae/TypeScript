"use strict";
function add(a, b, cb) {
    let sum = a + b;
    cb(sum);
}
;
function con(a) {
    console.log(a);
}
add(10, 10, con);
let a2 = (a) => {
    console.log(a);
};
function check(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
