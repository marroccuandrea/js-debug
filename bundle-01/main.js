/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 1. Questo codice dovrebbe generare numeri da 0 a 4 (Conta fino a 5 ma non si vedrà perchè al 5 si interrompe il ciclo)
// 2. Non sono presenti errori di sintassi
// 3. Sono presenti errori logici, infatti per funzionare la condizione deve essere : i < 5


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

addIfEven();

// 1. Questo codice esprime una funzione che selezionerà solo numeri pari e lo restituirà aggiungendo 5
// 2. Ci sono errori di sintassi, nell'operatore: num % 2 = 0, risulterà sempre pari e quindi aggiungerà sempre 5, anche ai numeri dispari.
// 2. La soluzione sarà mettere due == anzichè uno solo
// 3. La funzione non viene richiamata


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

loopToFive();
// 1. Questo esercizio esprime una funzione che genera numeri da 0 a 4
// 2. Sono presenti errori di sintassi, al posto delle virgole nel for ci va il punto e virgola
// 3. La funzione non viene richiamata


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


// 1. Questa funzione dovrebbe restituire solo i numeri pari all'interno dell'array
// 2. Ci sono errori di sintassi nella riga 51, dopo i++ non va il punto e virgola
// 2. Un altro errore di sintassi è nella riga 52, ci vuole il simbolo di uguaglianza, non un semplice uguale, anche il punto e virgola dopo l'if non è corretto
// 3. numbers.length -1 è sbagliato perchè non mi darà mai il numero 8, il return deve esesere spostato fuori dall'if, infine numbers nell'if andava messo a indice di i