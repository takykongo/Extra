/* 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/
/*let year = prompt('Enter your age: ')
if(year >= 18){
    console.log('You are old enough to drive.')
}else{
    console.log(`You are left with ${18 - year} years to drive.`)
}*/

/**2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. */
let myAge = 25
let yourAge = prompt('Enter your age: ')
if(myAge > yourAge){
    console.log(`I am ${myAge - yourAge} years older than you.`)
}else if(myAge < yourAge){
    console.log(`You are ${yourAge - myAge} years older than me.`)
}else if(myAge == yourAge){
    console.log(`We are both ${yourAge} years old.`)
}else{
    console.log(`${yourAge} is not a number.`)
}

// 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways


// 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?