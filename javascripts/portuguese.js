"use strict";

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
  console.log(translatedPhrase);
  
}



module.exports = translateToPortuguese;
