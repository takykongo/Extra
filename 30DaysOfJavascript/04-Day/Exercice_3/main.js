//1- Write a program which tells the number of days in a month.
let month = prompt('Enter a month: ')
let months = month.toLowerCase()

if((months == 'january')||(months == 'march')||(months == 'may')||(months == 'july')||(months == 'august')||(months == 'october')||(months == 'december'))
{
    console.log(`${month} has 31 days.`)
}else if((months == 'april')||(months == 'june')||(months == 'september')||(months == 'november'))
{
    console.log(`${month} has 30 days.`)
}else if(months == 'february')
{
    console.log(`${month} has 28 days.`)
}else{
    console.log(`Enter a month.!`)
}

// 2- Write a program which tells the number of days in a month, now consider leap year.

month = prompt('Enter a month: ')
months = month.toLowerCase()

if((months == 'january')||(months == 'march')||(months == 'may')||(months == 'july')||(months == 'august')||(months == 'october')||(months == 'december'))
{
    console.log(`${month} has 31 days.`)
}else if((months == 'april')||(months == 'june')||(months == 'september')||(months == 'november'))
{
    console.log(`${month} has 30 days.`)
}else if(months == 'february')
{
    console.log(`${month} has 29 days.`)
}else{
    console.log(`Enter a month.!`)
}