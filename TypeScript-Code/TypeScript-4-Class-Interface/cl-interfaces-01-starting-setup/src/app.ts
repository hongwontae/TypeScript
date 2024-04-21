interface Person {
    name : string;
    age : number;

    greet(phrase : string) : void;
};

let user1 : Person;
user1 = {
    name : 'hwt',
    age : 30,
    greet(phrase : string ){
        console.log(`${phrase} 입니다.`)
    }
};

user1.greet('HWT');