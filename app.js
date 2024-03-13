//calcola il prezzo del biglietto del treno

//chiedi all'utente quanti km deve fare
//chiedi all'utente la sua età

//calcola prezzo base --> moltiplica i km * 0.21 al km
//SE l'utente ha meno di 18 anni ha uno sconto del 20%
//ALTRIMENTI SE l'utente ha più di 65 anni ha uno sconto del 40%
//ALTRIMENTI non ha nessuno sconto
//prezzo finale è prezzo base - sconto (se c'è)

const pricePerKm = 0.21

const km = parseInt(prompt ("Quanti km vuoi percorrere?"));
console.log(km, typeof km)

const eta = parseInt(prompt ("Quanti anni hai?"))
console.log(eta, typeof eta)

let prezzoBase = km * pricePerKm
console.log(prezzoBase)

let sconto = 0

if (eta < 18) {
    sconto = 0.2
} else if (eta > 65) {
    sconto = 0.4
}

let price = prezzoBase - prezzoBase * sconto 
console.log(price.toFixed(2)) //stringa | null