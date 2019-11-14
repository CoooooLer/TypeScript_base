"use strict";
/*
* 功能：定义一个操作数据库的库   支持mysql Mssql  MongoDB
* 要求：有add update delete get方法
* 注意：约束统一的规范、以及代码重用
* 解决方案：需要约束规范所以需要定义接口，需要代码复用所以用到泛型
*   1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
*   2、泛型：就是解决 类 接口 方法 的复用性
* */
// 定义一个操作mysql数据库的类
// 注意：要实现泛型接口  这个类必须是一个泛型类
var MysqlDB = /** @class */ (function () {
    function MysqlDB(props) {
        console.log('mysql');
        console.log(props);
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    MysqlDB.prototype.delete = function (id) {
        return false;
    };
    MysqlDB.prototype.get = function (id) {
        var list = [
            {
                title: '1111',
                content: '2222222222'
            },
            {
                title: '1111',
                content: '2222222222'
            }
        ];
        return list;
    };
    MysqlDB.prototype.update = function (info, id) {
        return false;
    };
    return MysqlDB;
}());
// 定义一个操作MongoDB数据库的类
// 注意：要实现泛型接口  这个类必须是一个泛型类
var myMongoDB = /** @class */ (function () {
    function myMongoDB(props) {
        console.log('MongoDB');
        console.log(props);
    }
    myMongoDB.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    myMongoDB.prototype.delete = function (id) {
        return false;
    };
    myMongoDB.prototype.get = function (id) {
        return false;
    };
    myMongoDB.prototype.update = function (info, id) {
        return false;
    };
    return myMongoDB;
}());
// 操作用户表， 定义一个User类和数据表映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = 'mike';
u.password = '123';
// 操作mysql
var oMysql = new MysqlDB({ 'name': 'admin', 'pass': '123', 'dbName': 'user' }); // 类作为参数约束数据传入的类型
oMysql.add(u);
console.log(oMysql.get(12));
// 操作MongoDB
var oMongoDB = new myMongoDB({ 'name': 'admin', 'pass': '123', 'dbName': 'user' }); // 类作为参数约束数据传入的类型
oMongoDB.add(u);
