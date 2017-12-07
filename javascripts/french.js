"use strict";

const printPhrase = require('./printtodom');

let frenchObj = {
    Merry: "Joyeux",
    Christmas: "Noel",
    Harry: "Harriet",
    Potter:"Porteur"
};

function translateToFrench(arrayEng) {
    let translatedPhrase = "";
    arrayEng.forEach(function(word) {
        translatedPhrase += `${frenchObj[word]} `;
    });
    printPhrase(translatedPhrase);
}
module.exports = translateToFrench;