// tsc --init 生成tsconfig.json  修改"outDir": "./js"

// 定义字符串
  let str: string = 'hello'
  // str = 123

  console.log(str)

// 定义数组的方式1
  let arr1: number[] = [2, 3, 4]

// 定义数组的方式2
  let arr2: Array<number> = [1 ,3 ,4]

// 定义数组的方式3
  let arr33: any[] = [123, false, 'eee']

// 元组类型(tuple) 属于数组的一种
  let arr3: [number, string] = [123, 'hello']

// 枚举类型 主要用于多个状态判断
  enum Flag { success = 1, error = 0 }
  let t: Flag = Flag.success
  console.log(t)

// 任意类型 any
  let num: any = 123
    num = 'hello'

  // 例子
  let oBox: any = document.getElementById('box')
    oBox.style.color = 'pink'


// null 和 undefined

  /*let n: number
  console.log(n)*/

 /* let n: undefined
    console.log(n)*/

  let n: number | undefined | null
  n = 123
  // console.log(n)

// void类型：表示没有任何类型，用于方法无返回值的时候
  function fn(): void {
    console.log('void')
  }
  fn()

// never类型: 其他类型 包括null 和 undefined 的子类型，表示从不会出现的值

  let ne: undefined
  ne = undefined

  let nu: null
  nu = null

  // 例子
  let err: never
  // err = 123 // error
  err = (() => {
    throw new Error('error')
  })()
