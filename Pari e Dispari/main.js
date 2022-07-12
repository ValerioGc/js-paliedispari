let user_input = prompt('Scrivi Pari o Dispari');
user_input = user_input.toLowerCase();
console.log("L'utente ha scelto" + " " + user_input);

while ((!isNaN(user_input)) /* (user_input !== 'pari') || (user_input !== 'dispari')*/) {
    // Controllo input stringautente
    alert('Scrivi pari o dispari');
    user_input = prompt('Scrivi Pari o Dispari');
}
const user_number = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log("L'utente ha scelto il numero" + " " + user_number);
while (isNaN(user_number)) {
    // Controllo input numerico utente
    alert('Inserisci un numero compreso tra 1 e 5!');
    user_number = parseInt(prompt('Scegli un numero da 1 a 5'));
}

const pc_number = Math.floor(Math.random() * 5 + 1);
console.log(`Il numero del PC è ${pc_number}`);
const user_pc_sum = sum(pc_number, user_number);
console.log("La somma dei due numeri è" + " " + user_pc_sum);
const final_result = pariDispari(user_pc_sum);
console.log('Il risultato finale è' + ' ' + final_result);

if (final_result == user_input) {
    final_value = 'Hai vinto';
} else {
    final_value = 'Hai perso';
}
alert(`${final_value}! Hai scelto ${user_input}. La somma dei numeri è ${final_result}`)


// Funzioni
function sum(number1, number2) {
    let somma = parseInt(pc_number + user_number);
    return somma;
}
function pariDispari(somma) {
    if (somma % 2 === 0) {
        result = 'pari';
    } else if (somma % 2 > 0) {
        result = 'dispari';
    }
    return result;
}
