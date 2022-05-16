const { alphabet } = require('./Utils.js')

function Encrypt(message, key) {

    key = atob(key)
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
        let encryption = [];
        message.split("").forEach(letter => {
            let indexLetter = alphabet.indexOf(letter);
            encryption.push(encryptedAlphabet[indexLetter]);
        });
        return btoa(encryption.join(""));

    }
    catch (ex) {
        console.log(ex)
    }
}

module.exports = { Encrypt }