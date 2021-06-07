const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('');
const COORDINATES = new Set().add("x0,y0");

INPUT.reduce((currentCoordinates, direction) => {
  let newCoordinates = {};
  switch(direction){
    case '^':
        newCoordinates = {x: currentCoordinates.x, y: currentCoordinates.y + 1};
        break;
    case 'v':
        newCoordinates = {x: currentCoordinates.x, y: currentCoordinates.y - 1};
        break;
    case '<':
        newCoordinates = {x: currentCoordinates.x - 1, y: currentCoordinates.y};
        break;
    case '>':
        newCoordinates = {x: currentCoordinates.x + 1, y: currentCoordinates.y};
        break;
  }
  COORDINATES.add(`x${newCoordinates.x},y${newCoordinates.y}`);
  return newCoordinates;
}, {x: 0, y: 0});

console.log(COORDINATES.size);



