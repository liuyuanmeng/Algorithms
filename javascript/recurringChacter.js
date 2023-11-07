// Given an Array = [2,5,1,2,3,5,1,2,4] it should return 2 or undefined
const recurringChacter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}

// console.log(recurringChacter([1, 5, 5, 2, 3, 5, 1, 2, 4]))

function recurringChacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    // console.log(map)
  }
  return undefined
  
}
// time complexitity O(n) creates new objects 
// console.log(recurringChacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]))

function recurringChacter3(input) {

  for (let i = 0; i < input.length; i++) {
 
    if (input[i] === input[i + 1]) {
      return input[i]
    }
      
  }
  return undefined 
}

console.log(recurringChacter3([1, 5, 5, 2, 3, 5, 1, 2, 4]))