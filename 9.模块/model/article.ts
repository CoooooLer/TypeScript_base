import { myMongoDB } from '../modules/db'

// 操作用户表， 定义一个User类和数据表映射
class ArticleClass{
  username: string | undefined;
  password: string | undefined;
}

let ArticleModel = new myMongoDB<ArticleClass>({ 'name': 'admin' ,  'pass': '123' ,  'dbName': 'user' });

export {
  ArticleClass, ArticleModel
}
