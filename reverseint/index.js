// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let is_neg = false;

    if (n<0) {
        is_neg = true;
        n = n*(-1);
    }

    let result = Number(String(n).split('').reverse().join(''));

    if (is_neg) {
        result = result*(-1);
    }

    return result;
}

module.exports = reverseInt;
