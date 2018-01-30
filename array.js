var animals = ["dog", "cat", "seal", "cat"];
console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat"));
console.log(animals.indexOf("cat", 2));
console.log(animals.lastIndexOf("cat", 2));

var nums = [3, 6, 7, 8, 9];
console.log(nums[nums.findIndex(e => {
    return (e > 7);
})]);

// Array literal
var nums1 = [3, 6, 7, 8, 9];
// simple
// less space
// instantiate ervery time funcation is called

// Array Object
var nums2 = new Array(3, 6, 7, 8, 9);
// takes time
// use for fixed size array

var test = [];
test[0] = [1, 2];
test[1] = [3, 4];
test[2] = [5, 4];

var newTest = test.concat.apply([], test);
console.log(newTest);

var newTest1 = test[1].concat(test[0], test[2])
console.log(newTest1);


// remove element  ["dog", "seal", "cat"] 
var animals = ["dog", "cat", "seal", "cat"];
animals.splice(animals.indexOf("cat"), 1);
console.log(animals);

// replacing element ["dog", "seal", "monkey"]
animals.splice(animals.indexOf("cat"), 1, "monkey");
console.log(animals);

// replacing element ["dog", "seal", "cat"]
animals.splice(-1, 1, "cat");
console.log(animals);

// splice  ["dog", "seal"]
animals.splice(2);
console.log(animals);

// splice  ["dog", "seal", "monkey", "cat"]
animals.splice(2, 1, "monkey", "cat");
console.log(animals);

// slice * shallow copy //by reference
var animals = ["dog", "cat", "seal", "cat"];
console.log(animals.slice(1, 3));

// primitive copy by value
// object copy by reference

var cells = document.querySelectorAll("td + td");
var sum = 0;
[].forEach.call(cells, function (cell) {
    sum += parseFloat(cell.firstChild.data);
});

var animalsA = animals.map(function (element) {
    return element + " A";
});
console.log(animalsA);

var animalsA = animals.filter(function (element) {
    return (element !== "dog");
});
console.log(animalsA);


function testVal(element, index, array) {
    return (/^[a-zA-Z]+$/).test(element);
}

var animals = ["dog32", "cat", "seal", "cat"];

var animalsB = animals.every(testVal);
console.log(animalsB);

var animalsB = animals.some(testVal);
console.log(animalsB);

// anonymous function vs named funcation
// +when nested and asynchronous - name will be shown on  stack trace
// +multiple usage
// +performwell in all browser
// -culter up globe space

// Associative array by object -prototype
var element = new Object();
element['something'] = 'value';
element['something1'] = 'value1';
Object.keys(element).forEach(function (key) {
    console.log(element[key]);
});

// Associative arraybe array
// adding new property instade of element
// not able to access index
// length will return 0