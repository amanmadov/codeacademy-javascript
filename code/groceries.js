/*
// initial code 1:

const groceries = (arr) => {
    if(arr.length === 1) return arr[0].item;
    if(arr.length === 2) return arr[0].item + ' and ' + arr[1].item;
    let str = '';
    arr.forEach((element, index) => { 
        if(index === 0) {
            str = element.item;
        }
        else if(index === arr.length-1) {
            str = str + ' and ' + element.item;
        }
        else{
            str = str + ', ' + element.item
        }
    })
    return str;
}

// initial code 2:

const groceries = (arr) => {
    let groceryList = arr.map(el => el.item)
    if(groceryList.length === 1) return groceryList[0];
    if(groceryList.length === 2) return groceryList.join(' and ')
    return groceryList.slice(0,groceryList.length-2).join(', ') + ', ' + groceryList.slice(-2).join(' and ');
}
*/

// refactored code 2:
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