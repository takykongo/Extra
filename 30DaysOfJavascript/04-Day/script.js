// Switch
let weatheer = 'cloudy'
switch (weatheer) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day){
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'Sunday':
        console.log('Today is Sunday')
        break
     default:
        console.log('It is not a week day.')
}


let numero = prompt('Enter number')
switch(true){
    case numero > 0:
        console.log('Number is positive')
        break;
    case numero == 0:
        console.log('Numbers is Zero')
        break;
    case numero < 0:
        console.log('Number is negative')
        break;
    default:
        console.log('Entered value was not a number')
}

// Ternary Operators
let iRaining = true
iRaining
    ?  console.log('You need a rain coat.')
    :  console.log('No need for a rain coat.')