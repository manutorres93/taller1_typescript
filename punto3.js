function esPalindromo(phrase) {
    var phraseLower = phrase.toLocaleLowerCase();
    //const phraseWithoutSpaces= phraseLower.replace(/\s/g, '');
    var phraseWithoutSpaces = phraseLower.split(' ').join('');
    var phraseBackwards = phraseWithoutSpaces.split('').reverse().join('');
    if (phraseWithoutSpaces === phraseBackwards) {
        console.log("Es un palíndromo");
    }
    else {
        console.log("No es un palíndromo");
    }
}
esPalindromo("hola como estas");
esPalindromo("ojo");
esPalindromo("somos o no somos");
