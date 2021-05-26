// execution & compilation phase

console.log(a) //--->execution phase
var a = 1; // undefined // ----> var a goes to compilation phase(hoisted to the top), ----> a=1 goes to execution phase

//*** 
// var a; compilation phase
// console.log(a) execution phase
// a = 1 ; execution phase
//*** */



b = 2; //----> execution phase
var b; //------> compilation phase (hoisted to the top)
console.log(b) //2 //---->execution phase

//*** 
// var b; compilation phase
// b = 2 ; execution phase
// console.log(b) execution phase
//*** */