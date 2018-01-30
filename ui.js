
document.getElementById("hello").parentNode.childNodes
var imgs= document.getElementsByTagName("img"); // Nodelist
imgs.item(1);

// Nodelist is an intriguing object because its live collection

var imgs = document.querySelectorAll("img");
var imgs = document.querySelectorAll("article > img");
var imgs = document.querySelectorAll("img + p");
var imgs = document.querySelectorAll("img[alt='']");
var imgs = document.querySelectorAll("img:not([alt=''])");

var item = document.querySelectorAll("li:nth-child(2n+1)");
var item = document.querySelectorAll("li:nth-child(odd)");

var item = document.querySelectorAll("*[class]");
var item = document.querySelectorAll("*[class='red']");
var item = document.querySelectorAll("*[class*='red']");
var item = document.querySelectorAll("div:not(.red)");

// querySelectorAll  not live collection

// Dom
// Dublin cor element
// CSS3.info

ele.style.width ="100px";

document.getElementById("hello").currentStyle ;

document.getElementById("hello").currentStyle['backgroundColor'];

var ele =document.getElementById("hello");
ele.insertBefore(newpara,ele);
ele.appendChild(newpara);

window.getComputedStyle(ele).getPropertyValue("background-color");

var text =document.createTextNode("hello");
document.createElement("p").appendChild(text);
ele.insertBefore(newpara,oldPara);
console.log(prompt("enter something","hello"));

// DOM purning
// get access to removed element if you want to process data before deleting it completely


var oldEle = ele.removeChild(document.getElementById("hello"));


// css trick
// center an element 
// left:50%
// top:50%
// margin-left: - width/2
// margin-top: - height/2


ele.setAttribute("style","display:none");
ele.style.display= "none";

// block = line break at the end

// assistive technology device