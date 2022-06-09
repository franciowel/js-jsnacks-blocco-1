// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// // START
let userNumber = 0;
for(let i=0; i < 10; i++) {
    let userNumber = prompt('inserisci un numero');

    let sumNumber = [];

    sumNumber.push(userNumber += ' ');
    console.log(userNumber)
    console.log(sumNumber)
}

for(let i=0; i < sumNumber.length; i++) {
    let addendNum = parseInt(sumNumber[i]);
    console.log(addendNum)
}