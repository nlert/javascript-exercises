const fibonacci = function (a) {
    const arr = [0, 1];
    for (let i = 2; i <= a; i++) {
        let num = arr[i - 1] + arr[i - 2];

        arr.push(num);
    }

    let lastNum = arr.pop();
    return lastNum;
};

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(1));

// Do not edit below this line
module.exports = fibonacci;
