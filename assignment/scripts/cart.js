console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

//addItem function pasted on line 58
 function addItem(item) {
    basket.push(item);
    return true;
} 

const maxItems = 5;

// testing addItem 
console.log(addItem('grape'));


function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}

// testing listItems
addItem('apple');
addItem('bread');
listItems();

//testing to see if basket array has proper items
console.log(basket);

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
    //also could have done basket = []; 
}

//testing empty function
console.log('basket before empty', basket);
empty();
console.log('basket after empty', basket);

//STRETCH GOALS

//maxItems declared on line 13

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

//testing isFull function
console.log(isFull());

function addItem(item) {
    if (isFull() === false) {
        basket.push(item);
        return true;
    } else {
        return false;
    }
} 

//testing new addItem
console.log(basket);
console.log(addItem('beans'));
console.log(addItem('lightsaber'));
console.log(addItem('pie'));
console.log(addItem('potato'));
console.log(addItem('soup'));
//should return false and not be added to array
console.log(addItem('extra item')); 
console.log(basket);

function removeItem(item) {
    if (basket.indexOf(item) === -1) {
        return null; 
    } else {
        basket.splice(basket.indexOf(item), 1);
        return `item removed: ${item}`;
    };
    
}

//testing removeItem
console.log(basket);
//expected result: 'item removed: pie' in console
console.log(removeItem('pie')); 
// expected result: null in console
console.log(removeItem('donuts')); 
console.log(basket);