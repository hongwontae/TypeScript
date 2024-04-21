class rip {
  private reports: string[] = [];

  constructor(public name: string, public age: number) {}

  describe(this: rip) {
    console.log(`My Name is ${this.name} and  My age ${this.age}`);
  }

  addReports(text: string) {
    this.reports.push(text);
  }
}

class kkk extends rip{
    constructor(){
        super('HWT', 30);
    }
}

const RIP = new rip("HWT", 27);
console.log(RIP);
RIP.describe();

console.log('kkk start')
const KKK = new kkk();
console.log(KKK)
KKK.describe();

