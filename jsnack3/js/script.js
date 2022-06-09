// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// // START

// GENERO UNA ARRAY VUOTA DOVE INSERIRE I NUMERI
let userNumbers = [];
for(let i=0; i < 10; i++) {
    // CHIEDO ALL'UTENTE 10 NUMERI
    userNumbers.push(prompt('inserisci un numero'));
     
    console.log(userNumbers)
}

let sumNumbers = 0;
// LEGGO I NUMERI
for(let i= 0; i < userNumbers.length; i++) {
    // LI CONVERTO IN LINGUA MACCHINA 
    let addendsNum = parseInt(userNumbers[i]);
    // SOMMO
    let sumResult = sumNumbers += addendsNum;
    // MOSTRO RISULTATO
    console.log(sumResult)
}


