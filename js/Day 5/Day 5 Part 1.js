const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');
const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const DOUBLE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => letter + letter);
const FORBIDDEN_LETTERS = ['ab', 'cd', 'pq', 'xy'];

const isNiceWord = () => {
    return INPUT.reduce((niceWords, word) => !hasForbiddenLetters(word) && hasDoubleLetters(word) && hasThreeVowels(word) ? ++niceWords : niceWords, 0);
}

const hasThreeVowels = (word) => {
   return word.split('').reduce((vowels, char) => VOWELS.indexOf(char) === -1 ? vowels : vowels += 1, 0) >= 3;
}

const hasDoubleLetters = (word) => {
    return DOUBLE_LETTERS.some(doubleLetter => word.indexOf(doubleLetter) !== -1);
}

const hasForbiddenLetters = (word) => {
    return FORBIDDEN_LETTERS.some(forbiddenLetters => word.indexOf(forbiddenLetters) !== -1);
}

console.log(isNiceWord());