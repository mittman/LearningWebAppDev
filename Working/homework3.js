/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
var exercise1 = function (nums) {
    "use strict";
    var sum = 0,
        i;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    return Math.round(sum / i);
};

var exercise2 = function (nums) {
    "use strict";
    var max = 0,
        i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
};

var exercise_2 = function (nums) {
    "use strict";
    return _.max(_.values(nums));
};

var exercise3 = function (nums) {
    "use strict";
    var even = "false",
        i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even = "true";
        }
    }

    return even;
};

var exercise_3 = function (nums) {
    "use strict";

    var result = _.some(nums, function (n) {
        return (n % 2 === 0);
    });

    if (result === true) {
        return "true";
    }

    return "false";
};

var exercise4 = function (nums) {
    "use strict";
    var even = "false",
        i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even = "true";
        } else {
            return "false";
        }
    }

    return even;
};

var exercise_4 = function (nums) {
    "use strict";
    var result = _.every(nums, function (n) {
        return (n % 2 === 0);
    });

    if (result === true) {
        return "true";
    }

    return "false";
};

var arrayContains = function (arr, str) {
    "use strict";
    var found = "false",
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            found = "true";
        }
    }

    return found;
};

var arrayContainsTwo = function (arr, str) {
    "use strict";
    var found = 0,
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            ++found;
        }
    }

    if (found >= 2) {
        return "true";
    } else {
        return "false";
    }
};

var arrayContainsThree = function (arr, str) {
    "use strict";
    var found = 0,
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            ++found;
        }
    }

    if (found >= 3) {
        return "true";
    } else {
        return "false";
    }
};

var arrayContainsNTimes = function (arr, str, count) {
    "use strict";
    var found = 0,
        i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            ++found;
        }
    }

    if (found >= count) {
        return "true";
    } else {
        return "false";
    }
};

var inject = function (selector, value) {
    "use strict";
    $("#" + selector).html(value);
};

inject("ex1", exercise1([2, 9, 3, 1, 7]));
inject("ex2", exercise2([2, 9, 3, 1, 7]));
inject("ex_2", exercise_2([2, 9, 3, 1, 7]));
inject("ex3", exercise3([2, 9, 3, 1, 7]));
inject("ex_3", exercise_3([2, 9, 3, 1, 7]));
inject("ex4", exercise4([2, 9, 3, 1, 7]));
inject("ex_4", exercise_4([2, 9, 3, 1, 7]));

inject("ex5_1", arrayContains(["hello", "world"], "hello"));
inject("ex5_2", arrayContains(["hello", "world"], "goodbye"));
inject("ex5_3", arrayContains(["hello", "world", "goodbye"], "goodbye"));

inject("ex6_1", arrayContainsTwo(["a", "b", "a", "c"], "a"));
//alert(arrayContainsTwo(["a","b","a","c"], "b"))
//alert(arrayContainsTwo(["a","b","a","c","a"], "a"))

inject("ex6_2", arrayContainsThree(["a", "b", "c", "c"], "a"));
//alert(arrayContainsThree(["a","b","a","c", "a"], "a"))
//alert(arrayContainsThree(["a","b","a","c"], "b"))
//alert(arrayContainsThree(["a","b","a","c","a", "a"], "a"))

inject("ex6_3", arrayContainsNTimes(["a", "b", "a", "c"], "a", 2));
//alert(arrayContainsNTimes(["a","b","a","c"], "a", 3))
//alert(arrayContainsNTimes(["a","b","a","c", "a", "a"], "a", 4))
