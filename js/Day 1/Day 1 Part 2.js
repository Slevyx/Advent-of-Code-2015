const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString();

let position = 0;
let floor = 0;

for(i = 0; i < INPUT.length; i++) {
    if(INPUT.charAt(i) === '(') {
        floor++; 
    } else {
        floor--;
    }
    position++;
    if (floor === -1){
        break;
    }
}

console.log(position);