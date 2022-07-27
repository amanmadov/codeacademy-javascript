
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

console.log(subLength('Saaturday', 'a'));   // returns 6
console.log(subLength('summer', 'm'));      // returns 2
console.log(subLength('digitize', 'i'));    // returns 0
console.log(subLength('cheesecake', 'k'));  // returns 0

*/

// refactored code:
const subLength = function (str, chr) {
    if (str.toLowerCase().split('').filter(x => x === chr).length !== 2) return 0;
    let firstIndex = lastIndex = 0;
    str.split('').forEach((el, ind) => {
        if (el === chr && firstIndex === 0) firstIndex = ind;
        if (el === chr && firstIndex !== 0) lastIndex = ind;
    })
    return lastIndex - firstIndex + 1;
}

console.log(subLength('Saaturday', 'a'));   // returns 6
console.log(subLength('summer', 'm'));      // returns 2
console.log(subLength('digitize', 'i'));    // returns 0
console.log(subLength('cheesecake', 'k'));  // returns 0
