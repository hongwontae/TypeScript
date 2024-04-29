function Autobind(_1 : any, _2 : string, des : PropertyDescriptor){
    const originalMethod = des.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable : true,
        enumerable : false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn
        },
    }
    return adjDescriptor;
}

class Printer{
    message = 'Hello World';

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click',p.showMessage);


class Course{
    title : string;
    price : number;

    constructor(t : string, p : number){
        this.title = t;
        this.price = p;
    }
}

const form = document.querySelector('form')!;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const textEl = document.getElementById('t1') as HTMLInputElement;
    const numEl = document.getElementById('n1') as HTMLInputElement;

    const title = textEl.value;
    const price = +numEl.value;

    const course = new Course(title, price);
    console.log(course)
})