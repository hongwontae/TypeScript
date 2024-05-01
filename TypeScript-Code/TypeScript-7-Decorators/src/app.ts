class Printer{
    message = 'This Works!'

    constructor(){
        
    }

    printMe(){
        console.log(this.message)
    }

}

const p = new Printer();
const pConsole = p.printMe.bind(p);

const button = document.querySelector('button')! as HTMLElement;
button.addEventListener('click', function(){
    pConsole();
})

function AutoBind(){
    
}
