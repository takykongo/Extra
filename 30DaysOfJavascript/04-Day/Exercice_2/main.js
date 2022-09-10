/** 1- Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F */
let score = prompt('Enter your score: ')
switch (true){
    case(score >= 80 && score < 101):
        console.log(`Your score ${score} is A`)
        break
    case(score >= 70 && score < 80):
        console.log(`Your score ${score} is B`)
        break
    case(score >= 60 && score < 70):
        console.log(`Your score ${score} is C`)
        break
    case(score >= 50 && score < 60):
        console.log(`Your score ${score} is D`)
        break
    case(score >= 0 && score < 50):
        console.log(`Your score ${score} is F`)
        break
    default:
        console.log('It is Not a Number')
}