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

/*2- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let saison = prompt('Enter the month')
let saisons = saison.toLowerCase()
switch(saisons){
    case 'september' || 'october' || 'november':
        console.log('The season is Autumn.')
        break
    case 'january' || 'february' || 'december':
        console.log('The season is Winter.')
        break
    case 'march' || 'april' || 'may':
        console.log('The season is Spring.')
        break
    case 'june' || 'july' || 'august':
        console.log('The season is Summer.')
        break
    default:
        console.log('Enter one month')
}