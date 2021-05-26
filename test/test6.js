//** Constructor */

var Person = function(name){
    this.name = name
}

var albert = new Person("Einstein")

console.log(albert.name) //** Einstein */

Person.prototype.greet = function(){
    return this.name;
}

var michael = new Person("Jordan")

console.log(michael.name) //** Jordan */
console.log(michael.greet()) //** Jordan */