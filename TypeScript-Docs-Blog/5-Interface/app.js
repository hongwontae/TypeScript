"use strict";
;
function FTK(a) {
    let literal = `${a.name}은 ${a.age}`;
    a.callYou(literal);
}
function FFTK(a) {
    let literal = `${a.name}은 ${a.age}`;
    a.callHer(literal);
}
FTK({ name: 'HWT', age: 100, callYou: (a) => { console.log(a); } });
FFTK({ name: '안지연', age: 10000, callHer: (a) => { console.log(a); } });
;
let func2 = function (a) {
    console.log(a);
    console.log(func2.player);
};
func2(100);
;
let koala3121 = {
    'usre': 'HWT'
};
;
let koala31212 = ['str', 'str', 'str', 'str', 'str', 'str',];
