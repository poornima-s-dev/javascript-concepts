class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
        // Inherited Method
        work(){
            console.log(`${this.name} working.`);
        }

        project(){
            console.log(`${this.name} working on a project`)
        }
    }

class Developer extends Employee{

    // Overridden Method
    project() {
        console.log(`${this.name} coding as Developer!`);
    }

    // Specialized Method
    info() {
        console.log(`Developer name: ${this.name}
            Developer ID: ${this.id}
            Developer Salary: ${this.salary}`);
    }

}

class Tester extends Employee{

    // Overridden Method
    project() {
        console.log(`${this.name} debugging as Tester!`);
    }

    // Specialized Method
    info() {
            console.log(`Tester name: ${this.name}
            Tester ID: ${this.id}
            Tester Salary: ${this.salary}`);
    }
}

const developer = new Developer(101, "Ram", 65000);
developer.work();
developer.project();
developer.info();

const tester = new Tester(201, "Sita", 55000);
tester.work();
tester.project();
tester.info();