// 函数的定义
  function fn(): string {
    // return 123 // error
    return '123'
  }

  // 传参
  function get(name: string, age: number): string {
    return `${name}---${age}`
  }

  console.log(get('mike', 20));

  // 没有返回值的方法
  function empty(): void {
    console.log('empty')
  }
  empty()

// 可选参数
// 注意可选参数必须配置到参数的最后面
  function getInfo(name: string, age?: number) {
    if(age) {
      return `${name}++${age}`
    } else {
      return `${name}+++年龄保密`
    }
  }

  console.log(getInfo('jane',))

// 默认参数

  function getInfo2(name:string, age: number = 11): string {
    return `${name}----${age}`
  }

  console.log(getInfo2('mike'))
  console.log(getInfo2('mike', 32))

// 剩余参数
  function sum(...args: number[]): number {
    let sum: number = 0
    for(let v of args){
      sum += v
    }
    return sum
  }

  console.log(sum(1, 2 ,3 ,4))


  function sum1(a: number, b:number, ...args: number[] ) {
    let sum: number = a + b
    for(let v of args) {
      sum += v
    }
    return sum
  }

  console.log(sum1(1, 2, 3, 4))

// 函数重载
  function get2(age: number): number ;
  function get2(name: string): string ;
  function get2(str: any): any {
    if(typeof str === 'string'){
      return `我是${str}`
    } else {
      return `年龄${str}`
    }
  }

  console.log(get2('mike'))
  console.log(get2(20))











