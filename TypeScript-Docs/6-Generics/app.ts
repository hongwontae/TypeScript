function add<T>(a : T) : T{
    return a;
};

let savage = <number>add(10);
console.log(savage);

// 함수 표현식 + 제네릭
let a3 : <T>(a : T) => T = function<T>(a : T) : T{
    return a
};

// 함수 표현식 + 호출 시그니처 + 제네릭
let a4 : {<T>(a : T) : T} = function <T>(a: T) : T{
    return a;
}

// 함수 표현식 + 함수 타입 인터페이스 + 제네릭
interface Gener{
    <T>(a :T) : T;

    <S, T>(a : T, b : S) : S | T;
};
let a5 : Gener = function<T>(a:T) : T{
    return a;
}


// 클래스 + 제네릭
class Person2<T,U>{
    name! : T;
    age! : U;

    constructor(n : T, a : U){
        this.name = n;
        this.age = a;
    };

    call(){
        console.log(`My Name is ${this.name} and my age ${this.age}`);
    };

};

const person = new Person2<string, number>('String', 3000);
person.call();


// 제약사항 + 인터페이스
interface LengthFull{
    length : number
};

function checkLengthProperty<T extends LengthFull>(a : T){
    console.log(a.length);
    return a;
};

const startingMember = checkLengthProperty({length : 10});
console.log(startingMember);


// 제약사항 + keyof
let n1 = {
    ak : 'Ak47',
    poison : 'retire',
    ksep : 'backSen ffnam'
};

function checkObjKey<T, U extends keyof T>(a : T, b : U){
    console.log(a[b]);
}

checkObjKey(n1, 'ak');


// 제약사항 + new
function checkB<T>(a : {new () : T}) : T{
    return new a();
}

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;










