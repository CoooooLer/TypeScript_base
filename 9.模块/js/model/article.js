"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../modules/db");
// 操作用户表， 定义一个User类和数据表映射
var ArticleClass = /** @class */ (function () {
    function ArticleClass() {
    }
    return ArticleClass;
}());
exports.ArticleClass = ArticleClass;
var ArticleModel = new db_1.myMongoDB({ 'name': 'admin', 'pass': '123', 'dbName': 'user' });
exports.ArticleModel = ArticleModel;
