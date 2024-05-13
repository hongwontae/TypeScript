// // 1
// class Person{

//     name : string

//     constructor(name : string){
//         this.name = name;
//     }
// }


class Person{
    constructor(public name : string, public age : number){
        this.name = name;
        this.age = age;
    };

    get getName() : string{
        return this.name
    };

    set setName(value : string){
        if(value.length >= 10){
            this.name = value;
        }
        return;
    };
}

const person = new Person('HWT', 3000);
console.log(person.getName);
person.setName = 'dddddddddddddd';
person.setName = '123456789';
console.log(person);