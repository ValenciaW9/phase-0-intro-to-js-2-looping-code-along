function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for attending the ${eventName} event!`;
      messages.push(message);
    }
  
    return messages;
  }

  const gifts = ["Apple", "Microsoft", "Google"];
  console.log(writeCards(gifts, "birthday"));
  //, build a function named writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array.
//As with our previous wrapGifts() function, you will create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function. (Refer back to the Array Methods lesson if you need a refresher on how we can add an element to an array.) The overall process should be:
//create a new, empty array to hold the messages;
//iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
//after the loop finishes and all of the messages have been added to the new array, return the new array.
//Here is an example of what a call to the writeCards() function might look like:

writeCards(["Charlie", "Samip", "Ali"], "birthday");

  ////writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array. As with our previous wrapGifts() function, you will create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function. (Refer back to the Array Methods lesson if you need a refresher on how we can add an element to an array.) The overall process should be: create a new, empty array to hold the messages; iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created; after the loop finishes and all of the messages have been added to the new array, return the new array.
  let countDown = 0;
  while (countDown < 11) {
    console.log(countDown++);
  }
  

let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
const primes = [2, 3, 5, 7, 22, 23, 17, 19, 23, 29, 31, 37];
primes[0]; // 2
primes[3]; // 7
primes[150]; // undefined

/// Assignment
//To get more acquainted with while, your task is to write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log(). Note that this means that running countDown(10); would actually log 11 times:

10
9
8
7
6
5
4
3
2
1
0

//Install the dependencies using npm install.
//Run the tests using npm test.
//Read the errors; vocalize what they're asking you to do.
//Write code; repeat steps 2 and 3 often until a test passes.
//Repeat as needed for the remaining tests.



