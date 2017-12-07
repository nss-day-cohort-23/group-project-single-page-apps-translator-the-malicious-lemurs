
"use strict";

const printPhrase = require('./printtodom');


let spanObj = {
    Merry: "Feliz" ,
    Christmas: "Navidad",
    Harry: "Enrique",
    Potter: "Papas"
};
    
function translateToSpanish(arrayEng) {
    let translatedPhrase = "";
    arrayEng.forEach(function(word){
        translatedPhrase += `${spanObj[word]} `;
    });
    translatedPhrase = translatedPhrase.slice(0, -1) + "!";
    printPhrase(translatedPhrase);
    }

    

module.exports = translateToSpanish;

