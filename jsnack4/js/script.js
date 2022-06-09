// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// CREO UNA ARRAY VUOTA
let yourNumbers = [];
for(let i=0; i < 6; i++) {
    // CHIEDO ALL'UTENTE 6 NUMERI
    yourNumbers.push(prompt('Inserisci un numero. lo farai 6 volte' ));
}

let oddContain = []
// LEGGO I NUMERI
for(i=0; i < yourNumbers.length; i++) {
    // LI CONVERTO IN LINGUA MACCHINA 
    let checkNumb = parseInt(yourNumbers[i]);
    // CONTROLLO NON SIANO PARI
    if(checkNumb % 2 !== 0) {
        let oddNumbers = checkNumb;
        // AGGIUNGO I NUMERI DISPARI ALL'ARRAY
        oddContain.push(oddNumbers += ' ');
    }
}

// MOSTRO RISULTATO
console.log(oddContain)