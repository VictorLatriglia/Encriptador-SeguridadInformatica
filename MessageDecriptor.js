const { alphabet } = require('./Utils.js')

function Decrypt(message, key) {

    key = atob(key);
    message = atob(message);
    
    const data = key.split('#');

    if (data.length != 3)
        throw 'INVALID KEY'
    if (isNaN(data[0]))
        throw 'INVALID KEY'

    let numbersArray = data[1].split('&');
    if (!numbersArray[data[0]] || isNaN(numbersArray[data[0]]))
        throw 'INVALID KEY'

    let secondaryNumber = numbersArray[data[0]];

    if (secondaryNumber > alphabet.length - 1)
        throw 'INVALID KEY'
    
    const encryptedAlphabet = data[2].split("");
    try {
        message = message.toLowerCase();
        let decryption = [];
        message.split("").forEach(letter => {
            let indexLetter = encryptedAlphabet.indexOf(letter);
            decryption.push(alphabet[indexLetter]);
        });

        return decryption.join("");

    }
    catch (ex) {
        console.log(ex)
    }
}

module.exports = { Decrypt }