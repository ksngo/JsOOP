//creating my modules

function areaCircle(r){
    return 3.14*r*r ;
}

function circumferenceCircle(r){
    return 2*3.14*r ;
}



function Rectangle(length){
    this.length = length 
} //constructor function

Rectangle.prototype.area = function(breadth){
    return this.length*breadth;
}

Rectangle.prototype.perimeter = function(breadth){
    return 2*(this.length + breadth);
}

const myConfig = {
    name : 'ks',
    secret : 'password'
}


module.exports = {
    areaCircle,
    circumferenceCircle,
    Rectangle,
    myConfig
}

// exports.areaSquare = function(side){
//     return side*side;
// }


