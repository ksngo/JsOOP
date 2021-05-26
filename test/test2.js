// var function-scoped, exist inside the function

var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
console.log(i) // i outside the for block, where i is 3...hence, results all show 3
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
// My value : 3
// My value : 3
// My value : 3