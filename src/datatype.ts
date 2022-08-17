// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'


// 数组
let arr1: number[] = [1, 3, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = ['4', 1, 2, '3']

// 元组
let tuple: [number, string] = [0, '1']


// 函数
let add = (x:number, y:number) => x + y

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 9


// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => {}


// any
let x

// never
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while(true){}
}
