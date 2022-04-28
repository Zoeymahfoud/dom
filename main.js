var main = document.querySelector("main"); 
var joke1 = "How does a rabbi make coffee? Hebrews it!"; 
var joke2 = "How many programmers does it take to change a light bulb? None, that's a hardware problem"; 
var joke3 = "Why do programmers always have to write code? Because without code, there would be nothing to debug."; 


var template = `

<h1>My Jokes</h1> 

<ul> 

<li>${joke1}</li> 

<li>${joke2}</li> 

<li>${joke3}</li> 

</ul>`; 

main.innerHTML = template; 

var para = document.createElement("p"); 

para.textContent = "That's all folks!"; 

main.appendChild(para);