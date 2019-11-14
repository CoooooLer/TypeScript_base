"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAEA");
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAEB");
        };
        return Dog;
    }());
    B.Dog = Dog;
})(B || (B = {}));
exports.B = B;
