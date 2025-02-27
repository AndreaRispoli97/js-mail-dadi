//Lista con email

const listaMail = [
    'Andrea@gmail.it',
    'Gaetano@gmail.it',
    'Stefano@gmail.it',
    'Alessio@gmail.it',
    'Esteban@gmail.it',
    'Marco@gmail.it',
    'Fabio@gmail.it',
    'Enrico@gmail.it',
    'Willy@gmail.it',
    'Vincenzo@gmail.it'
];

//Chiedere all'utente la sua email

const emailUtente = prompt('Inserisci la tua email');
console.log(emailUtente);

// Variabile per trovare l'email nella lista

let emailTrovata = false;

// Ciclo che scorre l'array

for (let i = 0; i < listaMail.length; i++) {
    if (listaMail[i] === emailUtente) {
        emailTrovata = true;
        break;
    }
}

//Messaggio di output

if (emailTrovata) {
    console.log('Benvenuto!!');
} else {
    console.log('Se ne vada!!!');
}

