const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString();

let floors = 0;

for(i = 0; i < INPUT.length; i++) {
    if(INPUT.charAt(i) === '(') {
        floors++;
    } else {
        floors--;
    }
}

console.log(floors);