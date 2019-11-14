//  “内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”
import { UserClass, UserModel } from './model/user'
import { ArticleClass, ArticleModel } from './model/article'


let u = new UserClass()
u.username = 'mike'
u.password = '123'

// 操作mysql
UserModel.add(u)
console.log(UserModel.get(12))


let a = new ArticleClass()
// 操作MongoDB
ArticleModel.add(u)
console.log(ArticleModel.get(212))
