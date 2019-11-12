"use strict";
// ES5静态属性和静态方法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function Person() {
//   this.run = function () {
//
//   }
// }
//
// Person.name = 'mike' // 静态属性
//
// Person.run2 = function () { // 静态方法
//
// }
//
// // let p = new Person()
//
// Person.run2() // 调用静态方法
// TS类 静态属性 静态方法
//   class Person{
//     public name: string;
//     public age: number = 22;
//     static sex: string = '女' // 静态属性
//
//     constructor(name: string) {
//       this.name = name
//     }
//
//     run(): void {
//       console.log(`${this.name}在运动`)
//     }
//
//     work(): void {
//       console.log(`${this.name}在工作`)
//     }
//
//     static print(): void { // 静态方法  不能直接调用类里面的属性
//       // console.log(`今天${this.age}`)
//       console.log('性别' + Person.sex)
//     }
//
//   }
//
//   let p = new Person('Cooo')
//   // console.log(p.run())
//   console.log(Person.print())
//   // console.log(Person.sex)
// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态也属于继承
// class Animal{
//   name: string
//
//   constructor(name: string) {
//     this.name = name
//   }
//
//   eat(): void {
//     console.log('吃的方法')
//   }
// }
//
// class Dog extends Animal{
//
//   constructor(name: string) {
//     super(name)
//   }
//
//   eat(): string {
//     return this.name + '吃狗粮'
//   }
//
// }
//
// class Cat extends Animal{
//   constructor(name: string) {
//     super(name)
//   }
//
//   eat(): string {
//     return `${this.name}吃猫粮`
//   }
//
// }
// 抽象类：它是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract抽象方法只能放在抽象类里面
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他方法可以不实现');
    };
    return Animal;
}());
//let a = new Animal() // error
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃');
    };
    return Dog;
}(Animal));
var d = new Dog('小黑');
d.eat();
