"use strict";

// const russianTrans = require('./russian'); 
const spanishTrans = require('./spanish'); 
<<<<<<< HEAD
const portugueseTrans = require('./portuguese'); 
=======
// const portugueseTrans = require('./portuguese'); 
>>>>>>> 910cdc51577c9c4018d11ec8e37d832a0bc0a461
// const frenchTrans = require('./french'); 



let transBtn = document.getElementById("trans");
let radioBtns = document.getElementsByClassName("radio");


<<<<<<< HEAD
let funcArray = ["russianTrans", spanishTrans, portugueseTrans, "frenchTrans"];
=======
let funcArray = ["russianTrans", spanishTrans, "portugueseTrans", "frenchTrans"];
>>>>>>> 910cdc51577c9c4018d11ec8e37d832a0bc0a461


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

