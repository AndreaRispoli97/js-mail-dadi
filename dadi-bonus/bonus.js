// Creo un prompt per chiedere all'utente il numero scelto

let numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 6'));
console.log(numeroUtente);

// Creo una variabile per il numero del computer

let numeroComputer = Math.floor(Math.random() * 6 + 1);
console.log(numeroComputer);

// Creo un if per il confronto

if (numeroUtente > numeroComputer) {
    console.log('Hai vinto!');
} else if (numeroComputer > numeroUtente) {
    console.log('Hai perso!');
} else {
    console.log('Pareggio!');
}