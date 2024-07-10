export function nidGenerator () {
  const multipliers = [29, 27, 23, 19, 17, 29, 27, 23, 19, 247]
  let randomDigits = ''
  let sum = 460
  for (let i = 0; i < 10; i++) {
    const randomDigit = Math.floor(Math.random() * 10) // Generate a random digit (0 to 9)
    sum += randomDigit * multipliers[i]
    randomDigits += randomDigit
  }
  const controlDigit = (sum % 11) % 10
  return randomDigits + controlDigit.toString()
}
export function nidChecker (input) {
  input = input ? input.toString().padStart(11,0) : false
  if (!input) {
    return false
  }
  const multipliers = [29, 27, 23, 19, 17, 29, 27, 23, 19, 247]
  const sum = input
    .slice(0, -1) // Remove the last digit (control digit)
    .split('')
    .reduce((acc, currentNum, index) => {
      return acc + (+currentNum * multipliers[index])
    }, 460)

  const controlDigit = +input.slice(-1) // Get the control digit
  return (sum % 11) % 10 === controlDigit
}

export function ncChecker (input) {
  input = input ? input.toString().padStart(10,0) : false
  if (!input) {
    return false
  }
  const controlDigit = +input.slice(-1)
  const sum = input
    .slice(0, -1) // Remove the last digit (control digit)
    .split('')
    .reduce((acc, currentNum, index) => {
      return acc + (+currentNum * (10 - index))
    }, 0)
  const remainder = sum % 11
  return (remainder < 2 && remainder === controlDigit) || (remainder >= 2 && controlDigit === (11 - remainder))
}
export function ncGenerator () {
  let output = ''
  let sum = 0
  for (let i = 0; i < 9; i++) {
    const randomDigit = Math.floor(Math.random() * 10) // Generate a random digit (0 to 9)
    sum += randomDigit * (10 - i)
    output += randomDigit
  }
  const remainder = sum % 11
  const controlDigit = remainder < 2 ? remainder : 11 - remainder
  return output + controlDigit.toString()
}
