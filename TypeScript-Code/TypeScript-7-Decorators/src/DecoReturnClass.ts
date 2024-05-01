// function h1Change(template : string, hookId : string){
//     return function<T extends {new(...args : any[]) : {name : string}}>(originalConstructor : T){
//         return class extends originalConstructor{   
//             constructor(..._ : any[]){
//                 super();
//                 const hookEl = document.getElementById(hookId);
//                 if(hookEl){
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
// }

// @h1Change('<h1>Hello World</h1>','app')
// class Person2{
//     name = 'Max';

//     constructor(){
//         console.log('Creating person obj');
//     }

// }

// // const pers2 = new Person2();
// // console.log(pers2);





