// given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// given an array = [2,3,4,5]
// it should return undefined

function recurringChar(arr) {
  const container = []
  for (let i = 0; i < arr.length; i++) {
    if (!container.includes(arr[i])) {
      container.push(arr[i])
    } else {
      return arr[i]
    }
  }
  return undefined
}

console.log(recurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])) // should return 1

