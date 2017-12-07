"use strict";


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

    console.log(translatedPhrase);
    }

    

module.exports = translateToSpanish;

