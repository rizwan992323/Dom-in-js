//How to creat call back

const message = function(){
  console.log("print after 3 second");
}
setTimeout(message,3000);
//anomymous

setTimeout(function(){
console.log("print after 4 seconds");

},4000);

//






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

