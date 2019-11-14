/*
* 功能：定义一个操作数据库的库   支持mysql Mssql  MongoDB
* 要求：有add update delete get方法
* 注意：约束统一的规范、以及代码重用
* 解决方案：需要约束规范所以需要定义接口，需要代码复用所以用到泛型
*   1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
*   2、泛型：就是解决 类 接口 方法 的复用性
* */

interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作mysql数据库的类
// 注意：要实现泛型接口  这个类必须是一个泛型类
class MysqlDB<T> implements DBI<T>{
  constructor(props: object) {
    console.log('mysql')
    console.log(props)

  }


  add(info: T): boolean {
    console.log(info)
    return false;
  }

  delete(id: number): boolean {
    return false;
  }

  get(id: number): any[] {
    let list: object[] = [
      {
        title: '1111',
        content: '2222222222'
      },
      {
        title: '1111',
        content: '2222222222'
      }
    ]
    return list
  }

  update(info: T, id: number): boolean {
    return false;
  }

}

// 定义一个操作MongoDB数据库的类
// 注意：要实现泛型接口  这个类必须是一个泛型类
class myMongoDB<T> implements DBI<T>{
  constructor(props: object) {
    console.log('MongoDB')
    console.log(props)

  }


  add(info: T): boolean {
    console.log(info)
    return false;
  }

  delete(id: number): boolean {
    return false;
  }

  get(id: number): any {
    return false;
  }

  update(info: T, id: number): boolean {
    return false;
  }

}

// 操作用户表， 定义一个User类和数据表映射
class User{
  username: string | undefined;
  password: string | undefined;
}

let u = new User()
u.username = 'mike'
u.password = '123'

// 操作mysql
let oMysql = new MysqlDB<User>({ 'name': 'admin' ,  'pass': '123' ,  'dbName': 'user' }) // 类作为参数约束数据传入的类型
oMysql.add(u)
console.log(oMysql.get(12))

// 操作MongoDB
let oMongoDB = new myMongoDB<User>({ 'name': 'admin' ,  'pass': '123' ,  'dbName': 'user' }) // 类作为参数约束数据传入的类型
oMongoDB.add(u)
