// use modules from test16.js

const {areaCircle, circumferenceCircle, Rectangle, myConfig } = require('./test16')

console.log(`Area of circle with radius 2 is ${areaCircle(2)}`)
console.log(`Circumference of circle with radius 2 is ${circumferenceCircle(2)}`)

myRectangle = new Rectangle(1);
console.log(`my Rectangle with length 8 has area of ${myRectangle.area(8)}`)
console.log(`my Rectangle with length 8 has perimeter of ${myRectangle.perimeter(8)}`)

herRectangle = new Rectangle(5);
console.log(`her Rectangle with length 8 has area of ${herRectangle.area(8)}`)
console.log(`her Rectangle with length 8 has perimeter of ${herRectangle.perimeter(8)}`)

console.log(`myConfig name is ${myConfig.name}`)
console.log(`myConfig secret is ${myConfig.secret}`)

// const {areaSquare} = require('./test16')
// console.log(`Area of square with side 2 is ${areaSquare(2)}`)
