const string = 'Hello World !'
console.log(string)

// escaping characters
const letMeKnow = 'So you\'ve got to let me know...'
//console.log(letMeKnow)

// concatenation with template literals
const shouldI = `${letMeKnow} Should I stay or should i go?`
console.log(shouldI)

// concatenation with the + operator
const shouldI2 = letMeKnow + ' Should I stay or should i go?'
console.log(shouldI2)

// converting types in JS
// if in doubt, use typeof !!
const myString = '42'
const num = Number(myString)
console.log(typeof num + ': ' + num)

const num2 = 24
const myString2 = num2.toString()
console.log(typeof myString2 + ': ' + myString2)

// including expressions
const x = 15
const y = 11
const myAge = `My Age is ${x+y} years!`
console.log(myAge)

// break line
// either use template literals or \n
