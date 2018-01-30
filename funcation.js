// declarative 
// funcaion keyword
// parsed on  loaded
// write anywhere

// anonymous or funcation constuctor
// new or funtion object
// parsed each time it accessed

// literal or funcrion expression or callback 
// parsed once on load.
// literl can also be anonymous.
// must be declare before use.

// Hoisting
// All variable declaration are moved or hoised but not instatiation
console.log(test());

function test() {
    return 'hello';
}

console.log(test1());
var test1 = function () {
    return 'hello';
}
// var test1 =()=>'hello';

// Functional Programing
// funcation acceprt function as paramaert or return another function

// Imperative Programing
// using condition , loops and associated procedures

// Pure function - no external data change, no side effects.

var num = [4, 5, 6, 7, 80];
var sum = 0;
num.forEach(element => {
    sum += element;
});
console.log(sum);

var sum = num.reduce(function (n1, n2) {
    return n1 + n2
});
// var sum= num.reduce((n1,n2)=> n1+n2);
console.log(sum);

// recurssion
// fast and efficient
// memory intensive
var reverseArray = function (x, i, s) {
    console.log(x, i, s);
    return i == 0 ? s : (reverseArray(x, --i, s += " " + x[i]));
}
// var reverseArray = (x,i,s)=>  (i == 0?s:reverseArray(x,--i,s+=" "+x[i]));

var animals = ["dog", "cat", "seal", "cat"];
var str = reverseArray(animals, animals.length, "");
console.log(str);


var fibonacci = (n) => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
console.log(fibonacci(10));

var factorial = (n) => n == 1 ? 1 : n * factorial(n - 1);
console.log(factorial(10));

// Tail call - calling the function at the end of the function
// for each recurssion another frame is added to call stack
// RangeError will occure

// Workaround - proper tail call 
// reuse the frame
// Trampolines

// preventing code blocking via timer and callback

function noBlack(n, callback) {
    console.log(n);
    setTimeout(() => {
        var val = factorial(n);
        if (callback && typeof callback == 'function') {
            callback(val);
        }
    }, 0);
}

console.log("start");
noBlack(1, (n) => {
    console.log("first " + n);
    noBlack(n, (m) => {
        console.log("final " + m)
    });
})

var test = 0;
for (let index = 0; index < 10; index++) {
    test += index;
}
console.log("value " + test);

noBlack(40, (n) => {
    console.log("end " + n);
})
console.log("ideal ");

// start
// value 45
// ideal 
// first 6
// end 24
// final 720

// single threaded
// Timer will be added end of event queue indtade of pushing intoo the queue

// function remember its state || function closure || partial application 
greet((str) => addName((name) => str + " " + name));
var day = greet("morning");
var night = greet("night");
console.log(day(" dear"));
console.log(night(" dear !!"));

// function arguments into array
// [].slice.call(arguments)
// Array.prototype.slice.call(arguments)
function sumRounds() {
    return ([].slice.call(arguments)).reduce((v1, v2) => parseInt(v1, 10) + parseInt(v2, 10));
}
console.log(sumRounds("10", 5, 5));

// Advanced partial funcrion factory
// partial application ben alman
// add((a,b)=>a+b);

// Improve perfomance with memorization

var fibonacci = function () {
    var memo = [0, 1];
    var fib = (n) => {

        var result = memo[n];
        // console.log(memo[n]);
        if (typeof result != "number") {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    console.log(memo);
    return fib;
}();

var fib = (n) => n < 2 ? n : fib(n - 1) + fib(n - 2);

var fdate = new Date();
for (let index = 0; index < 30; index++) {
    fib(index);
}
console.log("long? " + new Date() - fdate);

var ldate = new Date();
for (let index = 0; index < 30; index++) {
    console.log(fibonacci(index));
}
console.log("oh great!! " + new Date() - ldate);

// Immediately  invoked function expression
// Wrap global variables
(function () {
    var i = 0;

    function increment() {
        i++;
        console.log(i);
    }

    function runIncrement() {
        while (i < 5) {
            increment();
        }
    }

    runIncrement();
})();

//ES6 optional parametes
function makeStr(str, l = "'", r = "'") {
    return l + str + r;
}

console.log(makeStr("hello"));