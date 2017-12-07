"use strict";

const printPhrase = require('./printtodom');


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
    printPhrase(translatedPhrase);

    }

module.exports = translateToRussian;