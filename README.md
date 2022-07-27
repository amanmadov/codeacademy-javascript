<p align="right"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></p>
<h1 align="left">CodeAcademy JavaScript Code Challenges</h1>

<br/>

## JavaScript Practice: Arrays, Loops, Objects, Iterators
Intermediate JavaScript concepts with these 3 code challenges.
In these exercises, we will practice working with intermediate JavaScript concepts. This is helpful for implementing `loops` and working with `arrays`, `objects`, and `iterators`. Some of these challenges are difficult! Take some time to think about them before starting to code.

**Challenge 1. Write a function `factorial()` that takes a number as an argument and returns the factorial of the number.**

```js
// Example:

factorial(6);  // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
```

Assume only **positive numbers** will be given as an argument for the `factorial()` function.

```js
// Solution:

const factorial = (num) => {
    return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
```


**Challenge 2. Write a function `subLength()` that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0.**

```js
// Examples:

subLength('Saturday', 'a');     // returns 6
subLength('summer', 'm');       // returns 2
subLength('digitize', 'i');     // returns 0
subLength('cheesecake', 'k');   // returns 0
```

```js
// Solution: 

const subLength = function (str, chr) {
    if (str.toLowerCase().split('').filter(x => x === chr).length !== 2) return 0;
    let firstIndex = lastIndex = 0;
    str.split('').forEach((el, ind) => {
        if (el === chr && firstIndex === 0) firstIndex = ind;
        if (el === chr && firstIndex !== 0) lastIndex = ind;
    })
    return lastIndex - firstIndex + 1;
}
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
```
