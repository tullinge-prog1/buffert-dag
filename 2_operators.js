
// Refaktorisering: ändra koden, utan att ändra vad programmet gör

// Aritmetiska operatorer: +-*/
// 50 + 30 - z är ett exempel på ett uttryck (expression)

const secondsInAnHour = 60 * 60
const secondsInADay = secondsInAnHour * 24
const secondsInAYear = secondsInADay * 365

console.log("Sekunder på en timme: " + secondsInAnHour)
console.log("Sekunder på en dag: " + secondsInADay)
console.log("Sekunder på ett år: " + secondsInAYear)
console.log("Det är fler sekunder på ett år än på en dag: " + (secondsInAYear > secondsInADay))
// Sekunder på en timme: 3600
// Sekunder på en dag: 86400
// Sekunder på ett år: 31536000
// Det är fler sekunder på ett år än på en dag: true

// "p" "P" är olika characters (bokstäver/tecken)

const user1 = "pelle"
const user2 = "Pelle"
const isSame = user1 === user2
const isNotSameUser = !isSame

console.log("Är samma användare: " + isSame)

// Är samma användare: false
