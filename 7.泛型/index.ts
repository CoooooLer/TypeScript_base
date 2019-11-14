// 泛型就是解决 类、接口、方法 的复用性、以及对不特定数据类型的支持


// 只能返回string类型的数据
//   function getData(value: string): string {
//     return value
//   }


// 同时返回string类型和number类型， 可以用any, 但是缺少了类型检查
//     function getData(value: any): any {
//       return value
//     }
//     getData(123)
//     getData('123')


// 泛型：可以支持不特定的数据类型    要求：传入的参数和返回的参数一致
  // T表示泛型，具体什么类型是调用这个方法的时候决定的
  // function getData<T>(value: T): T {
  //   return value
  // }
  //
  // getData<number>(123);
  // getData<number>('123'); // error


// 泛型类： 比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。 通过类的泛型实现：

// 返回number类型的最小值  常规类实现
//   class MinClass {
//     public list: number[] = [];
//     add(num: number) {
//       this.list.push(num)
//     }
//
//     min():number {
//       let minNum = this.list[0];
//       for(let v of this.list) {
//         if(v < minNum) {
//           minNum = v
//         }
//       }
//       return minNum
//     }
//
//   }
//
//   let m = new MinClass()
//   m.add(1)
//   m.add(3)
//   m.add(2)
//   m.add(4)
//   console.log(m.min())

// 通过泛型类实现
//   class MinNum<T>{
//     public list: T[] = [];
//     add(value: T): void{
//       this.list.push(value)
//     };
//     min():T {
//       let minNum = this.list[0];
//       for(let v of this.list) {
//         if(v < minNum) {
//           minNum = v
//         }
//       }
//       return minNum
//     };
//   }
//
//   let m1 = new MinNum<number>() // 实例化类 并且制定了类的T代表的类型是number
//   m1.add(11)
//   m1.add(2)
//   m1.add(4)
//   m1.add(3)
//   console.log(m1.min())
//
//   let m2 = new MinNum<string>()
//   m2.add('b')
//   m2.add('c')
//   m2.add('e')
//   m2.add('d')
//   console.log(m2.min())


// 把类作为参数的泛型类
  // 定义一个User类，这个类用于映射数据库字段
  // 定义一个MysqlDB的类， 用于操作数据库
  // 让后把 User类作为参数传入到MysqlDB中

  // 把类作为参数约束数据传入的类型
  // class User{
  //   username: string | undefined;
  //   password: string | undefined;
  // }
  //
  // class MysqlDB{
  //   add(user: User): boolean {
  //     console.log(user)
  //     return true;
  //   }
  // }
  //
  // let u = new User()
  // u.username = 'mike';
  // u.password = '123';
  //
  // let DB = new MysqlDB()
  // DB.add(u)


  // 操作数据库的泛型类
  class MysqlDB<T>{
    add(info: T): boolean {
      console.log(info)
      return true
    }
    update(info: T, id: number): boolean {
      console.log(info)
      console.log(id)
      return true
    }
  }

  // 给User表增加数据
  // 1、定义一个User类和数据库进行映射
  class User{
    username: string | undefined;
    password: string | undefined;
  }

  let u = new User()
  u.username = 'jane'
  u.password = 'qed'

  let DB = new MysqlDB<User>()
  DB.add(u)

  // 2、定义一个articleCate类和数据库进行映射
  class ArticleCate{
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;

    constructor(params: {
      title: string | undefined,
      desc: string | undefined,
      status?: number | undefined
    }) {
      this.title = params.title,
      this.desc = params.desc,
      this.status = params.status
    }
  }

  // 添加数据
  let a = new ArticleCate({
    title: '动作',
    desc: '电影',

  })

  // 类当参数的泛型类
  let DB1 = new MysqlDB<ArticleCate>()
  DB1.add(a)

  // 修改数据
  let a2 = new ArticleCate({
    title: '修改标题',
    desc: '修改描述',

  })

  let DB2 = new MysqlDB<ArticleCate>()
  DB2.update(a2, 11)






// 泛型接口

  // 常规接口
  // interface ConfigFn{
  //   (value1: string, value2: string): string;
  // }
  //
  // let setData: ConfigFn = function (value1: string, value2: string): string {
  //   return value1 + '__' + value2
  // }
  //
  // console.log(setData('firstName', 'secondName'))

  // 1、泛型接口
  //   interface ConfigFn{
  //     <T>(value: T): T;
  //   }
  //
  //   let getData: ConfigFn = function<T> (value: T): T {
  //     return value;
  //   }
  //
  //   getData<string>('小5')
  //   getData<string>(213) // error

  // 2、泛型接口
  interface ConfigFn<T> {
    (value: T): T;
  }

  function getData<T>(value: T): T {
    return value
  }

  let myGetData: ConfigFn<string> = getData;

  myGetData('123')
  // myGetData(123) // error

