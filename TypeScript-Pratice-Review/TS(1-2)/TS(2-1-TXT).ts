let a1 : string;
a1 = 'String'

let a2 : number;

let a2Up : bigint;

let a3 : boolean;

let a4 : undefined;
a4 = undefined;

let a5 : null;
a5 = null;

let a6 : symbol;
a6 = Symbol('AK47');

let a7 : object;
a7 = {

}

let a8 = function(n1 : number, n2 : number){
    return n1*n2
};

let a9 = a8(10,10);
console.log(a9);

let a10 : {
    name : string,
    age : number,
    kiss : string,
    login : boolean
} = {
    name : 'HWT',
    age : 1000,
    kiss : 'DO it',
    login : true
}
console.log(a10);


let a11 : string [];
a11 = ['HWT', 'NALDO', 'KISS OR DIE'];
const a12 = a11.map((ele, idx, arr)=>{
    return ele
});
console.log(a12);


// Tuple Type (고정 길이, 고정 타입의 배열을 의미)
let a13 : [number, string, number];
a13 = [1,'String',3];
console.log(a13);


// enum 열거
// enum 내에서 값을 할당하지 않으면 0부터 시작하는 숫자로 값이 부여된다.
// 값을 임의로 부여하면 그 값부터 마지막까지 값을 따로 부여해야 한다.
// enumName.key로 접근한다.
enum enumName{
    C1 , C2='sss', C3 = 'Cool'
}
let a14 = {
    name : enumName.C1,
    age : enumName.C2
}
console.log(a14);


// any => 아무값이나 허용한다.
let a15 : any [];
a15 = [1,2,3,'222','22', true]
console.log(a15)

