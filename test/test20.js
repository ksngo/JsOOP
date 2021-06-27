function Cat(name, sex){ //constructor function
    //Constructor for instance
    this.name = name; // using this as constructor for instance
    this.sex = sex;
    
    //PRIVATE
    var _namePrivate = name;
    var _sexPrivate = sex;
    var _hobbyMakePublic = 'sleeping'
    var _colorMakePublic ='white'
    function detailsPrivate(){ // this is a private function
        return `Cat name is ${_namePrivate} and is a ${_sexPrivate}.`
    }
    console.log(detailsPrivate()) // only can use private function inside the Cat function.

    // TO MAKE PRIVATE AVAILABLE READ PUBLICLY , basically it makes _hobbyMakePublic available in this
    Object.defineProperty(this, '_hobbyMakePublic', {get : function(){ return _hobbyMakePublic}}); 
    // TO MAKE PRIVATE AVAILBLE READ AND SET PUBLICLY
    Object.defineProperty(this, '_colorMakePublic', {get : ()=> _colorMakePublic , set: (value)=>{ _colorMakePublic = value}});

    //Constructor for instance continued..
    this.detailsPublic = function(){ // this is a public function
        return `Cat name is ${this.name} and is a ${this.sex} and stays in ${this.constructor.location}.` //accessing the instance's constructor (i.e. Cat) with this.constructor
    }

    this.modifyName =function(toAdd){ 
        this.name = 'Mr ' + this.name + ' ' + toAdd;
    }
}

Cat.location = 'singapore' // this is a public attribute for the class ; it's a method for the constructor
Cat.default = function(name, sex){ // this is a public method that can set a class to default values
    return new Cat('nameless', 'sexless')
}

//This will not work. Cat.immutableModifyName instead of Cat.prototype.immutableModifyName
// 'this' will be referring to the Cat constructor instead of Cat instance
Cat.prototype.immutableModifyName = function(toAdd){ // this will make sure that immutableModifyName function is available for all instances created by new Cat and 'this' can refer to the instance
    return new Cat(`Mr ${this.name} ${toAdd}` , 'male')
}



console.log('=======================')
console.log('CAT instance - cat1' )
console.log('-----------------------')
let cat1 = new Cat('meow', 'female') // create a new instance with new
console.log(cat1.detailsPublic())
console.log(cat1.constructor.location) // I am accessing the class attributes via cat1.constructor
console.log(cat1._sexPrivate) // this is undefined because _sexPrivate is a private attribute in Cat function
console.log(cat1._hobbyMakePublic) //private attribute that is make available
cat1._hobbyMakePublic = 'catch mice'
console.log(cat1._hobbyMakePublic) // this is to show that _hobbyMakePublic is only readable 
console.log(cat1._colorMakePublic)
cat1._colorMakePublic = 'red'
console.log(cat1._colorMakePublic) // this is to show that _colorMakePublic is readable and settable
console.log('================================================================')
console.log("CAT instance - cat2ByDefault created by public default() method.")
console.log('----------------------------------------------------------------')
let cat2ByDefault = Cat.default();
console.log(cat2ByDefault.name)
console.log(cat2ByDefault.sex)
console.log(cat2ByDefault._hobbyMakePublic)
console.log(cat2ByDefault._colorMakePublic)
cat2ByDefault._colorMakePublic = 'defaultcolor'
console.log(cat2ByDefault._colorMakePublic) 
console.log('===============================================================')
console.log("CAT instance - cat3 to show immutable")
console.log('----------------------------------------------------------------')
let cat3 = new Cat('Tom', 'male');
console.log(cat3.name)
cat3.modifyName('Laugh')
console.log(cat3.name)
let cat4 = cat3.immutableModifyName('Immutable')
console.log(cat4.name) // this is actually a new instance to prevent cat3 instance from mutating
console.log(cat3.name) // this shows that cat3 is not mutated