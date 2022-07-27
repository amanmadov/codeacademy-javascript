<p align="right"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></p>
<h1 align="left">CodeAcademy JavaScript Code Challenges</h1>

<br/>

## JavaScript Practice: Arrays, Loops, Objects, Iterators
Intermediate JavaScript concepts with these 3 code challenges.
In these exercises, we will practice working with intermediate JavaScript concepts. This is helpful for implementing `loops` and working with `arrays`, `objects`, and `iterators`. Some of these challenges are difficult! Take some time to think about them before starting to code.

<br/>

**Challenge 1. Write a function `factorial()` that takes a number as an argument and returns the factorial of the number.**
<br/>
Note: Assume only **positive numbers** will be given as an argument for the `factorial()` function.

```js
// Example:

factorial(6);  // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
```

```js
// Solution:

const factorial = (num) => {
    return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(0))   // returns 1
console.log(factorial(1))   // returns 1
console.log(factorial(2))   // returns 2
console.log(factorial(3))   // returns 6
console.log(factorial(4))   // returns 24
console.log(factorial(5))   // returns 120
```

<br/>

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

console.log(subLength('Saturday', 'a'));    // returns 6
console.log(subLength('summer', 'm'));      // returns 2
console.log(subLength('digitize', 'i'));    // returns 0
console.log(subLength('cheesecake', 'k'));  // returns 0
```

<br/>

**Challenge 3. Write a function `groceries()` that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a `comma` except the last two items should be separated by the word `and`. 
Make sure spaces (' ') are inserted where they are appropriate.**

```js
// Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
```

```js
// Solution: 

const groceries = (arr) => {
    let groceryList = arr.map(el => el.item)
    return groceryList.length === 1 ? groceryList[0] : (groceryList.length === 2 ? groceryList.join(' and ') : groceryList.slice(0,groceryList.length-2).join(', ') + ', ' + groceryList.slice(-2).join(' and '))
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}] ));
// returns 'Cheese Balls'
```
