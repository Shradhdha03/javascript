// let

// ok
if (true) {
    let i = 'ok';
    console.log(i);
}

// undefined
if (typeof i != 'undefined') {
    console.log(i);
} else {
    console.log('undefined');
}

// set - unique collection
var col1 = new Set();
col1.add("java");
col1.add("javascript");
col1.add("nodejs");
col1.add("nodejs");
col1.add("nodejs");
console.log(col1.size);
col1.delete("java");
console.log(col1.size);
console.log(col1.has("nodejs"));

col1.forEach(element => {
    console.log(element);
});

// spread operator
var arr = [...col1];
console.log(arr);

// array to set
var col2 = new Set(['ha', 'ha ha', 'bas']);
console.log(col2.size);

col1.clear();
console.log(col1.size);


// add anything
col1.add(window);
col1.add(col2);
col1.add(2);
col1.add(undefined);
col1.add(NaN);
col1.add(function () {
    console.log("okk");
});
col1.add("bas");

col1.forEach(element => {
    console.log(element);
});

// Map = set of key/value pair with any key not only string

var map1 = new Map();
map1.set("key", "val1");
map1.set(undefined, "val2");
map1.set(NaN, 3);
map1.set(window, "val4");
map1.set(2, 5);

console.log(map1.get(undefined)); // val2

map1.forEach(element => {
    console.log(element);
});

for (const [key, value] of map1) {
    console.log(key);
    console.log(value);
}

for (const key of map1.keys()) {
    console.log(key);
}

for (const value of map1.values()) {
    console.log(value);
}

var map = map1.keys();
console.log(map.next().value); //key

// NaN is not equal to NaN, but it works with Map
// na
if (NaN == NaN) {
    console.log("ha");
} else {
    console.log("na");
}

var id = NaN;
console.log(map1.get(id)); //3

// exactly equal not equivalent
var a = [1, 2];
var b = {
    z: 'z'
};
var c = b;

map1.set(a, 'aa');
map1.set(b, 'bb');
map1.set(c, 'cc');

console.log(map1.get([1, 2])); //undefined
console.log(map1.get({
    z: 'z'
})); //undefined

console.log(map1.get(a)); //aa
console.log(map1.get(b)); //bb
console.log(map1.get(c)); //cc


// Symbol = create unique object property keys

var green = Symbol();
var red = Symbol();

function switchLight(light) {
    if (light == green) {
        return red;
    } else {
        return green;
    }
}
var light = green;
console.log(light);
console.log(light == green ? 'green' : 'red');

light = switchLight(light);
console.log(light == green ? 'green' : 'red');

light = switchLight(light);
console.log(light == green ? 'green' : 'red');

// Iterating 

function makeIterator(array) {
    var i = 0;
    return {
        next: function () {
            return i < array.length ? {
                value: array[i++],
                done: false
            } : {
                done: true
            };
        }
    }
}
var tasks = [{
    "task": function () {
        console.log('task');
    }
}, {
    "task": function () {
        console.log('biju task');
    }
}];

var taskrun = makeIterator(tasks);
taskrun.next().value.task();
taskrun.next().value.task();

// yield = a resumable function

function* taskRun() {
    console.log("first");
    yield

    function () {
        console.log("task first");
    }
    console.log("second");
    yield

    function () {
        console.log("task second");
    }
    console.log("third");
}
var tasks = taskRun();
tasks.next().value();
tasks.next().value();
tasks.next();

// Proxy - attach object behavior


function proCheck(target) {
    return new Proxy(target, {
        set: function (target, property, value) {
            if (property == "price") {
                if (typeof value != 'number') {
                    throw new TypeError("not number");
                } else if (value <= 0) {
                    throw new RangeError("must be more than 0");
                }
            }
            target[property] = value;
        }
    });
}

function Item() {
    return proCheck(this);
}

try {
    var item = new Item();
    item.name = "hello";
    console.log(item);
    item.price = "3 dollor"
    console.log(item);
    item.price = -1;
    console.log(item);
    item.price = 3;
    console.log(item);
} catch (e) {
    console.log(e.message)
}

// Class

class Book {
    constructor(title) {
        this.title = title;
    }
    getBook() {
        return this.title;
    }
}

class TechBook extends Book {
    constructor(title, type) {
        super(title);
        this.type = type;
    }
    getBook() {
        return super.getBook() + " --> " + this.type;
    }
    getType() {
        return this.type;
    }
}

var book = new TechBook("Javascript", "Tech");
console.log(book.getBook());


// Promises - pakka vala :)

var test = new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open("GET", "https://www.google.ca/?gfe_rd=cr&dcr=0&ei=sCRlWvPfG66AX4qcq6gJ");
    req.onload = function () {
        if (req.status == 200) {
            resolve(req.response);
        } else {
            reject(req.statusText);
        }
    }
    req.onerror = function () {
        reject("network error");
    }
    req.send();
});
test.then(function (res) {
    console.log(res);
}, function (err) {
    console.error(err);
});