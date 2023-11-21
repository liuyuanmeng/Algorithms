function doubleDigit(digit) {
  return digit * 2 > 9 ? digit * 2 - 9 : digit * 2
}

function processDigits(digits) {
  return digits.map((digit, index) => (index % 2 === 1 ? doubleDigit(digit) : digit))
}

// Example usage:
const originalDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const doubledDigits = processDigits(originalDigits)
console.log(doubledDigits)
