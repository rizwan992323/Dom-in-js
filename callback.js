
//How to create callback
//A callback is a function passed as an argument to another function. Using a callback,

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message, 3000);
//.....
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

setTimeout(()=>{

})

//...
function showData(name,amt){
  alert("enter name"+ name + '\n  Enter amount'+ amt);
}
function getData(callback){
  var  name= prompt("callback \n Enter ur name?");
  var amt =  prompt("enter some amount");
  callback(name,amt);
}
getData(showData);

//....
setTimeout(()=>{
console.log("this is adone");
}  ,4000);
//..
setTimeout(function(){
console.log("submited");
} ,5000)

