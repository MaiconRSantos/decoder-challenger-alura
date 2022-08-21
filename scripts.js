const leftInput = document.querySelector('.app-left-textarea');
const rightInput = document.querySelector('.app-right-textarea');
const cryptButton = document.querySelector('.btn-crypt');
const decryptButton = document.querySelector('.btn-decrypt');
const copyButton = document.querySelector('.app-copy-button')
const codeMatrix = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]


function btnEncrypt(){
    const encryptedText = encrypt(leftInput.value)
    rightInput.value = encryptedText

    if(rightInput.value !== ''){
        
        rightInput.style.backgroundImage = 'none'
        
    }

}

function btnDecrypt(){
    const decryptedText = decrypt(leftInput.value)
    rightInput.value = decryptedText
    
}

function copyToClipboard(){
    
    rightInput.select();
    rightInput.setSelectionRange(0, 9999)

    navigator.clipboard.writeText(rightInput.value)
}


function encrypt(encryptedString){

    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++){

        if(encryptedString.includes(codeMatrix[i][0])){
            encryptedString = encryptedString.replaceAll(codeMatrix[i][0], codeMatrix[i][1])
        }

    }

    return encryptedString

}

function decrypt(decryptedString) {

    decryptedString = decryptedString.toLowerCase();

    for(let i = 0; i < codeMatrix.length; i++){

        if(decryptedString.includes(codeMatrix[i][0])){
            decryptedString = decryptedString.replaceAll(codeMatrix[i][1], codeMatrix[i][0])
        }

    }

    return decryptedString

}


cryptButton.addEventListener('click', btnEncrypt)
decryptButton.addEventListener('click', btnDecrypt)
copyButton.addEventListener('click', copyToClipboard)