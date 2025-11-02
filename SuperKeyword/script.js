class Animal{
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }

    showDetails() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak();
dog1.showDetails();