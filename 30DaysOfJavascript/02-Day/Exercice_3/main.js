let phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(phrase.match(pattern))

let phrase1 = 'You cannot end a sentence with because because because is a conjunction'
let pattern1 = /because/gi
console.log(phrase1.match(pattern1))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let re = /[@#$%&;]/g
console.log(sentence.replace(re,''))

let string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(string.match(/\d+/g))
let nmbString = string.match(/\d+/g)
intNmb1 = parseInt(nmbString[0])
intNmb2 = parseInt(nmbString[1])
intNmb3 = parseInt(nmbString[2])
console.log(intNmb1, intNmb2, intNmb3)
revAnnTotal = (intNmb1*12 + intNmb2 + intNmb3*12)
console.log(`Le revenu annuel est ${revAnnTotal} euro`)