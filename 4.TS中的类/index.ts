// es5中的类

  // function Person(name) {
  //   this.name = name,
  //   this.run = function () {
  //     console.log(`${this.name}run`)
  //   }
  // }
  //
  // let p = new Person()
  // console.log(p.run())


// 1.TS的类
//   class Person {
//     name: string; // 属性
//
//     constructor(n: string) { // 构造函数  实例化类的时候触发的方法
//       this.name = n
//     }
//
//     run(): void {
//       console.log(`${this.name}的方法`)
//     }
//
//   }
//
//   let p = new Person('mike')
//   p.run()



  // class Person {
  //   name: string; // 属性
  //
  //   constructor(n: string) { // 构造函数  实例化类的时候触发的方法
  //     this.name = n
  //   }
  //
  //   getName(): string {
  //     return this.name
  //   }
  //
  //   setName(name: string): void {
  //     this.name = name
  //   }
  //
  //
  // }
  //
  // let p = new Person('mike')
  // console.log(p.getName())
  // p.setName('jane')
  // console.log(p.getName())

// 2. ts中类的继承 extends super
//   class Person{
//     name: string
//
//     constructor(name: string) {
//       this.name = name
//     }
//
//
//     run(): string {
//       return `${this.name}的方法`
//     }
//   }
//
//   // let p = new Person('小五')
//   // console.log(p.run())
//
//   class Web extends Person{
//     constructor(name: string) {
//       super(name) // 初始化父类的构造函数
//     }
//
//   }
//
//   let w = new Web('小6')
//   console.log(w.run())


// 2.1 ts中类的继承 子类的方法
// class Person{
//   name: string
//
//   constructor(name: string) {
//     this.name = name
//   }
//
//
//   run(): string {
//     return `${this.name}的方法`
//   }
// }
//
// // let p = new Person('小五')
// // console.log(p.run())
//
// class Web extends Person{
//   constructor(name: string) {
//     super(name) // 初始化父类的构造函数
//   }
//
//   run(): void {
//     console.log(`${this.name}在运动-子类`)
//   }
//
//   work(): void {
//     console.log(`${this.name}在工作`)
//   }
//
// }
//
// let w = new Web('小6')
// console.log(w.run())
// // console.log(w.work())



// 3. ts中类的修饰符 三种修饰符
/*
* public: 公有          在当前类里面、子类、类外面都可以访问
* protected: 保护类型     只有当前类里面和子类可以访问
* private: 私有           只有当前类里面可以访问
*
* 注意：如果没有声明修饰符，默认是public
* */

class Person{
  // public name: string
  // protected name: string
  private name: string

  constructor(name: string) {
    this.name = name
  }

  run(): string {
    return `${this.name}的方法`
  }
}


// class Web extends Person{
//   constructor(name: string) {
//     super(name) // 初始化父类的构造函数
//   }
//
//   work(): void {
//     console.log(`${this.name}在工作`)
//   }
//
// }
//
// let w = new Web('小666')
// console.log(w.run())
// console.log(w.work())
