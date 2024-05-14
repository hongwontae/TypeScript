// 타입 추론
const a1 = 'AAA';
console.log(a1.length);

function add1(a : number, b : number){
    return a+b;
} // return 타입 추론 기능 활성화
console.log(add1(20,50));


// 구조적 타입 호환
interface SSS {
    name : string
};
let hero : SSS 

let tmp : {name : string, age : number} = {name : 'hwt', age : 3000};
hero = tmp;
console.log(hero);


/// type and/or 호환
type ali = {name : string} & { age : number};
type ali2 = {name : string} | { age : number};
let a : ali;
a={age :1000, name : 'www'};

let a2 : ali2;
a2={age :1000, name : 'www'};


