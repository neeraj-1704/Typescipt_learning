// console.log('Hello, TypeScript');
// let a1: number = 4;
// let n1 = 6;


// function sum1(): number {
//     let c = a + n;
//     return c;
// }


// Why It’s Not a Good Practice?
// Global State Dependency:

// The function sum() depends on external values (a and n). If these values change somewhere else in the program, it can lead to unpredictable behavior.
// Reduced Reusability:

// The function is tightly coupled with global variables. If you want to use it for different numbers, you can’t, unless you modify a and n directly.
// Testing and Debugging Issues:

// Functions that depend on global variables are harder to test in isolation because their output depends on external factors.


// Better Approach: Use Parameters
// A better way is to pass a and n as function parameters:

function sum2(a: number, n: number): number {
    return a + n;
}

// Calling the function
console.log(sum2(4, 6)); // Output: 10
