let user_input = String(prompt('Inserisci una parola'));
user_input = user_input.toLowerCase();
let usr = reverse(user_input)
const control = controlP(user_input);

alert(control)


// Funzioni
function controlP (word) {
    if (user_input == usr ) {
        result = 'La parola è Palindroma';
    } else {
        result = 'La parola non è Palindroma';
    }
    return result;
}
function reverse(text) {
    let singleLetters = text.split(""); 
    let reverseLetters = singleLetters.reverse();
    let joinLetters = reverseLetters.join(""); 
    return joinLetters;
}