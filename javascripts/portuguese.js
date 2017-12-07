"use strict";

const printPhrase = require('./printtodom');

let keys = {
  Merry: "Feliz",
  Christmas: "Natal",
  Harry: "Rafael",
  Potter: "Potter"
};

function translateToPortuguese (arrayEng) {
  let translatedPhrase = "";
  arrayEng.forEach(function(word){
    translatedPhrase += `${keys[word]} `;
  });
  printPhrase(translatedPhrase);
  
}



module.exports = translateToPortuguese;
