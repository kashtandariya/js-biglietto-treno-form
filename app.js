//calcola il prezzo del biglietto del treno

//chiedi all'utente quanti km deve fare
//chiedi all'utente la sua età

//calcola prezzo base --> moltiplica i km * 0.21 al km
//SE l'utente ha meno di 18 anni ha uno sconto del 20%
//ALTRIMENTI SE l'utente ha più di 65 anni ha uno sconto del 40%
//ALTRIMENTI non ha nessuno sconto
//prezzo finale è prezzo base - sconto (se c'è)

// Recupera elementi del DOM fuori dall'event listener

const buttonElement = document.getElementById("submit");
console.log(buttonElement);

const kmElement = document.getElementById("km");
console.dir(kmElement);

const selectElement = document.getElementById("age");
console.dir(selectElement);

const resultElement = document.getElementById("result");
console.dir(resultElement);

buttonElement.addEventListener("click", function() {
    console.log("click");

    const km = parseInt(kmElement.value); // Converti in numero intero
    console.log(km);

    const age = selectElement.value; // Ottieni il valore selezionato
    console.log(age);

    const pricePerKm = 0.21;
    const prezzoBase = km * pricePerKm;
    console.log(prezzoBase);
    
    let sconto = 0;

    if (selectElement === '1') { 
        sconto = 0.2;
    } else if (selectElement === '3') {
        sconto = 0.4;
    } else {
        sconto = 0;
    }

    const price = prezzoBase - prezzoBase * sconto; // Calcolo del prezzo finale
    console.log(price.toFixed(2)); 
    
    // Visualizza il risultato nella pagina
    resultElement.innerHTML = `
    <table class="table">
        <thead>
            <tr>
                <th>Km</th>
                <th>Age</th>
                <th>Sconto</th>
                <th>Prezzo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${km} km</td>
                <td>${age}</td>
                <td>${(sconto * 100).toFixed(0)}%</td> <!-- Mostra lo sconto in percentuale -->
                <td>${price.toFixed(2)} €</td> <!-- Mostra il prezzo con due cifre decimali -->
            </tr>
        </tbody>
    </table>`;
});
