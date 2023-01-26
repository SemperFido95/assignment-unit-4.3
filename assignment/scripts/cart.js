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

addItem('beans');
addItem('lightsaber');
addItem('pie');
console.log(basket);