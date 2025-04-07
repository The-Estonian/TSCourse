"use strict";
const mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
const mathResults = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(4, 3),
};
console.log(mathResults);
// mathResults.add = 10;
