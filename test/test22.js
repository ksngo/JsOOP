//empty constructor function
function Animal() { }

//prototype declares three properties
Animal.prototype.numberOfLegs = 0;
Animal.prototype.pairsOfEyes = 0;
Animal.prototype.age = 0;

//prototype defines two methods
Animal.prototype.printLegsAndEyes = function () {
    console.log(`I have ${this.numberOfLegs} legs and ${this.pairsOfEyes * 2} eyes.`)
}

Animal.prototype.printAge = function () {
    console.log(`I am ${this.age} years old.`)
}

//Javascript dont allow overload operators; hence creating our own methods
Animal.prototype.lessThan = function (other) {
    return this.age < other.age;
}
Animal.prototype.lessOrEqualThan = function (other) {
    return this.age <= other.age;
}
Animal.prototype.greaterThan = function (other) {
    return this.age > other.age;
}
Animal.prototype.greaterOrEqualThan = function (other) {
    return this.age >= other.age;
}


function Mammal() { }
Mammal.prototype = new Animal(); //for inheritance referring prototype to super
Mammal.prototype.constructor = Mammal; //to define Mammal as a constructor by prototype.constructor
Mammal.prototype.isPregnant = false;
Mammal.prototype.pairsOfEyes = 1; //will override the property declared in Animal

function DomesticMammal() { }
DomesticMammal.prototype = new Mammal();
DomesticMammal.prototype.constructor = DomesticMammal;
DomesticMammal.prototype.name = "";
DomesticMammal.prototype.favouriteToy = "";
DomesticMammal.prototype.talk = function () {
    console.log(`${this.name} : talks`)
}

function Dog() { }
Dog.prototype = new DomesticMammal();
Dog.prototype.constructor = Dog;
Dog.prototype.numberOfLegs = 4;  //Overide Animal inherited property
Dog.prototype.breed = "Just a dog";
Dog.prototype.breedFamily = "Dog";
Dog.prototype.printBreed = function () {
    console.log(this.breed)
}
Dog.prototype.printBreedFamily = function () {
    console.log(this.breedFamily)
}
Dog.prototype.bark = function (times, otherDomesticMammal, isAngry) {
    var message = this.name;
    if (otherDomesticMammal) {
        message += ` to ${otherDomesticMammal.name} :`
    } else {
        message += " : "
    }
    if (isAngry) {
        message += "Grr ";
    }
    if (!times) {
        times = 1
    }
    message += new Array(times + 1).join("Woof ");
    console.log(message);
}
Dog.prototype.talk = function () {
    this.bark(1)
} // overide inherited method from DomesticMammal


function TerrierDog() { }
TerrierDog.prototype = new Dog();
TerrierDog.prototype.constructor = TerrierDog;
TerrierDog.prototype.breed = "Terrier Dog"; //overide inherited property from Dog
TerrierDog.prototype.breedFamily = "Terrier"; //overide inherited property from Dog


function SmoothFoxTerrier() { }
SmoothFoxTerrier.prototype = new TerrierDog();
SmoothFoxTerrier.prototype.constructor = SmoothFoxTerrier;
SmoothFoxTerrier.prototype.breed = "Smooth Fox Terrier"; //overide inherited property from Dog
SmoothFoxTerrier.create = function (name, age, favouriteToy, isPregnant) {
    var dog = new SmoothFoxTerrier();
    dog.name = name;
    dog.age = age;
    dog.favouriteToy = favouriteToy;
    dog.isPregnant = isPregnant;
    return dog;
}


var tom = SmoothFoxTerrier.create("Tom", 5, "Sneakers");
tom.printBreed();
tom.printBreedFamily();
console.log( tom instanceof Animal);

var pluto = SmoothFoxTerrier.create("Pluto", 6, "Tennis Ball");

console.log(tom.greaterThan(pluto))
tom.bark();
tom.bark(2);
tom.bark(2, pluto);
tom.bark(3, pluto, true);










