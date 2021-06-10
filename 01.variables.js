// 1. var
// Global or Function/Local Scope
var a = 5;
// console.log(a)

// Hoisted
// console.log("c: " + c)
var c = 100;

// Can be redeclared and reinitialized
var a = 10;  
// console.log(a)
a = 20; 
// console.log(a)


// Problem with var
// Block level declaration overrides global scope
var b = 22; 

if(b>20) {
  var a = 100 
  // console.log(a)
}

// console.log(a)






// 2. let
// Block level scope
let let_a = 5;
console.log(let_a)

// Can not be Hoisted
  //console.log("c: " + let_c)
  //let let_c = 100;

// Can not be redeclared but can be reinitialized
let let_x = 10;  
console.log(let_x)
// let let_x = 20; // (Error)
console.log(let_x)


// Problem with var resolved with let
// // Block level declaration does not overrides global scope
let let_b = 22; 

if(let_b>20) {
  let let_x = 100 
  console.log("let_x: inside block " + let_x)
}

console.log("let_x: " + let_x)




// 3. const
// Block level scope
const const_a = 5;
console.log(const_a)

// Can not be Hoisted
  // console.log("c: " + const_c)
  // let const_c = 100;

// // Can not be redeclared or reinitialized
// const const_a = 10;  //(Error)
// console.log(const_a)


// // Problem with var resolved with let
// // Block level declaration does not overrides global scope
const const_b = 22; 

if(let_b>20) {
  const const_a = 100 
  console.log("const_a: inside block " + const_a)
}

console.log("const_a: " + const_a)