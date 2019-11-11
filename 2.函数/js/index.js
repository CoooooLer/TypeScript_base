"use strict";
// 函数的定义
function fn() {
    // return 123 // error
    return '123';
}
// 传参
function get(name, age) {
    return name + "---" + age;
}
console.log(get('mike', 20));
// 没有返回值的方法
function empty() {
    console.log('empty');
}
empty();
// 可选参数
// 注意可选参数必须配置到参数的最后面
function getInfo(name, age) {
    if (age) {
        return name + "++" + age;
    }
    else {
        return name + "+++\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(getInfo('jane'));
// 默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 11; }
    return name + "----" + age;
}
console.log(getInfo2('mike'));
console.log(getInfo2('mike', 32));
// 剩余参数
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var v = args_1[_a];
        sum += v;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));
function sum1(a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
        var v = args_2[_a];
        sum += v;
    }
    return sum;
}
console.log(sum1(1, 2, 3, 4));
function get2(str) {
    if (typeof str === 'string') {
        return "\u6211\u662F" + str;
    }
    else {
        return "\u5E74\u9F84" + str;
    }
}
console.log(get2('mike'));
console.log(get2(20));
