var jsLib = {
    myTest: function (str) {
        return str + " " + str;
    },
    myTest2: function (str) {
        return str + "$$" + str;
    }
}
console.log(jsLib.myTest("ha ha"));



var jsLibSingleton = (function () {
    var instance;

    function init() {
        var temp = "##";
        return {
            myTest: function (str) {
                return str + temp + str;
            },
            myTest2: function (str) {
                return str + "$$" + str;
            }
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();
var testt = jsLibSingleton.getInstance();
console.log(testt.myTest("ha ha"));
console.log(jsLibSingleton.getInstance().myTest("na na"));

// no chain plugin
$.fn.setColor = function (color) {
    this.css("color", color);
}

// chain plugin
$.fn.incWidth = function () {
    return this.each(function () {
        var width = $(this).width() + 10;
        $(this).width(width);
    });
};

// work with multiple library plugin
;
(function ($) {
    $.fn.incWidth = function () {
        return this.each(function () {
            var width = $(this).width() + 10;
            $(this).width(width);
        });
    };
})(jQuery);


// jsHint
// JSbin
// JsFiddle
// cucumber.js
// TDD BDD
// https://www.browserstack.com
// https://saucelabs.com/
// benchmark.js
// profiling
// jperf

// WAI-ARIA
// W3c Standards

// github
// micro.js
// jsdb.io

// Math.js
// Accounting.js
// numbers.js
// moment.js