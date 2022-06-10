
//  <p id="code">hello</p>
//  <p id="xyz">Finding Html element</p>
//  <p id="demo"></p>
// <button onclick="this.innerHTML=Date()">time zone</button>
const pooja = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = pooja[1].innerHTML;

//eventlistner

// <button id="myBtn">Try it</button>

  // <p id="btn"></p>
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("btn").innerHTML = "Hello World";
}


//Event
document.getElementById("btn1").onclick = displayDate
function displayDate() {
    document.getElementById("text").innerHTML = Date();

}

element.addEventListener(event,functionname)

