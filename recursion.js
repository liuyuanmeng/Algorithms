function findMax(arr, index = 0, max = -Infinity) {
  if (index === arr.length) {
    return max
  }

  // Compare the current element with the current maximum
  if (arr[index] > max) {
    max = arr[index]
  }

  // Recursively call the function with the next index
  return findMax(arr, index + 1, max)
}

// Example usage:
const numbers = [5, 2, 9, 1, 7]
const maxNumber = findMax(numbers)
console.log(maxNumber)// Output: 9

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1)
}

// Example usage:
const result = factorial(5)
console.log(result) // Output: 120


function fibonacci(n) {
  // Base case: Fibonacci of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Example usage:
const result = fibonacci(6)
console.log(result) // Output: 13


function coinFlips(n) {
  // Base case: when there are no more flips, return an array with an empty string
  if (n === 0) {
    return ['']
  }

  // Recursive case: generate outcomes for (n - 1) flips and append 'H' and 'T'
  const prevOutcomes = coinFlips(n - 1)
  const currentOutcomes = [];

  for (const outcome of prevOutcomes) {
    currentOutcomes.push(outcome + 'H');
    currentOutcomes.push(outcome + 'T');
  }

  return currentOutcomes;
}

// Example usage:
const result = coinFlips(2);
console.log(result);
// Output: ["HH", "HT", "TH", "TT"]



function letterCombinations(letters) {
  function generateCombinations(index, currentCombination, combinations) {
    if (index === letters.length) {
      combinations.push(currentCombination)
      return
    }

    // Include the current letter in the combination
    generateCombinations(index + 1, currentCombination + letters[index], combinations);

    // Exclude the current letter in the combination
    generateCombinations(index + 1, currentCombination, combinations)
  }

  const result = []
  generateCombinations(0, '', result)
  return result;
}

// Example usage:
const result = letterCombinations(["a", "b", "c"])
console.log(result)
// Output: ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
