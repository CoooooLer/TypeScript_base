// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能


// 1、类装饰器: 普通装饰器，无法传参
// function logClass(params: any){
//   console.log(params)
//   // params 就是 logClass 这个类
//   params.prototype.desc = '动态添加的属性'
//
//   params.prototype.run = function () {
//     console.log('动态扩张的方法')
//   }
// }
//
//
// @logClass // 调用装饰器
// class HttpClient{
//   constructor() {
//
//   }
//
//   getData() {
//   }
//
// }
//
// let h: any = new HttpClient()
// console.log(h.desc)
// h.run()


// 1.2、类装饰器：装饰器工厂，可传参
// function logClass(params: string) {
//
//   return function (target: any) {
//     console.log(target)
//     console.log(params)
//     target.prototype.desc = params
//   }
// }
//
// @logClass('hello')
// class HttpClient{
//   constructor() {
//
//   }
//
//   getData() {
//
//   }
// }
//
// let h:any = new HttpClient()
// console.log(h.desc)


// 重载构造函数的例子
// function logClass(target: any) {
//   console.log(target)
//
//   return class extends target{
//     desc: any = '修改后的desc';
//
//     getData() {
//       console.log(this.desc + '---重载')
//     }
//   }
// }
//
// @logClass
// class HttpClient{
//
//   public desc: string | undefined;
//
//   constructor() {
//     this.desc = '构造函数里的desc'
//   }
//
//   getData() {
//     console.log(this.desc)
//   }
// }
//
// let h:any =new HttpClient()
// h.getData()


// 2、属性装饰器
/*
* 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
*   1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
*   2、成员的名字
* */

  // 属性装饰器
  // function logProperty(params: any) {
  //   return function (target: any, attr: any) {
  //     console.log(target)
  //     console.log(attr)
  //     target[attr] = params + '被修改'
  //   }
  // }
  //
  // class HttpClient{
  //   @logProperty('desc')
  //   public desc:string | undefined;
  //
  //   constructor() {
  //
  //   }
  //   getData() {
  //     console.log(this.desc)
  //   }
  // }
  //
  // let h: any = new HttpClient()
  // // console.log(h.desc)
  // h.getData()


// 3.方法装饰器
/*
*   它会被应用到方法的 属性描述符上，可以用来监视、修改或者替换方法定义
*   方法装饰器在运行时传入下列3个参数：
*     1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
*     2、成员的名字
*     3、成员的属性描述符
* */

  // 方法装饰器一
  // function get(params: any) {
  //   return function (target: any, methodName: any, desc: any) {
  //     console.log(target)
  //     console.log(methodName)
  //     console.log(desc)
  //     target.desc = 'desc...'
  //     target.run = function () {
  //       console.log('run')
  //     }
  //   }
  // }
  //
  // class HttpClient{
  //   public url: string | undefined;
  //
  //   constructor() {
  //     this.url = 'api'
  //   }
  //
  //   @get('/proxy/api')
  //   getData() {
  //     console.log(this.url)
  //   }
  // }
  //
  // let h: any = new HttpClient()
  // // h.getData()
  // console.log(h.desc)
  // h.run()



  // 方法装饰器二
  //   function get(params: string) {
  //     return function (target: any, methodName: any, desc: any) {
  //       console.log(target)
  //       console.log(methodName)
  //       console.log(desc.value)
  //
  //       // 修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型
  //       // 1、保存当前的方法
  //       let oMethod = desc.value
  //       desc.value = function (...args: any[]) {
  //         args = args.map( (value) => {
  //          return String(value)
  //         })
  //         oMethod.apply(this, args)
  //       }
  //     }
  //   }
  //
  //   class HttpClient{
  //     public url: string | undefined;
  //
  //     constructor() {
  //       this.url = 'init url'
  //     }
  //
  //     @get('aaa')
  //     getData(...args: any[]) {
  //       console.log(args)
  //       console.log('getData里面的方法')
  //     }
  //   }
  //
  //   let h: any = new HttpClient()
  //   h.getData(123, 'aaaa')



// 4.方法参数装饰器  不常用
/*    参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：
*       1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
*       2、方法的名字
*       3、参数在函数参数列表中的索引
* */
  //
  // function logParam(params: any) {
  //   return function (target: any, methodName: any, paramIndex: any) {
  //     console.log(params)
  //     console.log(target)
  //     console.log(methodName)
  //     console.log(paramIndex)
  //     target.desc = 'hello too'
  //   }
  // }
  //
  //
  // class HttpClient{
  //   public desc: string | undefined;
  //
  //   constructor() {
  //
  //   }
  //
  //   getData(@logParam('hello') param: any) {
  //     console.log('getData')
  //   }
  // }
  //
  // let h: any = new HttpClient()
  // h.getData()
  // console.log(h.desc)


// 装饰器的执行顺序
// 属性》方法》方法参数》类
// 如果有多个相同的装饰器，先执行后面的

function logClass1(params: any) {
  return function (target: any) {
    console.log('类装饰器1')
  }
}

function logClass2(params: any) {
  return function (target: any) {
    console.log('类装饰器2')
  }
}

function logAttribute(params: any) {
  return function (target: any, name: any) {
    console.log('属性装饰器')
  }
}

function logMethod(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log('方法装饰器')
  }
}

function logParam1(params: any) {
  return function (target: any, methodName: any, paramIndex: any) {
    console.log('参数装饰器1')
  }
}

function logParam2(params: any) {
  return function (target: any, methodName: any, paramIndex: any) {
    console.log('参数装饰器2')
  }
}

@logClass1('class1')
@logClass2('class2')
class HttpClient{

  @logAttribute('attribute')
  public desc: string | undefined;

  constructor() {

  }

  @logMethod('method1')
  getData(@logParam1('param1') param1: any, @logParam2('param2') param2: any) {
    console.log('getData的函数体')
  }
}

let h = new HttpClient()
h.getData('param1', 'param2')
