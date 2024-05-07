// class Person {
//   public AI: string = "AI";

//   constructor(
//     private readonly age: number,
//     private team: string,
//     private name: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.team = team;
//   }

//   descirbe(this: Person) {
//     console.log(`${this.name} is Awsome!`);
//   }
// }

// const hwt = new Person(500, "Liver-Pool", "HWT");
// console.log(hwt);

// abstract class about {

//   abstract callMe(a: string, b: number): void;
// }

// class Person2 extends about{
//   constructor(public name: string, public age : number){
//     super();
//     this.name = name;
//     this.age = age;
//   }
//   callMe(a: string, b: number): void {
//    console.log(`${a}, ${b}`)
//   }
// }

// const kkk = new Person2('Name', 3000);
// kkk.callMe('www',2000);
// console.log(kkk)

interface Department{
  name : string;
  age : number;

  describe(a : string) : void;

}

class Account implements Department{

  constructor(public name : string, public age : number){
    this.name = name;
    this.age = age;
  }

  describe(a : string){
    console.log(a)
  }
  
}