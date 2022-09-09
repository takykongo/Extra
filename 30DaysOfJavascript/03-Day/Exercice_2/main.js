/*1. Écrivez un script qui invite l'utilisateur à entrer la base et la hauteur du triangle et à calculer une aire d'un triangle (aire = 0,5 xbxh).*/
// let base = prompt('Enter base','base')
// let height = prompt('Enter height','height')
// console.log(base)
// console.log(height)
// console.log(`aire = 0.5 * ${parseInt(base)} * ${parseInt(height)} = ${0.5 * parseInt(base) * parseInt(height)}`)

/*2. Écrivez un script qui invite l'utilisateur à entrer le côté a, le côté b et le côté c du triangle et à calculer le périmètre du triangle (périmètre = a + b + c)*/
// let a = parseInt(prompt('Enter side a','a'))
// let b = parseInt(prompt('Enter side b','b'))
// let c = parseInt(prompt('Enter side c','c'))
// let perimeter = a + b + c
// console.log(`The perimeter of the triangle is ${perimeter}`)

/*3. Obtenez la longueur et la largeur à l'aide de l'invite et calculez une aire de rectangle (aire = longueur x largeur et le périmètre du rectangle (périmètre = 2 x (longueur + largeur))*/
// let long = parseInt(prompt('Enter length','length'))
// let large = parseInt(prompt('Enter large','large'))
// let air = long * large
// let peri = 2 * (long + large)
// console.log(`The aire of the rectangle is ${air}`)
// console.log(`The perimeter of the rectangle is ${peri}`)

/*4. Obtenez le rayon à l'aide de l'invite et calculez l'aire d'un cercle (aire = pi xrxr) et la circonférence d'un cercle (c = 2 x pi xr) où pi = 3,14.*/
// let rayon = parseInt(prompt('Enter rayon','rayon'))
// let Pi = Math.PI
// let airee = Pi * rayon * rayon
// let circonf = 2 * Pi * rayon
// console.log(`The aire of the circle is ${airee}`)
// console.log(`The circonference of the circle is ${circonf}`)

//5. Si la longueur de votre nom est supérieure à 7, dites, votre nom est long, sinon dites que votre nom est court.

// let name = prompt('Enter the name','Name')
// let nameNum = name.length
// console.log(nameNum)

// nameNum > 7
//     ?  console.log('Votre nom est long.')
//     :  console.log('Votre nom est court.')

//6. Comparez la longueur de votre prénom et la longueur de votre nom de famille

// let firstName = prompt('Enter the firstname','Firstname')
// let lastName = prompt('Enter the firstname','lastname')
// let firstNameNum = firstName.length
// let lastNameNum = lastName.length

// firstNameNum > lastNameNum
//     ?  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
//     :  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`)

// 7. Déclarez deux variables myAge et yourAge et affectez-leur des valeurs initiales ainsi que myAge et yourAge.

// let myAge = 250
// let yourAge = 25
// console.log(`I am ${myAge - yourAge} years older than you.`)

// 8. À l'aide de l'invite, obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, autorisez l'utilisateur à conduire, sinon dites-lui d'attendre un certain nombre d'années.

// let born = prompt('Enter birth year: ', 'year')
// let now = new Date()
// let years = now.getFullYear()
// let year = years - born
// let yearNum = 18 - year
// console.log(year)
// year >= 18
//     ?  console.log(`You are ${year}. You are old enough to drive`)
//     :  console.log(`You are ${year}. You will be allowed to drive after ${yearNum} years.`)

/*9. Écrivez un script qui invite l'utilisateur à entrer le nombre d'années. Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vit que cent ans*/

// let noww = new Date()
// let liveSeconds = noww.getTime()
// let an = prompt('Enter number of years you live:','Years')

/*10. Créer un format d'heure lisible par l'homme à l'aide de l'objet Date et heure
AAAA-MM-JJ HH : mm
JJ-MM-AAAA HH : mm
JJ/MM/AAAA HH : mm  */

let main = new Date()
let annee = main.getFullYear()
let month = main.getMonth() + 1
let day = main.getDate()
let hour = main.getHours()
let min = main.getMinutes()

console.log(`AAAA-MM-JJ HH : mm = ${annee}-${month}-${day} ${hour} : ${min}`)
console.log(`JJ-MM-JJ AAAA : mm = ${day}-${month}-${annee} ${hour} : ${min}`)
console.log(`JJ/MM/JJ AAAA : mm = ${day}/${month}/${annee} ${hour} : ${min}`)