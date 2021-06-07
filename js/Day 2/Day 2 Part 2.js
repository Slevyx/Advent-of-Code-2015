const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split("\n");
const GIFTS_REGEX = /^(\d+)x(\d+)x(\d+)$/;

const requiredRibbon = (dim) => {
    dim.sort((a, b) => { return a-b });
    let ribbon = 2*dim[0] + 2*dim[1] + (dim[0]*dim[1]*dim[2]);
    return ribbon;
};

let ribbon = 0;

for(i = 0; i < INPUT.length; i++) {
    let giftParams = INPUT[i].match(GIFTS_REGEX);
    let l = parseInt(giftParams[1]);
    let w = parseInt(giftParams[2]);
    let h = parseInt(giftParams[3]);
    ribbon += requiredRibbon([l, w, h]);
}

console.log(ribbon);