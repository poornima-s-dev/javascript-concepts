class Employee{
    constructor(name, age, dept)
    {
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    work(){
        console.log(`${this.name} is working as ${this.dept}`);
    }
}

const e1 = new Employee("Poornima", 23, "Software Engineer");
console.log(e1.name);
console.log(e1.age);
console.log(e1.dept);
e1.work();

const e2 = new Employee("Jay", 23, "AI Engineer");
console.log(e2.name);
console.log(e2.age);
console.log(e2.dept);
e2.work();