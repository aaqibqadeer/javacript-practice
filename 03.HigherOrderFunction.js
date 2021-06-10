let numbers = [10, 20, 30, 35 , 40, 50, 51]

// map
//  Perform operation on each item and return a new array
let double = numbers.map((num) => {
  return num*2
})
console.log("map returns: " + double)


// filter
// Perform boolean operation on each item and return a new subset array with only those elements which satisfy the condition
let filter = numbers.filter((num) => {
  return num>30
})
console.log("filter returns: " + filter)