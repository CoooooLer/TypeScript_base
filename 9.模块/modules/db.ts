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

export {
  MysqlDB,
  myMongoDB
}
