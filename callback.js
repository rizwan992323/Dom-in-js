
//How to create callback

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);
//.....

function displayData() {
    setTimeout(() => {
      console.log("Hello Welcome to Asynchronous programming");
    }, 2000);
  }
  displayData();
  console.log("Welcome to Javascript");
  console.log("Callback Functions...!!");


//What is an Anonymous Function?
//Alternatively, we can define a function directly inside another function,  
//instead of calling it. It will look like this:

setTimeout(function() {  
    console.log("This message is shown after 4 seconds");
}, 4000);


//Callback as an Arrow Function
//If you prefer, you can also write the same callback function as an ES6 arrow function,
// which is a newer type of function in JavaScript:

setTimeout(() => { 
    console.log("This message is shown after 3 seconds");
}, 3000);



