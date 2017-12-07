"use strict";

// const russianTrans = require('./russian'); 
const spanishTrans = require('./spanish'); 
const portugueseTrans = require('./portuguese'); 
// const frenchTrans = require('./french'); 



let transBtn = document.getElementById("trans");
let radioBtns = document.getElementsByClassName("radio");


let funcArray = ["russianTrans", spanishTrans, portugueseTrans, "frenchTrans"];


transBtn.addEventListener("click", function() {
    console.log(radioBtns);
    for (let i = 0; i < radioBtns.length; i++ ) {
        if (radioBtns[i].checked) {
            funcArray[i](getContent());
        }
    }
});

function getContent() {
    let content = document.getElementById("text-input").value;
    let contentArray = content.split(" ");
    console.log("get content clicked");
    return contentArray;
}

