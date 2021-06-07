const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split("\n");
const GIFTS_REGEX = /^(\d+)x(\d+)x(\d+)$/;

const requiredPaper = (dim) => {
    let paper = 2*dim[0]*dim[1] + 2*dim[1]*dim[2] + 2*dim[2]*dim[0];
    dim.sort((a, b) => { return a-b });
    paper += (dim[0] * dim[1]);
    return paper;
};

let wrappingPaper = 0;

for(i = 0; i < INPUT.length; i++) {
    let giftParams = INPUT[i].match(GIFTS_REGEX);
    let l = parseInt(giftParams[1]);
    let w = parseInt(giftParams[2]);
    let h = parseInt(giftParams[3]);
    wrappingPaper += requiredPaper([l, w, h]);
}

console.log(wrappingPaper);

