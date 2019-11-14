"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”
var user_1 = require("./model/user");
var article_1 = require("./model/article");
var u = new user_1.UserClass();
u.username = 'mike';
u.password = '123';
// 操作mysql
user_1.UserModel.add(u);
console.log(user_1.UserModel.get(12));
var a = new article_1.ArticleClass();
// 操作MongoDB
article_1.ArticleModel.add(u);
console.log(article_1.ArticleModel.get(212));
