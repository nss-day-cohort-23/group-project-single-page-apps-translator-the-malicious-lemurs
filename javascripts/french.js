"use strict";

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
    console.log(translatedPhrase);
}
module.exports = translateToFrench;