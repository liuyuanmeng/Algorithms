function calculateAverage(numbers) {
  // Your code here
  // get a=the total togather % the length
  
  const initialValue = 0
  const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  )
  const result = sumWithInitial / numbers.length
  return result

}
// console.log(calculateAverage([10, 20, 30, 40, 50]))
function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEven(2)) 

function isEven2(number) {
  return number % 2 === 0
}

console.log(isEven2(2)) 

