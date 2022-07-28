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
    if (str.toLowerCase().split('').filter(letter => letter === chr).length !== 2) return 0;
    let firstIndex = lastIndex = 0;
    str.split('').forEach((letter, ind) => {
        if (letter === chr && firstIndex === 0) firstIndex = ind;
        if (letter === chr && firstIndex !== 0) lastIndex = ind;
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

<br/><br/>

## Challenge Project: Credit Card Checker
<br/>
The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. 
In this project, you have the role of a clerk who checks if credit cards are valid.

<br/>
<br/>

**Project Requirements:**

<br/>

- [x] Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array. You’ll use these arrays later to check if your functions are working properly.
- [x] Create a function, `validateCred()` that has a parameter of an array. The purpose of `validateCred()` is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should **NOT mutate the values of the original array**. To find out if a credit card number is valid or not, use the `Luhn algorithm`. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the `Luhn algorithm` can be broken down as the following steps:
    1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
    2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
    3. Sum up all the digits in the credit card number.
    4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid. Here’s a <a href="https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg" target="_blank">visual that outlines the steps</a> Check your function using both the provided valid and invalid numbers.
- [x] Create another function, `findInvalidCards()` that has one parameter for a nested array of credit card numbers. The role of `findInvalidCards()` is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
- [x]  After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, `idInvalidCardCompanies()` that has one parameter for a nested array of invalid numbers and returns an array of companies.
Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:<br/>

``` 
    FirstDigit      Company 
        3	    American Express 
        4	    Visa 
        5	    Mastercard 
        6	    Discover 
```

If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
`idInvalidCardCompanies()` should return an array of companies that have mailed out cards with invalid numbers. 
This array should **NOT contain duplicates**, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.


```js

// Solution: 

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:

const validateCred = (arr) => {
    const computedDigits = [...arr].reverse().map((digit, ind) => {
        return ind % 2 === 0 ? digit : (digit * 2 > 9 ? digit * 2 - 9 : digit * 2);
    })
    const sum = computedDigits.reduce((previousValue, currentValue) => previousValue + currentValue);
    return sum % 10 === 0;
}

// Test functions:
console.log(validateCred(valid1));      // Should print true
console.log(validateCred(invalid1));    // Should print false

const findInvalidCards = (arr) => {
    return [...arr].filter((card) => {
        if(!validateCred(card)) return card;
    });
}

console.log(findInvalidCards(batch))

const idInvalidCardCompanies = (arr) => {
    const companyList = [...arr].map(card => {
        if (card[0] === 3) return 'American Express';
        if (card[0] === 4) return 'Visa';
        if (card[0] === 5) return 'Mastercard';
        if (card[0] === 6) return 'Discover';
        return 'Company not found';
    })
    return [...new Set(companyList)];
}

// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));            // Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]));  // Should print all invalid cards

console.log(idInvalidCardCompanies(batch));
```

<br/><br/>

## Challenge Project: Mysterious Organism

<br/>

You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. 
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

<br/>

**Project Requirements:**

<br/>

- [x] Look over the starter code. There are two helper functions: `returnRandBase()` and `mockUpStrand()`
DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When `returnRandBase()` is called, 
it will randomly select a base and return the base **('A','T','C', or 'G')**
`mockUpStrand()` is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.
You can find the Starter Code below:

<br/>

```js

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
```

<br/>

- [x] Since you need to create multiple objects, create a factory function `pAequorFactory()` that has two parameters: 
The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
`pAequorFactory()` should return an object that contains the properties specimenNum and dna that correspond to the parameters provided.

<br/>

- [x] Your team wants you to simulate P. aequors high rate of mutation (change in its DNA)
To simulate a mutation, in `pAequorFactory()`s returned object, add the method `mutate()`.
`mutate()` is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. 
Then `mutate()` will return the object’s dna. For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

<br/>

- [x] Your research team wants to be able to compare the DNA sequences of different P.aequor. 
You will have to add a new method `compareDNA()` to the returned object of the factory function. 
`compareDNA()` has one parameter, another pAequor object.
The behavior of `compareDNA()` is to compare the current pAequors .dna with the passed in pAequors .dna and compute how many bases are identical and in the same locations. `compareDNA()` does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the `.specimenNum` to identify which pAequor objects are being compared. ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common. 
The resulting message would read something along the lines of: `specimen #1 and specimen #2 have 25% DNA in common.`
For example:

<br/>

```
ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']
```

<br/>

- [x] P.aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
In the returned object of `pAequorFactory()`, add another method `willLikelySurvive()`.
`willLikelySurvive()` returns true if the objects .dna array contains at least 60% 'C' or 'G' bases. Otherwise, `willLikelySurvive()` returns false.

<br/>

- [x] With the factory function set up, your team requests that you create **30 instances of pAequor** that can **survive** in their natural environment. Store these instances in an array for your team to study later.

<br/>

- [x] If you’d like to challenge yourself further, you could consider the following:
Create a `complementStrand()` method to the factory function’s object that returns the complementary DNA strand. 
The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa.
Use the `compareDNA()` to find the two most related instances of pAequor.




