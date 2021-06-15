
function Square(length, colour='white'){
    this.length = length;
    this.colour = colour;
    this.area = ()=>{
        return Math.pow(this.length, 2);
    };
    this.perimeter = ()=>{
        return 4*this.length
    }
}

function Circle(radius=2, colour='white'){
    this.radius = radius;
    this.colour = colour; //attributes or fields
    this.area = ()=>{
        return Math.PI*Math.pow(this.radius, 2);
    }; // method
    this.circumference = ()=>{
        return 2*Math.PI*this.radius
    }
}

let redSquare = new Square(4, 'red');

console.log(`${redSquare.length}, ${redSquare.colour}, ${redSquare.area()}, ${redSquare.perimeter()}`)

let defaultCircle = new Circle();
console.log(`${defaultCircle.radius}, ${defaultCircle.colour}, ${defaultCircle.area()}, ${defaultCircle.circumference()} `)

let blueCircle = new Circle( 2 ,'blue')
console.log(`${blueCircle.radius}, ${blueCircle.colour}, ${blueCircle.area()}, ${blueCircle.circumference()} `)