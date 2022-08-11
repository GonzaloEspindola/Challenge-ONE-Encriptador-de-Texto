const textInput = document.getElementById('textInput');
const resultImg = document.getElementById('resultImg');
const resultTitle = document.getElementById('resultTitle');
const resultInput = document.getElementById('resultInput');

const primaryButton = document.getElementById('button-primary');
const secondaryButton = document.getElementById('button-secondary');
const copyButton = document.getElementById('copy-button');

textInput.addEventListener('keyup', () => {
    if(textInput.value.length == 0) {
        resultImg.style.display = "block";
        resultTitle.style.display = "block";
        resultTitle.innerText = 'Ningun mensaje fue encontrado'
        resultInput.innerText = 'Ingresa el texto que desees encriptar o desencriptar';
    }else if (textInput.value.length >= 1) {
        resultTitle.innerText = 'Parece que hemos encontrado algo'
        resultInput.innerText = textInput.value;
    }
})

primaryButton.onclick = () => {
    const newResult = textInput.value;
    encrypt(newResult)
}

secondaryButton.onclick = () => {
    const newResult = textInput.value;
    decrypt(newResult)
}

const encrypt = (newResult) => {
    let decryptKeys = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi]
    let encryptKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(decryptKeys[i], encryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensage ha sido encriptado:'
    resultInput.innerText = newResult;
}

function decrypt(newResult) {
    let encryptKeys = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
    let decryptKeys = ['e', 'i', 'a', 'o', 'u']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(encryptKeys[i], decryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensage ha sido desencriptado:'
    resultInput.innerText = newResult;
}