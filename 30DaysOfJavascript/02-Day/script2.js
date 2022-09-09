let space = ' '
let firstname = 'Asabeneh'
let lastname = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinky'
let language = 'Javascript'
let job = 'Teaching'
let quote = "The saying, 'Seeing is Believing' is not correct in 2020."
let quoteWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2020.`
let agee = 250

let fullname = firstname + space + lastname
console.log(fullname)

let personInfoOne = fullname + '. I am ' + agee + '. I live in ' + country
console.log(personInfoOne)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of Javascript challenge. \nDo you ?')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)')
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log('The sum of 2 and 3 is 5')
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a+b}`)

let personInfoTwo = `I am ${fullname}. I am ${agee}. I live in ${country}.`
let personInfoThree = `I am ${fullname}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

console.log(`${a} is greater than ${b}: ${a > b}`)