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
console.log(a5(50));

class Person<T, V>{
    public name : T;
    public age : V;

    constructor(n : T, a :V){
        this.name = n;
        this.age = a;
    }
    add! : (a :T, b :V)=> T
};




