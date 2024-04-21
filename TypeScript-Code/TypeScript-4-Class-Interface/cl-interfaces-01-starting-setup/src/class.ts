class Department {
  static fiscalYear = 2020;

  // private name: string;
  // private readonly id : string
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  describe(this: Department) {
    console.log(`Department ${this.id}  ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = '22' 불가능 => readonly이기 떄문에 바꿀 수 없다.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance : AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No repeat found!");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please Value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(this.instance){
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance
  }
  
  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  printResults() {
    console.log(this.reports);
  }
}

const accounting = AccountingDepartment.getInstance();
console.log(accounting)

const accounting2 = AccountingDepartment.getInstance();
console.log(accounting2)
