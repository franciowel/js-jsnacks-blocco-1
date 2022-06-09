// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// // START

// GENERO UNA LINEA DI NUMERI
const myNumbers = [1, 2, 3, 4, 5, 6];

// LEGGO I NUMERI
for(let i = 0; i < myNumbers.length; i++) {
    let printNumber = myNumbers[i];
    //DIVIDO I NUMERI PARI DA QUELLI DISPARI
    if(printNumber % 2 === 0) {
        // STAMPO IN PAGINA I NUMERI
        // se pari stampo in green
        document.getElementById('green').innerHTML += printNumber + ' ' ;
    } else {
        // se dispari spampo in red
        document.getElementById('red').innerHTML += printNumber + ' ' ;
    }

}

