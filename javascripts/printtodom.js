"use strict";

function printToDom(phrase) {
    let cardHolder = document.getElementById("card-holder");
    cardHolder.innerHTML = phrase;
    speakPhrase(phrase);
}

function speakPhrase(phrase) {    
    var msg = new SpeechSynthesisUtterance(`${phrase}`);
    window.speechSynthesis.speak(msg);
}

module.exports = printToDom;