"use strict";
// tsc --init 生成tsconfig.json  修改"outDir": "./js"
// 定义字符串
var str = 'hello';
// str = 123
console.log(str);
// 定义数组的方式1
var arr1 = [2, 3, 4];
// 定义数组的方式2
var arr2 = [1, 3, 4];
// 定义数组的方式3
var arr33 = [123, false, 'eee'];
// 元组类型(tuple) 属于数组的一种
var arr3 = [123, 'hello'];
// 枚举类型 主要用于多个状态判断
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var t = Flag.success;
console.log(t);
// 任意类型 any
var num = 123;
num = 'hello';
// 例子
var oBox = document.getElementById('box');
oBox.style.color = 'pink';
// null 和 undefined
/*let n: number
console.log(n)*/
/* let n: undefined
   console.log(n)*/
var n;
n = 123;
// console.log(n)
// void类型：表示没有任何类型，用于方法无返回值的时候
function fn() {
    console.log('void');
}
fn();
// never类型: 其他类型 包括null 和 undefined 的子类型，表示从不会出现的值
var ne;
ne = undefined;
var nu;
nu = null;
// 例子
var err;
// err = 123 // error
err = (function () {
    throw new Error('error');
})();
