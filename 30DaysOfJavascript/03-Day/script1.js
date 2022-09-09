//  Objet date

const now = new Date()
console.log(now)

// Obtenir l'année complète
console.log(now.getFullYear())

// Obtenir le mois 
console.log(now.getMonth())

// Obtenir la date du mois
console.log(now.getDate())

// Jour d'obtention
// Obtenir le jour de la semaine sous forme de nombre (0-6)
// Dimanche est 0, Lundi est 1 et Samedi est 6
console.log(now.getDay())

// Obtenir des heures
console.log(now.getHours())

// Obtenir des minutes
console.log(now.getMinutes())

// Obtenir des secondes
console.log(now.getSeconds())

// Obtenir du temps
// Obtient en seconde depuis le 1er janvier 1970
console.log(now.getTime())

// Utilisation de date.now
const allSeconds = Date.now()
console.log(allSeconds)

// Formatons ces valeurs dans un format d'heure lisible par l'homme.
const year = now.getFullYear()
const month = now.getMonth() + 1
const datee = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(`${datee}/${month}/${year} ${hours}:${minutes}`)