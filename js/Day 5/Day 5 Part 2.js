const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');

const isNiceWord = (word) => {
    let len = word.length - 2;
    let hasSameLettersWithGap = false;
    let hasAtLeastOneRep = false;
    for(idx = 0; idx < len; idx++){
        let control = word.slice(idx, idx + 2);
        let tail = word.slice(idx + 2, word.length);
        hasAtLeastOneRep = hasAtLeastOneRep || tail.indexOf(control) !== -1;
        hasSameLettersWithGap = hasSameLettersWithGap || word[idx] === word[idx+2];
    }
    return hasAtLeastOneRep && hasSameLettersWithGap;
};

console.log(INPUT.reduce((niceWords, word) => { return isNiceWord(word) ? niceWords += 1 : niceWords}, 0));