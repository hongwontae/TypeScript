// function Autobind(_1 : any, _2 : string, des : PropertyDescriptor){
//     const originalMethod = des.value;
//     const adjDescriptor : PropertyDescriptor = {
//         configurable : true,
//         enumerable : false,
//         get(){
//             const boundFn = originalMethod.bind(this);
//             return boundFn
//         },
//     }
//     return adjDescriptor;
// }

// class Printer{
//     message = 'Hello World';

//     @Autobind
//     showMessage(){
//         console.log(this.message);
//     }
// }

// const p = new Printer();

// const button = document.querySelector('button')!;
// button.addEventListener('click',p.showMessage);

// class Course{
//     title : string;
//     price : number;

//     constructor(t : string, p : number){
//         this.title = t;
//         this.price = p;
//     }
// }

// const form = document.querySelector('form')!;
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const textEl = document.getElementById('t1') as HTMLInputElement;
//     const numEl = document.getElementById('n1') as HTMLInputElement;

//     const title = textEl.value;
//     const price = +numEl.value;

//     const course = new Course(title, price);
//     console.log(course)
// })

// function Deco(logging : string){
//     console.log('Deco1 outerFunction')
//     return function(target : Function){
//         console.log(logging);
//         console.log(target)
//     }
// }

// function Deco2(logging : string){
//     console.log('Deco2 outerFunction')
//     return function(target : any){
//         console.log('First right?')
//         console.log(target)
//         console.log(logging);
//     }
// }

// @Deco('Deco1')
// @Deco2('Deco2')
// class PerfectMan{

//     name = "HWT";

//     constructor(){
//         console.log('Hello-World')
//     }

// }

// const perfectMan = new PerfectMan();

// class ProductLine{

//     @Logged
//     'All-Aged' = 12;

//     constructor(public productLintName : string){
//         this.productLintName = productLintName;
//     };

// }

// function Logged(target : any, propertyName : string | symbol){
//     console.log(target);
//     console.log(propertyName);
//     console.log(target === ProductLine.prototype)
// }

// const line = new ProductLine('kkk');
// console.log(line);

// class ProductLine {
//   "line-1-Name" = "Star-in-Line";

//   constructor() {
//     console.log("Hello World!!");
//   }

//   meme() {
//     console.log("MEme!");
//   }
// }

// function h1Change(template: string, hookId: string) {
//   return function <
//     T extends {
//       new (...args: any): { name: string; age: number; title: string };
//     }
//   >(originalConstructor: T) {
//     return class extends originalConstructor {
//       constructor(..._: any) {
//         super('title');
//         console.log(this.title)
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// @h1Change("<h1>Hello World</h1>", "app")
// class Person3 {
//   name = "Max";
//   age = 10;

//   constructor(public title: string) {
//     console.log("Creating person obj");
//     this.title = title;
//   }
// }

// const person3 = new Person3("Title");

function DecoratorReturn<T extends {new(...args: any) : {name : string}}>(OriginalFunction: T){
  return class extends OriginalFunction{
    constructor(..._ : any){
      // 가로채서 사용하기 떄문에 new(...args)가 해당 constructor에 들어와야한다.
      super('Hello!');
    }
  }
}

@DecoratorReturn
class Host{
  constructor(public name : string){
    this.name =name;
  }
}

const host = new Host('Stop');
console.log(host.name);

