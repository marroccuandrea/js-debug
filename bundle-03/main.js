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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    }
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter( (auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter( (auto) => auto.type.toLowerCase() !== 'benzina' && auto.type !== 'diesel');

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

// 1. Questo codice serve per organizzare in tre array i vari elementi nel primo array, dividendoli per tipologia di carburante
// 2. Ci sono errori di sintassi, in un oggetto dell'array manca la virgola dopo la graffa, le arrow function non sono scritte correttamente, alla riga 67 il maggiore era prima dell'uguale
// 3. C'è un errore logico alla riga 71, l'operatore OR || è sbagliato, deve essere and &&, in più bisogna mettere .toLowerCase, siccome i tipi di carburante sono scritti alcuni con la lettera iniziale maiuscola, alcuni con lettere minuscole