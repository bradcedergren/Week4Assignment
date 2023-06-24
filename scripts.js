// 1.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// Subtract the first element from the last element
let lastIndex = ages.length - 1
let difference = ages[lastIndex] - ages[0]
console.log('Difference:', difference)

// Add a new age to the array
let newAge = 40
ages.push(newAge)

// Calculate the average age
let sum = 0
for (let i = 0; i < ages.length; i++) {
  sum += ages[i]
}

let average = sum / ages.length
console.log('Average age:', average)

// 2.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// Calculate the average number of letters per name
let totalLetters = 0
for (let i = 0; i < names.length; i++) {
  // Get the index value of the names array
  totalLetters += names[i].length
}

let averageLetters = totalLetters / names.length
console.log('Average letters per name:', averageLetters)

// Concatenate all the names separated by spaces
let concatenatedNames = ''
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + ' '
}

console.log('Concatenated names:', concatenatedNames.trim())

// 3.
let array3 = [1, 2, 3, 4, 5]
let lastElement = array3[array3.length - 1]

console.log(lastElement) // Output: 5

// 4.
let array4 = [1, 2, 3, 4, 5]
let firstElement = array4[0]

console.log(firstElement) // Output: 1

// 5.
let names5 = ['Kelly', 'Sam', 'Kate']
let nameLengths = []

for (let i = 0; i < names5.length; i++) {
  nameLengths.push(names5[i].length)
}

console.log(nameLengths) // Output: [5, 3, 4]

// 6.
let nameLengths6 = [5, 3, 4]
let sum6 = 0

for (let i = 0; i < nameLengths6.length; i++) {
  sum6 += nameLengths6[i]
}

console.log(sum6) // Output: 12

// 7.
function concatenateWord(word, n) {
  let concatenatedWord = ''

  for (let i = 0; i < n; i++) {
    concatenatedWord += word
  }

  return concatenatedWord
}

let result = concatenateWord('Hello', 3)
console.log(result) // Output: HelloHelloHello

// 8.
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName
}

let fullName = getFullName('John', 'Doe')
console.log(fullName) // Output: John Doe

// 9.
function isSumGreaterThan100(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum > 100
}

let numbers9 = [40, 30, 35] // Example array of numbers
let result9 = isSumGreaterThan100(numbers9)
console.log(result9) // Output: true

// 10.
function calculateAverage(numbers10) {
  let sum = 0

  for (let i = 0; i < numbers10.length; i++) {
    sum += numbers10[i]
  }

  let average = sum / numbers10.length
  return average
}

let numbers = [10, 20, 30, 40, 50] // Example array of numbers
let average10 = calculateAverage(numbers)
console.log(average10) // Output: 30

// 11.
function compareAverages(array1, array2) {
  const average1 = calculateAverage(array1)
  const average2 = calculateAverage(array2)

  return average1 > average2
}

function calculateAverage(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  const average = sum / numbers.length
  return average
}

let array1 = [10, 20, 30]
let array2 = [5, 15, 25]

let result11 = compareAverages(array1, array2)
console.log(result11) // Output: true

// 12.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true
  } else {
    return false
  }
}

// Example usage:
let hotOutside = true
let money = 15.75

let result12 = willBuyDrink(hotOutside, money)
console.log(result) // Output: true

// 13.
/*
What it does: The capitalizeString function takes a string as an input 
and returns the same string with the first letter capitalized. If the 
input is an empty string, it returns an empty string as well.

Why I created it: I created this function because capitalizing the first letter 
of a string is a common task in various applications. By encapsulating this 
functionality into a reusable function, it promotes code reusability, improves 
readability, and makes the code easier to maintain. It also provides a consistent 
way to capitalize strings throughout an application, avoiding duplication of code 
and potential inconsistencies.
*/

// Capitalizes the first letter of a given string.
function capitalizeString(str) {
  // Check the length of the string
  if (str.length === 0) {
    return str
  }

  const firstLetter = str.charAt(0).toUpperCase()
  const restOfStr = str.slice(1)

  return firstLetter + restOfStr
}

console.log(capitalizeString('promineotech'))
