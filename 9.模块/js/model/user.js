"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
// 操作用户表， 定义一个User类和数据表映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
exports.UserClass = UserClass;
var UserModel = new db_1.MysqlDB({ 'name': 'admin', 'pass': '123', 'dbName': 'user' });
exports.UserModel = UserModel;
