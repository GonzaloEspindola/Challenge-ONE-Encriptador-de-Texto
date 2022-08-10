const textInput = document.getElementById('textInput');
const resultImg = document.getElementById('resultImg');
const resultTitle = document.getElementById('resultTitle');
const resultInput = document.getElementById('resultInput');

const primaryButton = document.getElementById('button-primary');
const secondaryButton = document.getElementById('button-secondary');
const copyButton = document.getElementById('copy-button');

primaryButton.onclick = () => {
    const newResult = textInput.value;
    clean()
    encrypt(newResult)
}

secondaryButton.onclick = () => {
    const newResult = textInput.value;
    clean()
    decrypt(newResult)
}

function clean() {
    resultImg.style.display = "none";
    resultTitle.style.display = "none";
}

const encrypt = (newResult) => {
    let decryptKeys = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi]
    let encryptKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(decryptKeys[i], encryptKeys[i])
    }

    resultInput.innerText = newResult;
}

function decrypt(newResult) {
    let encryptKeys = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
    let decryptKeys = ['e', 'i', 'a', 'o', 'u']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(encryptKeys[i], decryptKeys[i])
    }

    resultInput.innerText = newResult;
}