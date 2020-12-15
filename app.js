var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var copyBtn = document.querySelector("#copy-btn");

var apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

// var apiUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return apiUrl + "?" + "text=" + input
}

// function to handle  error
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    // getting text
    var inputText = txtInput.value;

    // api Call
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


// for copying the text

copyBtn.addEventListener("click", () => {
    // console.log("clicked");
    var outputDiv = document.getElementById("output")

    outputDiv.select();
    outputDiv.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Copied the text: "+outputDiv);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + outputDiv.value;
});



copyBtn.addEventListener('mouseover', () => {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
});