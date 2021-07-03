
function Animal(){}

Animal.prototype.danceCharacters = "" // declaring the five properties
Animal.prototype.spelledSound1 = "" // python try use spelled_sound_1  while javascript try use camelCase
Animal.prototype.spelledSound2 = ""
Animal.prototype.spelledSound3 = ""
Animal.prototype.name = ""
Animal.prototype.dance = function(){
    console.log(`${this.name} dances ${this.danceCharacters}`)
}
Animal.prototype.say = function(message){
    console.log(`${this.name} says: ${message}`)
}
Animal.prototype.sayGoodbye = function(destination){
    console.log(`${this.name} says goodbye to ${destination.name}: ${this.spelledSound1} ${this.spelledSound2} ${this.spelledSound3}`)
}
Animal.prototype.sayWelcome = function(destination){
    console.log(`${this.name} welcomes ${destination.name}: ${this.spelledSound2}`)
}
Animal.prototype.sing = function(){
    var spelledSingSound = this.spelledSound1 + " ";
    console.log(`${this.name} sings: ${Array(4).join(spelledSingSound)} ${Array(3).join(spelledSingSound)} ${spelledSingSound}`)
}

// Dog constructor function using Animal as prototype; in another sense, Dog inheriting from Animal

function Dog(name){
    this.name = name;
};

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.danceCharacters = "/-\\ \\-\\ /-/"; //will overide the attributes in Animal constructor function
Dog.prototype.spelledSound1 = "Woof"
Dog.prototype.spelledSound2 = "Woooof"
Dog.prototype.spelledSound3 = "Grr"

//declaring Party constructor that uses duck typing to work with instances of any class that has 
// name property and have dance, say, sayGoodbye, sayWelcome and sing methods e.g.(Animal class or it's subclass like Dog)
// duck typing - something like providing the class with another class as an argument and stored in the instance object
// e.g. passing leader object instance and stored in this.leader = leader

function Party(leader, deeJay){
    this.leader = leader;
    this.members = [leader];
    this.deeJay = deeJay;
}

Party.prototype.addMember = function(member){ // member is an instance that has property name
    this.members.push(member);
    this.leader.sayWelcome(member)
}
Party.prototype.removeMember = function(member){
    if(member == this.leader){
        throw "Cannot remove leader from party"
    }
    this.members.splice(this.members.indexOf(member),1)
    member.sayGoodbye(this.leader);
}
Party.prototype.dance = function(){
    this.deeJay.playMusicToDance();
    for(const member of this.members){
        member.dance();
    }
}
Party.prototype.sing = function(){
    this.deeJay.playMusicToSing();
    for(const member of this.members){
        member.sing();
    }
}
Party.prototype.voteLeader = function(){
    if( this.members.length == 1){
        throw "You need at least two members to vote a new Leader"
    }

    var newleader = this.leader;
    while(newleader == this.leader){
        var randowmleader = Math.floor(Math.random()*(this.members.length -1 )) + 1;
        newleader = this.members[randowmleader]
    }
    this.leader.say(`${newleader.name} has been voted as our new Party leader`)
    newleader.dance();
    this.leader = newleader;
}

var jake = new Dog("Jake");
var duke = new Dog("Duke");
var lady = new Dog("Lady");
var dako = new Dog("Dako");

// var dogParty = new Party(jake);
// dogParty.addMember(duke);
// dogParty.addMember(lady);
// dogParty.addMember(dako);

// dogParty.dance()
// dogParty.removeMember(duke)
// dogParty.voteLeader();
// dogParty.sing();


HorseDeeJay = function(name) {
    this.name = name;
};
HorseDeeJay.prototype.playMusicToDance = function(){
    console.log(`My name is ${this.name}. Let's Dance.`)
}
HorseDeeJay.prototype.playMusicToSing = function(){
    console.log("Time to sing!")
}

// PartyWithDeeJay = function(leader, deejay){
//     this.leader = leader; // ducktyping, leader is a class instance here (e.g. an instance of Animal or Dog constructor function)
//     this.deejay = deejay // ducktyping, deejay is a class instance here (e.g. an instance of HorseDeeJay constructor function)
//     this.members = [leader]
// }
// PartyWithDeeJay.prototype.dance = function(){
//     this.deejay.playMusicToDance();
// }


var silver = new HorseDeeJay("Silver")
var silverParty = new Party(jake, silver)

silverParty.addMember(duke)
silverParty.addMember(lady)
silverParty.addMember(dako)

silverParty.dance()
silverParty.removeMember(duke)
silverParty.voteLeader()
silverParty.sing()
