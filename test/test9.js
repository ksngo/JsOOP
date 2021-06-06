// Factory pattern , object creation

function CarFactory() {}

// prototype is to allow info method be inherited in inheritance.
// It means here that CarFactory's prototype will have method info.
CarFactory.prototype.info = function(){
    console.log(`This car has ${this.doors} door and ${this.engine} liters capacity.`)
}


//without prototype, just static method for accessing CarFactory Object. make will not be inherited with new CarFactory
// It means here that, CarFactory's object will have method make.
CarFactory.make = function(type){

    var car;
    // e.g. making CarFactory["Compact"].prototype = new CarFactory
    // it means CarFactory["Compact"]'s prototype is referring to CarFactory()'s object. And CarFactory()'s prototype methods(info()) will be exposed to the CHILD
    // static methods(e.g. make, Compact, Sedan) is not exposed to CHILD
    CarFactory[type].prototype = new CarFactory() // info() method will be inherited to the Child

    car = new CarFactory[type];
    return car;
}

CarFactory.Compact = function(){
    this.doors = 4;
    this.engine = 2
}

CarFactory.Sedan = function(){
    this.doors = 2;
    this.engine = 2.5
}

CarFactory.SUV = function(){
    this.doors = 4
    this.engine = 3
}


var golf = CarFactory.make("Compact")
var lancer = CarFactory.make("Sedan")
var jeep = CarFactory.make("SUV")

console.log(golf.info())
console.log(lancer.info())
console.log(jeep.info())
