function Log(target : any, propertyName : string){
    console.log('Property decorator!')
    console.log(target, propertyName);
}

function Log2(target : any, name : string, des : PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(des)
}

function Log3(target : any, name : string, des : PropertyDescriptor){
    console.log('Method!');
    console.log(target);
    console.log(name);
    console.log(des)
}

function Log4(target : any, methodName : string | symbol, position : number){
    console.log('Parameter!');
    console.log(target)
    console.log(methodName)
    console.log(position)
}

class Product{
    // @Log
    title : string;
    private _price :number;

    // @Log2
    public set price(v : number) {
        if(v > 0){
            this._price = v;
        }else{
            throw new Error('Fail');
        }
    }
    

    constructor(t : string,p : number){
        this.title = t;
        this._price = p;
    };

    // @Log3
    getPriceWithTax(@Log4 tax : number){
        return this._price * (1 + tax);
    }
}

const product = new Product('Hello-World', 1000);