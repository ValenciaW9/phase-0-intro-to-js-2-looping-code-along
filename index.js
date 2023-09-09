//Write Code Here!)

// In programming  terms, we can think of our collection of gifrs as an Array and the act of wrapping them as a unction. For example:

const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}


//We could then call wrapGift() on each gift individually:

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);


//The for looop
// Of the loops in JavaScript, the for loop is the most common. The for loop is made up of four statements in the following structure:

for ([initialization]; [condition]; [iteration]) {
    [loop body]
  }

//Initialization -Typically used to initialize a counter variable.
//Condition-An expression evaluated before each pass through the loop. If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.
//Iteration - An expression executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to completion.
//Loop body-Code that runs on each pass through the loop.

// Usage: Use a for loop when you know how many times you want the loop to run (for example, when you're looping through elements in an array).

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

  //Using or With Arrays
  //The for loop is often used to iterate ov er every element in an array . Let's rewrite out gift-wrappping action above as a for loop. 

  const gifts() = ["teddy bear", "drone", "drone","dool"];

  function wrapGift(gifts) {
    for (let  i =0; i < gifts.length; i ++) {
        console.log('Wrapped ${gifts[i]} and added a  bow!');
        debugger;.
    }

    return gifts;
  }


  ////writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array. As with our previous wrapGifts() function, you will create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function. (Refer back to the Array Methods lesson if you need a refresher on how we can add an element to an array.) The overall process should be: create a new, empty array to hold the messages; iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created; after the loop finishes and all of the messages have been added to the new array, return the new array.
  
  
  function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Wrapped ${names[i]} and added a mouse!`);
    }
    return messages;
  }
  
  const gifts = ["Apple", "Microsoft", "Google"];
  console.log(writeCards(gifts, "birthday"));
  const gifts = ["Apple", "Microsoft", "Google"];
  console.log(writeCards(gifts, "birthday"));




