//**function declaration and function expression

foo() //** OK, function foo() will be hoisted up during compilation before execution

//declaration
function foo(){
 console.log("in foo")
}

// var myfunction;

// myfunction() //** NOT OK, var myfunction is hoisted up only. Hence, myfunction is still not defined. "TypeError: myfunction is not a function"

//expression
var myfunction = function boo(){
    console.log("in boo")
}

myfunction() //** OK