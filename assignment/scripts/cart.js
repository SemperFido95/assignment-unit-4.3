console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}

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
}

//testing empty function
empty();
console.log('basket', basket);

