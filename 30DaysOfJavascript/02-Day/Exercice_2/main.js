console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(parseInt('10') == 10)
let StringFloat = '9.8'
let float = parseFloat(StringFloat)
console.log(Math.ceil(float))
console.log(Math.ceil(float) == 10)

console.log('jargon'.includes('on'), 'python'.includes('on'))
console.log('I hope this course is not full of jargon.'.includes('jargon'))

let randomNum = Math.random() *101
let zeroAndHundred = Math.floor(randomNum)
console.log(zeroAndHundred)

let numRandom = Math.random() * 250
let zeroAndtwo = Math.floor(numRandom)
console.log(zeroAndtwo)

let js = 'JavaScript'
let nmbJs = js.length - 1
console.log(nmbJs)
let stringRandom = Math.floor(Math.random() * 10)
console.log(stringRandom)
console.log(js[stringRandom])

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

let phrase = 'You cannot end a sentence with because because because is a conjunction'
console.log(phrase.indexOf('because'))
console.log(phrase.lastIndexOf('because'))
console.log(phrase.substr(0,31),phrase.substr(55))

let min = 50
let max = 100
console.log(min,max)
let RandomNum = Math.floor(Math.random()*101)
console.log(RandomNum, 'essai')
if(RandomNum < 50)
{
    console.log(min+RandomNum)
}else{
    console.log(RandomNum)
}