"use strict";

function printToDom(phrase) {
    let cardHolder = document.getElementById("card-holder");
    cardHolder.innerHTML = phrase;
}

module.exports = printToDom;