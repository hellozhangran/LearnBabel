"use strict";

var add = function add(a, b) {
    console.log(a + b);
};

var out = function out() {
    var set = new Set();
    for (var i = 0; i < 10; i++) {
        set.add('this is ' + i);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log(i);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

var destruct = function destruct() {
    //解构赋值在node5上是不支持滴
    var head = 1;
    var tail = [2, 3, 4];

    console.log(tail);
};

destruct();

//let first = (size, ...args) => [...args].slice(0, size);
