"use strict";
// // 1
// class Person{
//     name : string
//     constructor(name : string){
//         this.name = name;
//     }
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    ;
    get getName() {
        return this.name;
    }
    ;
    set setName(value) {
        if (value.length >= 10) {
            this.name = value;
        }
        return;
    }
    ;
}
const person = new Person('HWT', 3000);
console.log(person.getName);
person.setName = 'dddddddddddddd';
person.setName = '123456789';
console.log(person);
