// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//------------------------------------ Assessment Start ------------------------------------

// jest test template:
// describe ("nameOfFunction", () => {
//     it("explains what it takes and return expectation in plain English as this is for the programmer", () => {
//         expect(nameOfFunction()).toEqual(expected return)
//     })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "sentenceBuilder" that takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// it "takes in an array of objects and returns an array of sentences"
// expect(sentenceBuilder(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: sentenceBuilder is not defined


describe ('sentenceBuilder', () => {
  it('takes in an array of objects and returns an array of sentences', () => {
    expect(sentenceBuilder(people)).toEqual(
      [
        'Ford Prefect is a hitchhiker.',
        'Zaphod Beeblebrox is president of the galaxy.',
        'Arthur Dent is a radio employee.'
      ])
  })
})

// output: 
// FAIL  ./code-challenges.test.js
// ReferenceError: sentenceBuilder is not defined


// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: a function "sentenceBuilder" that takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// iterate the array using .map() to edit the name values which are strings
  // use .split(" ") method to separate each word of the string (first name and last name) and again .map() to change the letters at index 0 to upper case.
    // concact the modified letter to the rest of the word and then concact the two works together
    // concat the occupation 
    // use string interpolation... forgot the spacing in the interpolation, which caused me hours of errors that weren't errors
    // can I do it all in a single line instead of creating variables like always?
// input: an array of objects
// output: an array containing only sentences

const sentenceBuilder = (array) => {
  // no way this works as a single line 
  return array.map((value) => value.name.split(' ').map((name) => name = (name.charAt(0).toUpperCase()).concat(name.substring(1))).join(' ') + ` is ${value.occupation}.`)
  // after extensive testing and realizing there had to be something wrong with the order of the parens I finally figured it out. I need a better way to do this in the future
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "justRemainders" that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// it "takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3"
// expect(justRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
// expect(justRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: justRemainders is not defined


describe ('justRemainders', () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(justRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(justRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// output: 
// FAIL  ./code-challenges.test.js
// ReferenceError: justRemainders is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: function "justRemainders" takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// iterate the array using .filter() to pick out only the number values with typeOf === number. Then .map(number values process by value % 3) 
// input: a mixed array
// output: an array containing only the remainder of the number values when divided by three

const justRemainders = (array) => {
  // let's try to do it all in a single line again
  // check if I can further simplify with .reduce()
  return array.filter(value => typeof value === 'number').map(num => num % 3)
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// first cube each number, then add the cubed numbers. Not the other way around. 
// Using jest test template to test a function "sumOfCubes" that takes in an array of numbers and returns the sum of all the numbers cubed
// it "takes in an array of numbers and returns the sum of all the numbers cubed"
// expect(sumOfCubes(cubeAndSum1)).toEqual(99)
// expect(sumOfCubes(cubeAndSum2)).toEqual(1125)
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: sumOfCubes is not defined

describe ('sumOfCubes', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(sumOfCubes(cubeAndSum1)).toEqual(99)
    expect(sumOfCubes(cubeAndSum2)).toEqual(1125)
  })
})

// output: 
// FAIL  ./code-challenges.test.js
// ReferenceError: sumOfCubes is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed: function "sumOfCubes" takes in an array of numbers and returns the sum of all the numbers cubed
// iterate the array using .reduce() to add each cubed value to the next cubed value. Reduce (accumulator, currentValue) => accumulator + currentValue, initialValue
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
// input: a mixed array
// output: an array containing only the remainder of the number values when divided by three

const sumOfCubes = (array) => {
  // let's make it three for three
  return array.reduce((accumulator, value) => accumulator + value ** 3, 0)
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total