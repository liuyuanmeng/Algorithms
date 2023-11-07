
function findMax(numbers) {
  let max = numbers[0] // Assume the first element is the maximum

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i] // Update max if a larger element is found
    }
  }

  return max
}
console.log(findMax([1, 5, 3, 9, 2]))
