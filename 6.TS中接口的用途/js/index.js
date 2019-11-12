"use strict";
// 1、属性接口   对json的约束
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programer = /** @class */ (function () {
    function Programer(name) {
        this.name = name;
    }
    Programer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '好饿啊');
    };
    Web.prototype.work = function () {
        console.log(this.name + '还是要工作啊');
    };
    return Web;
}(Programer));
var w = new Web('小5');
w.eat();
w.work();
w.coding('写啥子代码');
