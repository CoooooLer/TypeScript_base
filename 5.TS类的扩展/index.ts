// ES5静态属性和静态方法

  function Person() {
    this.run = function () {

    }
  }

  Person.name = 'mike' // 静态属性

  Person.run2 = function () { // 静态方法

  }

  // let p = new Person()

  Person.run2() // 调用静态方法
