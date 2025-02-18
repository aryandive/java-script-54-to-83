// Write a program to calculate factorial of a number using reduce and using for loops


// 6! = 6*5*4*3*2*1



// Using reduce
function factorialUsingReduce(num) {
    return Array.from({ length: num }, (v, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

console.log(factorialUsingReduce(6)); // 720


// Using for loop
function factorialUsingForLoop(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}