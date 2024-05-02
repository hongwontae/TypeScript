// class Printer{
//     message = "This Works!"

//     @AutoBind
//     showMessage(){
//         console.log(this.message);
//     }
// }

// const p = new Printer();
// const button = document.querySelector('button')! as HTMLElement;
// button.addEventListener('click',p.showMessage);

// function AutoBind(_1 : any, _2 : string, desc : PropertyDescriptor){
//     const originalMethod = desc.value;
//     const adjDescriptor : PropertyDescriptor = {
//         configurable : true,
//         enumerable : false,
//         get(){
//             const boundFn = originalMethod.bind(this);
//             // 해당 게터 메서드는 언제나 자신이 속한 실제 객체에 의해 실행된다.
//             return boundFn;
//         }
//     }
//     return adjDescriptor;
// }


class Course {
    @DeDeDecora
    title = "TiTiTiTi"

    constructor(){
        console.log(this.title);
    }
}

function DeDeDecora(target: any, keyName: string){
    let cool : string = keyName;
    console.log(cool)
    console.dir(target)
};

const course = new Course();
console.log(course)