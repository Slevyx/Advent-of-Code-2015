const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('');
const SANTA_MOVES = INPUT.filter((move, index) => index % 2 === 0);
const ROBOT_MOVES = INPUT.filter((move, index) => index % 2 !== 0);
const SANTA_COORDINATES = new Set().add("x0,y0");
const ROBOT_COORDINATES = new Set().add("x0,y0");

const checkDirection = (currentCoordinates, direction) => {
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
    return newCoordinates;
}

SANTA_MOVES.reduce((currentCoordinates, direction) => {
  let newCoordinates = {};
  newCoordinates = checkDirection(currentCoordinates, direction);
  SANTA_COORDINATES.add(`x${newCoordinates.x},y${newCoordinates.y}`);
  return newCoordinates;
}, {x: 0, y: 0});

ROBOT_MOVES.reduce((currentCoordinates, direction) => {
    let newCoordinates = {};
    newCoordinates = checkDirection(currentCoordinates, direction);
    ROBOT_COORDINATES.add(`x${newCoordinates.x},y${newCoordinates.y}`);
    return newCoordinates;
  }, {x: 0, y: 0});

console.log(new Set([...SANTA_COORDINATES, ...ROBOT_COORDINATES]).size);