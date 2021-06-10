// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables. -MDN


// Destructuring with array
let array = [1,2,3,4,5,6,7]
let a,b,rest

[a,b] = array
console.log("a,b: " + a,b);

[a, b, rest] = array;
console.log("a,b,rest: " + a,b,rest);

[a, b, ...rest] = array;
console.log("a,b,rest: " + a,b,rest);




// Destructuring with object
let obj = {
  name:'Aaqib',
  lastName:'Soomro',
  age:23,
}

let name, age 

({name, age} = obj)

console.log('name: ' + name)
console.log('age: ' + age)