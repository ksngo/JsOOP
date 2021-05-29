//**Regex */

//**test() */
pattern =/orange/
console.log(pattern.test("orange")) //expect true
console.log(pattern.test("Orange")) //expect false
console.log(/[12345]/.test(5678)) //expect true
console.log(/[12345]/.test(678)) //expect false
console.log(/[12345]/.test("good day 1")) //expect true

var mystring = "MOM, This is a momentary pause in time and atmosphere momo, MOM rules applies."
console.log("BREAK")
console.log(/mom/.test(mystring)) //true
console.log(/PAUSE/i.test(mystring)) //true
console.log(/PAUSE/.test(mystring)) //false

//**exec() */ ---> good for indexing and iteration
const regex1 = /mom/
console.log(regex1.exec(mystring)[0]) // [ 'mom']
const regex2 = /mom/ig
var storeArray;
while ((storeArray = regex2.exec(mystring)) !== null){
    console.log(` ${storeArray[0]} at ${regex2.lastIndex} `)
    console.log(` amazing, the regex2.lastIndex is changing and now it's ${regex2.lastIndex}`)
} // MOM at 3 , mom at 18, mom at 57 , MOM at 63

//**match() */ ---> good for giving the array of matches
console.log("BREAK")
console.log(mystring.match(regex2)) // [MOM , mom, mom, MOM]
console.log(mystring.match(regex1)) // [mom, index:15 , input: mystring , groups: undefined] ,if g is not use, only the first complete match and related properties are returned 

//**replace() */
console.log("BREAK")
console.log(mystring.replace(regex1 , "DAD")) // MOM, This is a DADentary pause in time and atmosphere momo, MOM rules applies.
console.log(mystring.replace(regex2 , "DAD")) // DAD, This is a DADentary pause in time and atmosphere DADo, DAD rules applies.

//**split() */
console.log("BREAK")
console.log(mystring.split(/s/)) // [ 'MOM, Thi', ' i', ' a momentary pau' , .....]
console.log(mystring.split(/\,/)) // [ 'MOM', ' This is a momentary.....', ' MOM rules applies']



//**  \b pattern , boundary */
console.log("BREAK")
console.log(/tom/.test("This tom is good")) // expect true
console.log(/\btom/.test("This stom is good")) // expect false
console.log(/\btom/.test("This tomb is good")) // expect true
console.log(/tom\b/.test("This tomb is good")) // expect false
console.log(/tom\b/.test("This tomb is good")) // expect false
console.log(/\bgood\b/.test("This tomb is good")) // expect true 
console.log(/\bgood\b/.test("This tomb is goodies")) // expect false


//** backreferences e.g. $1 $2 $3   */
console.log("BREAK")
const string = "Ember Spirit and Drow Ranger"
const re = /(\D{5}) (\D{6})/ // \D means any non-digit, \d means any digit, \w means any alphanumeric character, \W means a non-alphanumeric char, \s is any whitespace char(space,tab,newline)
//. any character except for newline , \S is any non-whitespace char
console.log(string.replace(re, "$2 $1")) // $2 refers to group \2 and $1 refers to group \1
// expect Spirit Ember and Drow Ranger
console.log(/\w/.test("t")) //expect true
console.log(/\w*/.test("t")) //expect true // * is 1 or any
console.log(/\w?/.test("t")) //expect true // ? is 0 or any
console.log(/\w?/.test("")) //expect true
console.log(/\w*R/.test("tR")) //expect true //R is literal R
console.log(/\w?R/.test("R")) //expect true
console.log(/\w?R/.test("R")) //expect true
console.log(/\w?R/.test("JR")) //expect true
console.log(/\w*R/.test("JR")) //expect true


