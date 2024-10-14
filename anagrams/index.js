// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function process(string)
{
    string = string.toLowerCase();
    string = string.replace(/[^a-zA-Z]/g, "");
    string = string.split('').sort().join('');

    return string
}

function anagrams(stringA, stringB) 
{

    if (process(stringA)===process(stringB))
    {
        return true;
    }
    else return false;

}

module.exports = anagrams;
