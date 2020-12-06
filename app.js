let txtInput = document.querySelector('.input');
let txtOutput = document.querySelector('.output');
let translateBtn = document.querySelector('.btn');


let serverURL = 'https://api.funtranslations.com/translate/minion.json';

function doTranslate(input) {
    return serverURL + '?' + 'text=' + input;
}

function errorHandler(error) {
    alert("The system is down right now, Try again after sometime");
}

function talkBanana() {
    fetch(doTranslate(txtInput.value))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            txtOutput.innerHTML = translatedText;
        }).catch(errorHandler);
}

translateBtn.addEventListener('click', talkBanana);
