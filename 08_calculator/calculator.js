const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    let sum = arr.reduce((sum, item) => {
        sum = sum + item;
    }, 0);

    return sum;
};

const multiply = function (a, b) {
    return a * b;
};

const power = function (a, power) {
    return a ** power;
};

const factorial = function (a) {
    const arr = [];

    for (let i = 1; i <= a; i++) {
        arr.push(i);
    }

    let factorial = arr.reduce((total, item) => {
        return total * item;
    }, 1);

    return factorial;
};

console.log(`0: ${factorial(0)}`);
console.log(`1: ${factorial(1)}`);
console.log(`5: ${factorial(5)}`);

console.log(`3 pow 5: ${power(3, 5)}`);

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
