"use strict";

function printToDom(phrase) {
    let cardHolder = document.getElementById("card-holder");
    let outputDiv = document.createElement("div");
    let content = document.createTextNode(phrase);
    outputDiv.setAttribute("class", "card");
    outputDiv.appendChild(content);
    cardHolder.appendChild(outputDiv);
}

module.exports = printToDom;