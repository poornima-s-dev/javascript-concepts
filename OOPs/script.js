//Using Object
let Student = {
    id: 101,
    name: "Poorni",
    age: 23,

    study: function (name) {
        console.log(name + " is Studying");
    },
    sleep: function (name) {
        console.log(`${name} Sleeps`); //Template Literals `${###}`
    }
};

console.log(Student);
console.log("Student name is: " + Student.name);
console.log("Student ID is: " + Student.id);
console.log("Student age is: "+ Student.age);
Student.study(Student.name);
Student.sleep(Student.name);

//Creating object using class
class Stud {
    id;
    name;
    age;
    
    study() {
        console.log(`${this.name} is studying.`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}
const s1 = new Stud();
s1.id = 201;
s1.name = "Jay";
s1.age = 23;
console.log(`The name is: ${s1.name}`);
console.log(`The id is: ${s1.id}`);
console.log(`The age is: ${s1.age}`);
s1.study();
s1.sleep();

const s2 = new Stud();
s2.id = 202;
s2.name = 'Anu';
s2.age = 29;
console.log(s2.id);
console.log(s2.name);
console.log(s2.age);
s2.study(s2.name);
s2.sleep(s2.name);

const s3 = s2;
console.log(s3);
