function validateClubcardNumber(cardNumber) {
  const digits = [...cardNumber].map(Number).reverse()

  const doubledDigits = digits.map((digit, index) => (index % 2 === 1 ? (digit * 2 > 9 ? digit * 2 - 9 : digit * 2) : digit))

  const totalSum = doubledDigits.reduce((sum, digit) => sum + digit, 0)

  return totalSum % 10 === 0
}

// Example usage
const isValid = validateClubcardNumber('346088187380157')
console.log(isValid ? 'True' : 'False')







