
/*

// initial code:

const subLength = (str, letter) => {
    let firstOcc = -1
    let secondOcc = -1
    let count = 0
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            count++;
            if (count > 2) return 0;
            if (firstOcc === -1) {
                firstOcc = i;
            }
            else {
                secondOcc = i;
            }
        }
    }
    if (firstOcc === -1 || secondOcc === -1) return 0;
    return secondOcc - firstOcc + 1;
}

console.log(subLength('Saturday', 'a'));    // returns 6
console.log(subLength('summer', 'm'));      // returns 2
console.log(subLength('digitize', 'i'));    // returns 0
console.log(subLength('cheesecake', 'k'));  // returns 0

*/

// refactored code:
const subLength = (str, chr) => {
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
