const crypto = require('crypto');
const INPUT = 'ckczppom';

const md5 = data => crypto.createHash('md5').update(data).digest('hex');
const startsWithSixZeros = data => data.slice(0, 6) === '000000';

let counter = 0;
while (!startsWithSixZeros(md5(`${INPUT}${counter}`))){
    counter++;
}

console.log(counter);