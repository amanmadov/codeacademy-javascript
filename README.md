<p align="right"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></p>

<br/>
<h1 align="left">CodeAcademy JavaScript Code Challenges</h1>

<br/>

## JavaScript Practice: Arrays, Loops, Objects, Iterators
Intermediate JavaScript concepts with these 3 code challenges.
In these exercises, we will practice working with intermediate JavaScript concepts. This is helpful for implementing loops and working with arrays, objects, and iterators. Some of these challenges are difficult! Take some time to think about them before starting to code.

**Challenge 1. Write a function `factorial()` that takes a number as an argument and returns the factorial of the number.**
```
//Example:

factorial(6);  // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
```

Assume only **positive numbers** will be given as an argument for the `factorial()` function.

```
// Solution:

const factorial = (num) => {
    return num === 0 ? 1 : num * factorial(num - 1)
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
```


