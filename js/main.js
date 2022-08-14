const textInput = document.getElementById('textInput')
const resultImg = document.getElementById('resultImg')
const resultTitle = document.getElementById('resultTitle')
const resultInput = document.getElementById('resultInput')

const primaryButton = document.getElementById('button-primary')
const secondaryButton = document.getElementById('button-secondary')
const copyButton = document.getElementById('copy-button')

function validation(e) {
    key = e.keyCode || e.which
    
    if(key == 8 || key == 32) {
        return true
    }

    pattern = /[a-z]/
    allow_key = String.fromCharCode(key)
    return pattern.test(allow_key)
}

textInput.addEventListener('keyup', () => {
    if(textInput.value.length == 0) {
        resultImg.style.display = "block"
        resultTitle.style.display = "block"
        resultTitle.innerText = 'Ningun mensaje fue encontrado'
        resultInput.innerText = 'Ingresa el texto que desees encriptar o desencriptar'
        copyButton.style.display = 'none'
    }else if (textInput.value.length >= 1) {
        resultTitle.innerText = 'Puedes encriptar o desencriptar tu mensaje'
        resultInput.innerText = textInput.value
    }
})

primaryButton.onclick = () => {
    const newResult = textInput.value
    encrypt(newResult)
}

secondaryButton.onclick = () => {
    const newResult = textInput.value
    decrypt(newResult)
}

copyButton.onclick = () => {
    var input = document.createElement('input')
    input.setAttribute('value', resultInput.innerText);
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    copyButton.style.background = "linear-gradient(45deg, transparent 5%, #5abf60 5%)"
    copyButton.style.boxShadow = "6px 0px 0px #77DD77"
    copyButton.innerText = "Copiado"
}

const encrypt = (newResult) => {
    let decryptKeys = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi]
    let encryptKeys = ['enter', 'imes', 'ai', 'ober', 'ufat']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(decryptKeys[i], encryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensaje ha sido encriptado:'
    resultInput.innerText = newResult
    resetCopyButtonStyles()
}

function decrypt(newResult) {
    let encryptKeys = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
    let decryptKeys = ['e', 'i', 'a', 'o', 'u']

    for (i = 0; i < encryptKeys.length; i++) {
        newResult = newResult.replace(encryptKeys[i], decryptKeys[i])
    }

    resultTitle.innerText = 'Tu mensaje ha sido desencriptado:'
    resultInput.innerText = newResult
    resetCopyButtonStyles()
}

function resetCopyButtonStyles() {
    copyButton.style.display = 'flex'
    copyButton.style.background = "linear-gradient(45deg, transparent 5%, var(--primary) 5%)"
    copyButton.style.boxShadow = "6px 0px 0px var(--secondary)"
    copyButton.innerText = "Copiar"
}