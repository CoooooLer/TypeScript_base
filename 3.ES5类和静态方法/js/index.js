// 1. es5里面的类
//   function Person() {
//     this.name = 'mike',
//     this.age = 20
//   }
//
//   let p = new Person()
//   console.log(p.name)

// 2.构造函数和原型链增加方法
function Person() {
  this.name = 'jane',
      this.age = 22,
      this.run = function () { // 实例方法
        console.log('jane的方法')
      }
}

// 3.静态方法
Person.getInfo = function() {
  console.log('静态方法')
}

// 原型链上的属性和方法会被多个实例共享  构造函数不会
Person.prototype.sex = '女'
Person.prototype.say = function() {
  console.log(`${this.name}说你好`)
}

console.log(Person.getInfo())

let p = new Person()
// console.log(p.run())
console.log(p.say())

// es5的继承
// 4.方式一：对象冒充继承
function Person1() {
  this.name = 'mike',
      this.age = 20,
      this.run = function () {
        console.log(this.name+'的方法')
      }
}

Person1.prototype.sex = '女'
Person1.prototype.say = function() {
  console.log(`${this.name}说你好`)
}

// Student类 继承Person1类  原型链+对象冒充的组合继承模式
function Student() {
  Person1.call(this) // 对象冒充实现继承
}

let s1 = new Student()
// console.log(s1.run())
// console.log(s1.say()) // error 对象冒充无法继承原型链上吊额属性和方法


// 5.方式2： 原型链继承
function Person2() {
  this.name = 'mikeeeee',
      this.age = 20,
      this.run = function () {
        console.log(this.name+'的方法1')
      }
}

Person2.prototype.sex = '女'
Person2.prototype.say = function() {
  console.log(`${this.name}说你好1`)
}

// Student类 继承Person1类  原型链+对象冒充的组合继承模式
function Student() {

}
Student.prototype = new Person2() // 原型链实现继承：可以继承构造函数的属性和方法，也可以继承原型链上的属性和方法
let s = new Student()
console.log(s.run())
console.log(s.say())

// 6.原型链继承产生的问题？
  function Person3(name, age) {
    this.name = name, // 属性
        this.age = age,
        this.run = function () { // 实例方法
          console.log(this.name+'的方法')
        }
  }

  Person3.prototype.sex = '女'
  Person3.prototype.say = function() {
    console.log(`${this.name}说你好`)
  }

  // let p3 = new Person3('李四', 33)
  //   p3.run()
  //   p3.say()

  function Student3(name, age) {

  }

  Student3.prototype = new Person3()
  let s3 = new Student3('李四', 132)
  s3.run()



// 7.原型链加对象冒充的组合继承
function Person4(name, age) {
  this.name = name, // 属性
      this.age = age,
      this.run = function () { // 实例方法
        console.log(this.name+'的方法')
      }
}

Person4.prototype.sex = '女'
Person4.prototype.say = function() {
  console.log(`${this.name}说你好`)
}



function Student4(name, age) {
  Person4.call(this, name, age) // 对象冒充继承  实例化子类
}

Student4.prototype = new Person4()

let s4 = new Student4('赵5', 132)
s4.run()
s4.say()


// 7.原型链加对象冒充的组合继承的另一种方法
function Person5(name, age) {
  this.name = name, // 属性
      this.age = age,
      this.run = function () { // 实例方法
        console.log(this.name+'的方法')
      }
}

Person5.prototype.sex = '女'
Person5.prototype.say = function() {
  console.log(`${this.name}说你好`)
}



function Student5(name, age) {
  Person4.call(this, name, age) // 对象冒充继承  实例化子类
}

// Student5.prototype = new Person5()
Student5.prototype = Person4.prototype

let s5 = new Student5('赵66', 132)
s5.run()
s5.say()
