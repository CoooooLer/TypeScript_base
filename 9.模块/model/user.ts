import { MysqlDB } from '../modules/db'

// 操作用户表， 定义一个User类和数据表映射
class UserClass{
  username: string | undefined;
  password: string | undefined;
}

let UserModel = new MysqlDB<UserClass>({ 'name': 'admin' ,  'pass': '123' ,  'dbName': 'user' });

export {
  UserClass, UserModel
}
