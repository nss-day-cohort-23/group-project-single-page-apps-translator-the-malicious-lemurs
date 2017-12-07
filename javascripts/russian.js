"use strict";


let russianObj = {
    Merry: "Merri",
    Christmas: "Khristmas",
    Harry:"Garri",
    Potter: "Gonchar"
};

function translateToRussian (arrayEng){
    let translatedPhrase = "";
    arrayEng.forEach(function(word){
        translatedPhrase += `${russianObj[word]} `;
    });
    console.log(translatedPhrase);

    }

module.exports = translateToRussian;