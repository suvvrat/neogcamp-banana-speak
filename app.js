
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input ;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server: try again after sometime");
}

function clickHandler(){
    //taking input
    var inputText = txtInput.value;
    //calling server for processing  
    fetch (getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; //output
            })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click",  clickHandler )


// live excercise
// 1. document.querySelector("textarea");
// 2. document.querySelector(".btn-primary");
// 3. document.querySelector("#input-btn");
// 4. "input[name='translator']"