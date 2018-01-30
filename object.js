JSON
functional programming
less chance of unwanted side effects
simple to read

object - oriented programming

java - class based inheritance
javascript - prototipical inheritance
reuse occurs by creating new instaces of existing object instade of instances of class
insted of extending class - enhanching exisiting object with new proprties and methods


//Private

function Tune(song, artist) {
    var title = song;
    this.concat = () => title + " " + artist;
}

var happySongs = new Tune("pani cha", "badshah");
console.log(happySongs.title); //this is private
console.log(happySongs.concat());
happySongs.title = 'oye';
console.log(happySongs.title);

console.log(Tune.prototype);
Tune.prototype.addCat = function (catName) {
    this.category = catName
}
happySongs.addCat("music");
console.log(happySongs.category);

// Inhritance
function origObj() {
    this.val1 = 'a';
}
console.log(origObj.prototype);
origObj.prototype.returnVal2 = function () {
    return this.val1
};
console.log(origObj.prototype);

function newObj() {
    this.val2 = 'b';
    origObj.call(this);
}
console.log(newObj.prototype);
newObj.prototype = Object.create(origObj.prototype);
console.log(newObj.prototype);
newObj.prototype.constructor = newObj;
console.log(newObj.prototype);
newObj.prototype.getVals = function () {
    return this.val1 + " " + this.val2
};
console.log(newObj.prototype);
var obj = new newObj();

console.log(obj instanceof newObj);
console.log(obj instanceof origObj);
console.log(obj.getVals());


function book(title) {
    this.getTitle = function () {
        return "Title:" + title
    }
}

function techBook(title, category) {
    this.getCategory = function () {
        return "Category:" + category
    }
    this.getBook = function () {
        return this.getTitle() + " " + this.getCategory()
    }
    console.log(this);
    console.log(arguments);
    book.apply(this, arguments);
}
console.log(book.prototype);
console.log(techBook.prototype);
techBook.prototype = Object.create(book.prototype);
console.log(techBook.prototype);
techBook.prototype.constructor = techBook;
console.log(techBook.prototype);

var newbook = new techBook("javascript", "programming");
console.log(newbook);
console.log(newbook.getBook());


var data = {};
console.log(data);
Object.defineProperty(data, 'type', {
    value: 'primary',
    enumerable: true
});
console.log(data);
console.log(data.type);
data.type = 'secondary';
console.log(data.type);

var ids = 5;
Object.defineProperty(data, 'id', {
    value: 1,
    get: function () {
        return ids;
    },
    set: function (value) {
        ids = value;
    },
    configurable: true,
    enumerable: true
});
console.log(data);
console.log(data.id);
ids = 3;
console.log(data.id);
data.id = 2;
console.log(data.id);
console.log(ids);

Object.preventExtensions(book); // no new properties

book.val3 = 'hello';
Object.seal(book); //no modification or new properties 
Object.freeze(book); //no modification or new properties , no value change of exisiting

Object.isFrozen(obj);
Object.isExtensible(obj);

//NameSpacing

var jscObj = {
    getEle: function (id) {
        return "hello" + id;
    }
}

console.log(jscObj.getEle("ok"));

// Chaining

function test(a, b, c) {
    this.getA = function () {
        return "a=" + a;
    };
    this.setA = function (z) {
        a = z;
        // return this;
    };
}
var newTest = new test('aa', 'bb', 'cc');
console.log(newTest.setA('zz').getA());