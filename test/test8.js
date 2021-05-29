//** underscore */
var _ = require('underscore')

const simpleArray = [1,2,3,4,5]


// normal array method forEach()
simpleArray.forEach((number)=>{console.log(number)})

// fundamental for loop
for(let i=0; i<simpleArray.length ; i++){
    console.log(simpleArray[i])
}

// using underscore

_.each(simpleArray, (n)=>{console.log(n)})