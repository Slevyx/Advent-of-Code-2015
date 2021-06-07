const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');
const GRID = Array.from(Array(1000), () => new Array(1000).fill(0));
const INSTRUCTION_REGEX = /(toggle|turn on|turn off) (\d+),(\d+) through (\d+),(\d+)/

const parseInstructions = (instructionToParse) => {
    instruction = instructionToParse.match(INSTRUCTION_REGEX);
    return {command: instruction[1], x1: parseInt(instruction[2]), y1: parseInt(instruction[3]), x2: parseInt(instruction[4]), y2: parseInt(instruction[5])};
};

const followInstructions = (instr) => {
    switch(instr.command){
        case 'turn on':
            for(let row = instr.x1; row <= instr.x2; row++){
                for(let col = instr.y1; col <= instr.y2; col++){
                    GRID[row][col] = 1;
                }
            }
            break;
        case 'turn off':
            for(let row = instr.x1; row <= instr.x2; row++){
                for(let col = instr.y1; col <= instr.y2; col++){
                    GRID[row][col] = 0;
                }
            }
            break;
        case 'toggle':
            for(let row = instr.x1; row <= instr.x2; row++){
                for(let col = instr.y1; col <= instr.y2; col++){
                    GRID[row][col] = GRID[row][col] === 0 ? 1 : 0;
                }
            }
            break;
    }
    return 
};

INPUT.forEach(instruction => {
    let parsedInstruction = parseInstructions(instruction);
    followInstructions(parsedInstruction);
});

console.log(GRID.reduce((rowAcc, row) => rowAcc += row.reduce((colAcc, val) => colAcc += val, 0), 0));


