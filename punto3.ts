function esPalindromo (phrase:string){

    const phraseLower= phrase.toLocaleLowerCase()

    //const phraseWithoutSpaces= phraseLower.replace(/\s/g, '');

    const phraseWithoutSpaces= phraseLower.split(' ').join('');

    const phraseBackwards= phraseWithoutSpaces.split('').reverse().join('');

    if (phraseWithoutSpaces === phraseBackwards) {
        console.log("Es un palíndromo");
        
    } else {
        console.log("No es un palíndromo");
        
        
    }
   
    

}

esPalindromo("hola como estas")
esPalindromo("ojo")
esPalindromo("somos o no somos")