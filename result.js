function validateClubcardNumber(cardNumber) {
  // Convert the card number string to an array of digits and reverse it
  const digits = [...cardNumber].map(Number).reverse()

  // Double every second digit, adjusting if necessary
  const doubledDigits = digits.map((digit, index) => {
    if (index % 2 === 1) {
      return digit * 2 > 9 ? digit * 2 - 9 : digit * 2
    } else {
      return digit
    }
  })

  // Calculate the sum of all digits in the array
  const totalSum = doubledDigits.reduce((sum, digit) => sum + digit, 0)
  // Check if the total sum is a multiple of 10
  return totalSum % 10 === 0
}

// Example usage:
const isCardValid = validateClubcardNumber('1234567890123456')
console.log(isCardValid)

