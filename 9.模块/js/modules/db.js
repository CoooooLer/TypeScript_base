"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.MysqlDB = MysqlDB;
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
exports.myMongoDB = myMongoDB;
