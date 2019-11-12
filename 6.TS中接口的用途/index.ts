// 1、属性接口   对json的约束

  // ts中定义方法
  // function printLabel():void {
  //   console.log('printLabel')
  // }
  //
  // printLabel()

  // 对参数进行约束
  // function printLabel(str: string):void {
  //   console.log('printLabel')
  // }
  //
  // printLabel('123')

  // 传入参数对json进行约束
  // function printLabel(labelInfo: { label: string }): void {
  //   console.log(label)
  // }

  // printLabel(123) // error
  // printLabel({ name: 'mike' }) // error
  // printLabel({ label: 'hahah' })


  // 对批量方法传入参数进行约束
  // 接口：行为和动作的规范，对批量方法进行约束

    // 对传入对象的约束   属性接口
    // interface FullName{
    //   firstName: string; // 注意是以 分号 结尾
    //   secondName: string;
    // }
    //
    // function printName(name: FullName) {
    //
    //   // 必须传入对象 firstName secondName
    //   console.log(name.firstName + '--' + name.secondName)
    // }
    //
    // // printName(123) //error
    // let obj = {
    //   age: 123,
    //   firstName: '小',
    //   secondName: '5'
    // }
    // printName(obj)


    // 对批量方法传入参数进行约束
    // interface FullName{
    //   firstName: string; // 注意是以 分号 结尾
    //   secondName: string;
    // }
    //
    // function printName(name: FullName) {
    //
    //   // 必须传入对象 firstName secondName
    //   console.log(name.firstName + '--' + name.secondName)
    // }
    //
    // function printInfo(info: FullName) {
    //   console.log(info.firstName + info.secondName)
    // }
    //
    // let obj = {
    //   age: 123,
    //   firstName: '小',
    //   secondName: '5'
    // }
    // printName(obj)
    //
    // let info = {
    //   name: '',
    //   firstName: '大',
    //   secondName: '白'
    // }
    // printInfo(info)


    // 接口：可选属性
    // interface FullName{
    //   firstName: string;
    //   secondName?: string; // 可选参数
    // }
    //
    // function getName(name: FullName) {
    //   console.log(name)
    // }
    //
    // getName({
    //   firstName: '枭枭'
    // })

    // 参数顺序可以不一致
    // getName({
    //   secondName: '5',
    //   firstName: '小'
    // })

    // 例子 ajax请求
    // interface Config{
    //   type: string;
    //   url: string;
    //   data?: string;
    //   dataType: string;
    // }
    //
    // function ajax(config: Config) {
    //   let xhr = new XMLHttpRequest();
    //   xhr.open(config.type, config.url, true)
    //   xhr.send(config.data)
    //   xhr.onreadystatechange = () => {
    //     if(xhr.readyState == 4 && xhr.status == 200) {
    //       console.log('success')
    //       if(config.dataType == 'json') {
    //         let data = JSON.parse(xhr.responseText)
    //         console.log(data)
    //       } else {
    //         let data = xhr.responseText
    //         console.log(data)
    //       }
    //     }
    //   }
    //
    // }
    //
    // ajax({
    //   url: 'http://gank.io/api/today',
    //   type: 'get',
    //   data: '',
    //   dataType: 'json'
    // })


  // 函数类型接口：对方法传入的参数 以及返回值进行约束

  // 加密的函数类型接口
  // interface encrypt{
  //   (key: string, value: string): string;
  // }
  //
  // let md5: encrypt = function (key: string, value: string): string {
  //   // 模拟操作
  //   return key + value
  // }
  //
  // console.log(md5('name', '小5'))
  //
  // let sha1: encrypt = function (key: string, value: string): string {
  //   return key + '----' + value
  // }
  // console.log(sha1('nickname', '飞鸟'))



  // 可索引接口：数组、对象的约束  （不常用）

  // 定义数组的两种方式
  //   let arr: number[] = [1232, 3243]
  //   let arr1:Array<number> = [12, 34]

  // 对数组的约束
  // interface UserArr{
  //   [ index: number ]: string;
  // }
  //
  // // let arr: UserArr = [ '1', 2 ] // error
  // let arr: UserArr = [ 'qwer', 'adg' ]
  // console.log(arr[0])


  // 对对象的约束
  // interface UserObj{
  //   [ index: string ]: string;
  // }
  //
  // let obj:UserObj = { name: '小5' }



// 类类型接口： 对类的约束 和 抽象类有点相似
//   interface Animal {
//     name: string;
//     eat(str: string): void;
//   }
//
//   class Dog implements Animal {
//     name: string;
//     constructor(name: string){
//       this.name = name
//     }
//
//     eat() {
//       console.log(this.name + "好饿啊")
//     }
//   }
//
//   let d = new Dog('小5')
//   d.eat()
//
//   class Cat implements Animal{
//     name: string;
//     constructor(name: string) {
//       this.name = name
//     }
//
//     eat(food: string) {
//       console.log(this.name + food)
//     }
//   }
//
//   let C = new Cat('小猫')
//   C.eat('吃鱼')



// 接口的扩展，接口可以继承接口
//   interface Animal{
//     eat(): void;
//   }
//
//   interface Person extends Animal{
//     work(): void;
//   }
//
//   class Web implements Person{
//     public name: string;
//     constructor(name: string) {
//       this.name = name
//     }
//
//     eat() {
//       console.log(this.name + '好饿啊')
//     }
//
//     work() {
//       console.log(this.name + '还是要工作啊')
//     }
//   }
//
//   let w = new Web('小5')
//   w.eat()
//   w.work()



  interface Animal{
    eat(): void;
  }

  interface Person extends Animal{
    work(): void;
  }

  class Programer{
    public name: string;
    constructor(name: string) {
      this.name = name
    }

    coding(code: string) {
      console.log(this.name + code)
    }
  }

  class Web extends Programer implements Person{
    constructor(name: string) {
      super(name)
    }

    eat() {
      console.log(this.name + '好饿啊')
    }

    work() {
      console.log(this.name + '还是要工作啊')
    }
  }

  let w = new Web('小5')
  w.eat()
  w.work()
  w.coding('写啥子代码')
