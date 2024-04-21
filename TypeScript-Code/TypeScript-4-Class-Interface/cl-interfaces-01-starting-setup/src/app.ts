interface Greetable {
    name : string;

    greet(phrase : string) : void;
};

class Person implements Greetable{
    name: string;
    age = 30;
    constructor(n : string){
        this.name = n;
    }
    greet(phrase: string): void {
        console.log(phrase);
    }
    
}

let user1 : Greetable;

user1 = new Person('HWT');

user1.greet('HWT');
console.log(user1)