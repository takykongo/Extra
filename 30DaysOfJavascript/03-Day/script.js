// Les opérateurs arithmétiques
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum,diff,mult,div,remainder,powerOf)

const PI = 3.14
let radius = 100
//Let us calculate area of a circle
const areaOfCircle = 3.14 * radius * radius
console.log(areaOfCircle)

const gravity = 9.81
let mass = 72
// Let us calculate weight of an object
const weight = gravity * mass
console.log(weight)

const boilinPoint = 100
const bodyTemp = 37
// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(`The boling point of water is ${boilinPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m/s2.`)

// Opérateurs de comparaison
console.log(3 > 2)
console.log(3 >= 2)
console.log(3 < 2)
console.log(2 < 3)
console.log(2 <= 3)
console.log(3 == 2)
console.log(3 != 2)
console.log(3 == '3')
console.log(3 === '3')
console.log(3 !== '3')
console.log(3 != 3)
console.log(3 !== 3)
console.log(0 == false)
console.log(0 === false)
console.log(0 == (''))
console.log(0 == (' '))
console.log(0 === (''))
console.log(1 == true)
console.log(1 === true)
console.log(undefined == null)
console.log(undefined === null)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(typeof NaN)

console.log('mango'.length == 'avocado'.length)
console.log('mango'.length != 'avocado'.length)
console.log('mango'.length < 'avocado'.length)
console.log('milk'.length == 'meat'.length)
console.log('milk'.length != 'meat'.length)
console.log('potato'.length == 'tomato'.length)
console.log('python'.length > 'dragon'.length)

// Opérateurs d'incrémentation
let count = 0
console.log(++count)
console.log(count)

let coount = 0
console.log(coount++)
console.log(coount)

// Opérateurs de décrémentation
let cout = 0
console.log(--cout)
console.log(cout)

let coout = 0
console.log(coout--)
console.log(coout)

// Opérateurs ternaires
let isRaining = true
isRaining
    ?  console.log('You need a rain coat.')
    :  console.log('No need for a rain coat.')
isRaining = false
    ?  console.log('You need a rain coat.')
    :  console.log('No need for a rain coat.')

let number = 5
number > 0
    ?  console.log(`${number} is a positive number`)
    :  console.log(`${number} is a negative number`)
let numbeer = -5
numbeer > 0
    ?  console.log(`${numbeer} is a positive number`)
    :  console.log(`${numbeer} is a negative number`)

//Méthodes de fenêtre
/* alert('message')
alert('Welcome to 30DaysOfJavaScript')*/

// La méthode prompt()
/* let numero = prompt('Enter number', 'Number goes here')
 console.log(numero)*/

// La méthode confirm()
// const agree = confirm('Are you sure you like to delete ?')