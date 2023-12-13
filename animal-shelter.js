const animalData = require('./animal-data.json');



// Step 1 -> Setup Animal class with 4 constructors
class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    // Method -> A function that console logs a greeting of the name and species of the animal
    greet() {
        console.log(`Hi ${this.name} the ${this.species}`);
    }

    // Method -> A function that console logs a greeting of the name and species of the animal
    feed() {
        this.hunger -= 20
        console.log('Yum, I love food');
    }
}





// New class called 'Cat' which extends 'Animal' class
class Cat extends Animal {
    constructor(name, color, hunger = 50) {

        // Overriding the constructor with 'super'
        super(name, 'cat', color, hunger)

        // Add instance attribute called 'food' and set value to 'fish'.
        this.food = 'fish';
        }
        
        // Override Method -> A function that console logs a greeting of the name and species of the animal
        greet() {
            console.log(`Meow ${this.name} the ${this.species}`);
        }

        // Override Method -> A function that console logs a greeting of the name and species of the animal
        feed() {
            this.hunger -= 20
            console.log(`Yum, I love ${this.food}`);
    }
    }


// New class called 'Dog' which extends 'Animal' class
class Dog extends Animal {
    constructor(name, color, hunger = 50) {

        // Overriding the constructor with 'super'
        super(name, 'dog', color, hunger)

        // Add instance attribute called 'food' and set value to 'fish'.
        this.food = 'kibble';
        }
        
        // Override Method -> A function that console logs a greeting of the name and species of the animal
        greet() {
            console.log(`Woof ${this.name} the ${this.species}`);
        }

        // Override Method -> A function that console logs a greeting of the name and species of the animal
        feed() {
            this.hunger -= 20
            console.log(`Yum, I love ${this.food}`);
    }
    }


// Step 2 -> Setup the AnimalShelter class
class AnimalShelter {
    
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal)
        this.animals.splice(animalIndex, 1)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter (a => a.species === species)
    }
}


// Step 3 - Make Animal objects from animal data in json file

// Instance of AnimalShelter called shelter
const shelter = new AnimalShelter()

// Loop through 'animalData' 
for (const a of animalData) {
    
    // Create an animal instance with name, species, color & hunger. Set hunger to 50 is not provided. 
    
    let animal;
    
    const hunger = a.hunger ? a.hunger : 50;

    if (a.species === 'dog') {
      animal = new Dog(a.name, a.color, hunger)
    } else if (a.species === 'cat') {
      animal = new Cat(a.name, a.color, hunger)
    } else {
      animal = new Animal(a.name, a.species, a.color, hunger)
    }

    shelter.addAnimal(animal)

}

for (const animal of shelter.animals) {
    animal.greet();
    animal.feed();
  }