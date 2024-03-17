//calcola il prezzo del biglietto del treno

//chiedi all'utente quanti km deve fare
//chiedi all'utente la sua età

//calcola prezzo base --> moltiplica i km * 0.21 al km
//SE l'utente ha meno di 18 anni ha uno sconto del 20%
//ALTRIMENTI SE l'utente ha più di 65 anni ha uno sconto del 40%
//ALTRIMENTI non ha nessuno sconto
//prezzo finale è prezzo base - sconto (se c'è)

const buttonElement = document.getElementById("submit")
console.log(buttonElement)


// recupera elementi del dom fuori dall'event listener
const kmElement = document.getElementById("km")
console.dir(kmElement)

const ageElement = document.getElementById("age")
console.dir(ageElement)

const resultElement = document.getElementById("result")
console.dir(resultElement)

buttonElement.addEventListener("click", function() {
    console.log("click")

    const km = parseInt(kmElement.value) //string!!! fai parseInt o metti il + davanti che trasforma in numero
    console.log(km)

    const age = parseInt(ageElement.value)
    console.log(age)

    const pricePerKm = 0.21
    const prezzoBase = km *pricePerKm
    console.log(prezzoBase)
     
    let sconto = 0
    
    if (age < 18) {
    sconto = 0.2
    } else if (age > 65) {
    sconto = 0.4
    }

    let price = prezzoBase - prezzoBase * sconto 
    console.log(price.toFixed(2)) //stringa | null

    resultElement.innerHTML = "Prezzo finale " + price + "€"
    resultElement.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th>Km</th>
        <th>Age</th>
        <th>sconto</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${km} km</td>
        <td>${age}</td>
        <td>${sconto}€ </td>
        <td>${price} €</td>
      </tr>
    </tbody>
  </table>
  `
})
