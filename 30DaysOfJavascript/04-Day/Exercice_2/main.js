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

if((saisons == 'september')||(saisons == 'october')||(saisons == 'november'))
{
    console.log('The season is Autumn.')
}else if((saisons == 'january')||(saisons == 'february')||(saisons == 'december'))
{
    console.log('The season is Winter.')
}else if((saisons == 'march')||(saisons == 'april')||(saisons == 'may'))
{
    console.log('The season is Spring.')
}else if((saisons == 'june')||(saisons == 'july')||(saisons == 'august'))
{
    console.log('The season is Summer.')
}else{
        console.log('Enter one month')
}

/** 3- Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

let days = prompt('What is the day  today ?')
let dayss = days.toLowerCase()

if((dayss == 'monday')||(dayss =='tuesday')||(dayss =='wednesday')||(dayss =='thursday'||dayss =='friday')){
    console.log(`${days} is a working day.`)
}else if((dayss =='saturday'||dayss =='sunday')){
    console.log(`${days} is a weekend.`)
}else{
    console.log('Enter a day')
}