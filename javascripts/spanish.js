"use strict";


let spanObj = {
    Merry: "Feliz" ,
    Christmas: "Navidad",
    Harry: "Enrique",
    Potter: "Potter"
};
    
function translateToSpanish(arrayEng) {
    let translatedPhrase = "";
    arrayEng.forEach(function(word){
        translatedPhrase += `${spanObj[word]} `;
    });
    console.log(translatedPhrase);
    }

    

module.exports = translateToSpanish;

