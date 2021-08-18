// console.log("script is working from a different file");

// var username = prompt("give me your username");
// var welcomeMessage = "this script works ! " + username ;
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);  
// console.log(btnTranslate);

function clickHandler(){
    console.log("clicked!");
    console.log("input",txtInput.value);
};


btnTranslate.addEventListener("click",  clickHandler )