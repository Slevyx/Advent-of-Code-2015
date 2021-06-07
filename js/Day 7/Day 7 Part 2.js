const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt').toString().split('\n');
const OPERATOR_REGEX = /[A-Z]+/g
const ARGS_REGEX = /[a-z0-9]+/g
const WIRE_MAPPING = new Map();

const parseWire = (wire) => {
    const OPERATOR = wire.match(OPERATOR_REGEX);
    const ARGS = wire.match(ARGS_REGEX);
    return {destination: ARGS.pop(), command: {args: ARGS.map(argument => isNaN(Number(argument)) ? argument : Number(argument)), operator: OPERATOR == null ? null : OPERATOR[0]}}
};

const BITWISE_METHODS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: a => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b
};

const calculateWire = (destination) => {
    //Calling calculateWire() on NOT 2nd argument returns undefined
    if (destination === undefined){
        return undefined;
    }
    //if destination is an Integer, return it.
    //e.g. calling calculate_wire on 1 in {:operator=>OR, :args=>[1, "g"]} or in {:operator=>nil, :args=>[14146]}
    if(typeof(destination) === 'number') {
        return destination;
    }

    const WIRE = WIRE_MAPPING.get(destination);

    //if an Integer is associated to a destination
    //e.g. Integer => 'lf'
    if(typeof(WIRE) === 'number'){
        return WIRE;
    }
    if(WIRE.operator == null){
        //Overwriting map keys.
        WIRE_MAPPING.set(destination, calculateWire(WIRE.args[0]));
    }
    else{
        //Overwriting map keys.
        WIRE_MAPPING.set(destination, BITWISE_METHODS[WIRE.operator](calculateWire(WIRE.args[0]), calculateWire(WIRE.args[1])));
    }
    return WIRE_MAPPING.get(destination);
};

INPUT.forEach(wire => {
    parsedWire = parseWire(wire);
    WIRE_MAPPING.set(parsedWire.destination, parsedWire.command);
});

WIRE_MAPPING.set('b', 956);
console.log(calculateWire('a'));