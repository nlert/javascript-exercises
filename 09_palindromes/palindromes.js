const palindromes = function (string) {
    let stripString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                            .replace(/\s/g, "")
                            .toUpperCase();

    for (let i = 0; i < stripString.length; i++) {
        if (stripString[i] !== stripString[stripString.length - 1 - i]) {
            return false;
        } else {
            continue;
        }
    }

    return true;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
