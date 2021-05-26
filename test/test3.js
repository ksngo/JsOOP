// let block-scoped , only exist within the innermost block that surrounds them e.g. {}

var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
// console.log(i) // i is undefined
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
// My value : 0
// My value : 1
// My value : 3