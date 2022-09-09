// Les méthodes
// lenght()
let ts = 'JavaScript'
console.log(ts.length)

console.log(firstname.length)

let string = 'JavaScript'
let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(firstLetter)
console.log(lastLetter)

let lastIndex = string.length - 1
console.log(lastIndex)
console.log(string[lastIndex])

// toUpperCase()
console.log(string.toUpperCase())
console.log(firstname.toUpperCase())
console.log(country.toUpperCase())
console.log(city.toUpperCase())

// toLowerCase() 
console.log(string.toLowerCase())
console.log(firstname.toLowerCase())
console.log(country.toLowerCase())
console.log(city.toLowerCase())

// substr()
console.log(string.substr(4, 6))
console.log(country.substr(3, 4))
console.log(firstname.substr(0,4))

// substring()
console.log(string.substring(0,4))
console.log(string.substring(4,10))
console.log(string.substring(4))

console.log(country.substring(3))
console.log(country.substring(0,3))
console.log(country.substring(3,7))

// split()
let sting = '30 Days of JavaScript'
console.log(sting.split())
console.log(sting.split(' '))

console.log(firstname.split())
console.log(firstname.split(''))

let countries = 'Finland, Sweden, Norway, Danemark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))

// trim()
let strings = '     30 Days Of JavaScript    '
console.log(strings)
console.log(strings.trim(' '))

let firstName = '   Asabeneh    '
console.log(firstName)
console.log(firstName.trim(' '))

// includes()
console.log(sting.includes('Days'))
console.log(sting.includes('days'))
console.log(sting.includes('script'))
console.log(sting.includes('Script'))
console.log(sting.includes('Java'))
console.log(sting.includes('java'))

console.log(country.includes('fin'))
console.log(country.includes('Fin'))
console.log(country.includes('Land'))
console.log(country.includes('land'))

// replace()
console.log(sting.replace('JavaScript', 'Python'))
console.log(country.replace('Fin', 'Noman'))

// charAt()
console.log(sting.charAt(0))

let lastindex = sting.length - 1
console.log(sting.charAt(lastindex))

// charCodeAt()
console.log(sting.charCodeAt(3))
console.log(sting.charCodeAt(lastindex))

// indexOf()
console.log(sting.indexOf('Days'))
console.log(sting.indexOf('D'))
console.log(sting.indexOf('days'))
console.log(sting.indexOf('a'))
console.log(sting.indexOf('JavaScript'))
console.log(sting.indexOf('script'))
console.log(sting.indexOf('Script'))

// lastIndexOf()
let stings = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stings.lastIndexOf('love'))
console.log(stings.lastIndexOf('you'))
console.log(stings.lastIndexOf('JavaScript'))

// concat()
let countrie = 'Fin'
console.log(countrie.concat("land"))

let strin = '30'
console.log(strin.concat("Days", "Of", "JavaScript"))

// startsWith()
let strins = 'Love is the best to in this world'
console.log(strins.startsWith('love'))
console.log(strins.startsWith('Love'))
console.log(strins.startsWith('world'))

// endsWith()
let strinss = 'Love is the most powerfull feeling in the world'
console.log(strinss.endsWith('world'))
console.log(strinss.endsWith('in the world'))
console.log(strinss.endsWith('Love'))

let countrye = 'Finland'
console.log(countrye)
console.log(countrye.endsWith('land'))
console.log(countrye.endsWith('fin'))
console.log(countrye.endsWith('Land'))
console.log(countrye.endsWith('nland'))

// search()
console.log(stings.search('love'))
console.log(stings.search(/javascript/gi))

// match()
console.log(stings.match('love'))
let patern = /love/gi
console.log(stings.match(patern))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

// repeat()
let sin = 'love'
console.log(sin.repeat(10))