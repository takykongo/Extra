let firstName = 'KONGO'
let lastName = 'Abdoul Malick'
let country = `Côte d'Ivoire`
let city = 'Abidjan'
let age = 24
let isMarried = false
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried)

console.log(`Vérifions si type de '10' est égal au type de 10:`, '10' === 10)

console.log(`Vérifier si parseInt('9.8') est égal à 10:`, parseInt('9.8') == 10)

console.log(`Écrivez trois instructions JavaScript qui fournissent une valeur de vérité.`, 1 == true, 1 == true, true == true )

console.log(`Écrivez trois instructions JavaScript qui fournissent une valeur fausse`, 0 == true, '' == true, false == true )

console.log(`4 > 3 , true`, 4 > 3)
console.log(`4 >= 3 , true`, 4 >= 3)
console.log(`4 < 3 , false`, 4 < 3)
console.log(`4 <= 3 , false`, 4 <= 3)
console.log(`4 == 4 , true`, 4 == 4)
console.log(`4 === 4 , true`, 4 === 4)
console.log(`4 != 4 , false`, 4 != 4)
console.log(`4 !== 4 , false`, 4 !== 4)
console.log(`4 != '4' , false`, 4 != '4')
console.log(`4 == '4' , true`, 4 == '4')
console.log(`4 === '4' , false`, 4 === '4')
let py = 'python'.length, ja = 'jargon'.length
console.log(`La longueur de python est ${py} et la valeur de jargon est ${ja}`, `python est différent de jargon, ${py != ja}`)

console.log(`4 > 3 && 10 < 12 , true`, 4 > 3 && 10 < 12)
console.log(`4 > 3 && 10 > 12 , false`, 4 > 3 && 10 > 12)
console.log(`4 > 3 || 10 < 12 , true`, 4 > 3 || 10 < 12)
console.log(`4 > 3 || 10 > 12 , true`, 4 > 3 || 10 > 12)
console.log(`!(4 > 3) , false`, !(4 > 3))
console.log(`!(4 < 3) , true`, !(4 < 3))
console.log(`!(false) , true`, !(false))
console.log(`!(4 > 3 && 10 < 12) , false`, !(4 > 3 && 10 < 12))
console.log(`!(4 > 3 && 10 > 12) , true`, !(4 > 3 && 10 > 12))
console.log(`!(4 === '4') , true`, !(4 === '4'))
console.log(`Il n'y a pas de "on" dans le dragon et le python` , !('python'.includes('on')) , !('jargon'.includes('on')))

console.log(`L'objet Date`)

const now = new Date()
console.log(`L'année d'aujourd'hui est: ${now.getFullYear()}`)
console.log(`Le mois d'aujourd'hui est: ${now.getMonth()}`)
console.log(`La date d'aujourd'hui est: ${now.getDate()} / ${now.getMonth()+1} / ${now.getFullYear()}`)
console.log(`Le jour d'aujourd'hui en nombre est: ${now.getDay()}`)
console.log(`Les horaires de maintenant: ${now.getHours()}h:${now.getMinutes()}m:${now.getSeconds()}s`)
console.log(`Le nombre de secondes écoulées depuis le 01 janvier 1970: ${now.getTime()}`)