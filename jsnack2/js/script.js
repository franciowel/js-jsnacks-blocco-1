// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero.

// // START

// CHIEDO UN NUMERO DI QUATTRO CIFRE ALL'UTENTE
let yourNumber = prompt('digita un numero di 4 cifre');

let sommaNum = 0;
// LEGGO IL NUMERO
for(let i = 0; i < yourNumber.length; i++) {
    // LO TRASFORMO IN LINGUA MACCHINA
    let singleNumber = parseInt(yourNumber[i]);
    // PROCEDO CON LA SOMMA
    let sumResult = sommaNum += singleNumber;
    // MOSTRO IL RISULTATO
    console.log(sumResult)
}

