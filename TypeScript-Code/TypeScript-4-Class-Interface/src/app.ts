// type AddFn = (a : number, b : number)=> number;

// let add : AddFn;

// add = (n1 : number, n2 : number)=>{
//     return n1 + n2;
// }

// interface AddFn{
//     (a : number, b : number) : number
// }

// let add : AddFn;

// add : (n1 : number, n2 : number)=>{
//     return n1+ n2;
// }

interface Named extends Greetable {
  readonly name?: string;
  output?: string;
}

interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) { // 기본값, ?
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    console.log(phrase);
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("HWT");
console.log(user1);
