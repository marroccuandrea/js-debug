/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
checkAge();
console.log(checkAge());

// 1.Questo codice serve a capire se l'utente è maggiorenne o minorenne
// 2. Non ci sono errori di sintassi
// 3. Manca il return della funzione, senza di esso non si può portare il valore fuori da essa, in più message deve essere una let, sennò non può essere modificata

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// 1. Questo codice serve per stampare il numero dei colori presenti nell'array
// 2. C'è un errore di sintassi riga 35, colors.lenght è scritto sbagliato(length)
// 3. Non ci sono errori logici


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1. Questo codice somma 12 ad un numero inserito a piacere dall'utente
// 2. Non ci sono errori di sintassi
// 3. C'è un errore logico, bisogna specificare che il numero inserito dall'utente sia un numero effettivo e non una stringa, con parseInt


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1. Questo codice verifica chiedendo all'utente di inserire la mail, se è nell'elenco di quelle che sono ammesse
// 2. Ci sono due errori di sintassi, nei valori booleani true e false sono scritti con le virgolette, devono essere scritti senza
// 3. Non ci sono errori di logica


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
