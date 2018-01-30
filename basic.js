
// Literal  'hello'
// Primitive  String, Number, Boolean, null, undefined
// Object String, Number, Boolean

// Strict and loose 
var str1 ="hello";
var str2 =String("hello");
var str3 =new String("hello");
if(str1==="hello"){
    console.log("true");
}
if(str2==="hello"){
    console.log("true");
}
if(str3==="hello"){
    console.log("true");
}else{
    console.log("not true");
}

// substring(start,end)
// substr(start, length)
// split(',')
// setInterval
// setTimeout

// typeof
// number = number
// string = string
// boolean = boolean
// function = function
// object = null,array, object
// undefined = undefined

// \b \f \n \r
// ^ $ *  ? + {n} {n,} {n,m} . 
var str = /s(h*)/;
var result = str.exec("shradhdha , shhara, shha");
console.log(result);

// Time elapsed
var fdate= new Date();
setTimeout(function(){doSomething()},300);
function doSomething(){
    console.log(new Date()- fdate);
}

// Converting
var num =255;
console.log(num.toString());
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

// 'use strict' will gice error with:
// typos
// assignments
// delete undeletable
// using nonunique property name
// using nonunique function parameter names
// octals not suported
// eval() is limited
// with not suported
// new required for new object

// ES6 +
// startsWith
// endsWith
// contains
// repeat
// codePointAt
// forCodePoint