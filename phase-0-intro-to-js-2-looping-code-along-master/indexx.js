function writeCards(names, eventName) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for attending the ${eventName} event!`;
      messages.push(message);
    }
  
    return messages;
  }

onst gifts = ["Apple", "Microsoft", "Google"];
console.log(writeCards(gifts, "birthday"));
  

  ////writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The for loop should stop once it has iterated over the length of the array. As with our previous wrapGifts() function, you will create a custom message for each name inside the loop. Unlike that example, however, instead of simply logging the messages to the console, you will collect them in a new array and return this array at the end of the function. (Refer back to the Array Methods lesson if you need a refresher on how we can add an element to an array.) The overall process should be: create a new, empty array to hold the messages; iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created; after the loop finishes and all of the messages have been added to the new array, return the new array.
