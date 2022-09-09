// if
let num = 3
if(num > 0){
console.log(`${num} is a positive number`)}
// else
else{
    console.log(`${num} is a negative number`)
}

num = -3
if(num > 0){
    console.log(`${num} is a positive number`)
}else{
    console.log(`${num} is a negative number`)
}

let isRaining = true
if (isRaining) {
    console.log('You need a rain coat.')
} else {
    console.log('No need for a rain coat.')
}
// You need a rain coat.
  
isRaining = false
if (isRaining) {
    console.log('You need a rain coat.')
} else {
    console.log('No need for a rain coat.')
}
// No need for a rain coat.

// if else if else
let a=0
if(a > 0){
    console.log(`${a} is a positive number`)
}else if(a < 0) {
    console.log(`${a} is a negative number`)
}else if(a == 0) {
    console.log(`${a} is zero`)
}else {
    console.log(`${a} is not a number`)
}