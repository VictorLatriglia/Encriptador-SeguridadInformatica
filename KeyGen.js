const { generateRandomNumber, alphabet } = require('./Utils.js')
function CreateKey() {
    let primaryNumber = generateRandomNumber(2, 10);
    let secondaryNumber = generateRandomNumber(7, alphabet.length - 1);
    let numbersAmmount = primaryNumber * 3;
    let numbersArray = [];
    for (var i = 0; i < numbersAmmount; i++) {
        if (i == primaryNumber) {
            numbersArray.push(secondaryNumber);
        } else {
            numbersArray.push(generateRandomNumber(2, 10));
        }
    }
    let secondaryAlphabet = [];
    for (var i = secondaryNumber - 1; i < alphabet.length; i++) {
        if (alphabet[i]) {
            secondaryAlphabet.push(alphabet[i]);
        } else {
            break;
        }
    }
    for (var i = 0; i < secondaryNumber - 1; i++) {
        secondaryAlphabet.push(alphabet[i]);
    }
    return btoa(primaryNumber + "#" + numbersArray.join("&") + "#" + secondaryAlphabet.join(""));
}
module.exports = { CreateKey }