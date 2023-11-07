const hello = () => {
  console.log('hello')
}
hello()
// input string "Hello" => "HeLlO"
const everyOther = (str) => {
  let newString = ''
  for (let i = 0; i < str.length; i++){
    if (i % 2 === 0) {
      newString += str[i].toUpperCase()
    } else {
      newString += str[i].toLowerCase()
      
    }
  }
  return newString
}
console.log(everyOther('hello'))
// console.log(everyOther('hello daisy'))
// console.log(everyOther('hello!!'))
// console.log(everyOther('HELLO!!'))

const camelLatters = (str) => {
  let newStr = [...str].map((char, index) => {
    if (index % 2 === 0) {
      return char.toUpperCase()
    } else {
      return char.toLowerCase()
    }
  }).join('')

  return newStr
}

console.log(camelLatters('hello'))
