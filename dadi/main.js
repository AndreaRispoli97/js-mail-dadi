// Creo una variabile per il dado dell'utente

let casualeUtente = Math.floor(Math.random() * 6 + 1);
console.log(casualeUtente);

// Creo una variabile per il dado del computer

let casualeComputer = Math.floor(Math.random() * 6 + 1);
console.log(casualeComputer);

// Creo un if per vedere chi ha vinto

if (casualeUtente > casualeComputer) {
    console.log('Hai vinto!');
} else if (casualeComputer > casualeUtente) {
    console.log('Hai perso!');
} else {
    console.log('Pareggio!');
}