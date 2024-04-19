class Department {
// private name: string;
// private readonly id : string 
  private employees : string[] = [];


  constructor(private readonly id: string, public name : string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this : Department){
    console.log(`Department ${this.id}  ${this.name}`)
  }

  addEmployee(employee : string){
    // this.id = '22' 불가능 => readonly이기 떄문에 바꿀 수 없다.
    this.employees.push(employee);
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees)
  }

}

class ITDepartment extends Department{


  constructor(id : string, public admins : string[]){
    super(id, 'IT');
    this.admins = admins
  }
}

class AccountingDepartment extends Department{
  constructor(id:string, private reports : string []){
    super(id, 'Accounting');
  }
  addReports(text : string){
    this.reports.push(text)
  }


  printResults(){
    console.log(this.reports);
  }
}

const accounting = new Department('D1',"Accounting");

accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee('Lucas');
accounting.printEmployeeInformation();
1
const IT= new ITDepartment('d1', ['Max']);
console.dir(IT)

const AccountTeam = new AccountingDepartment('A1',[]);
AccountTeam.printResults();
AccountTeam.addReports('Wrong!');
AccountTeam.printResults();
console.log(AccountTeam)
