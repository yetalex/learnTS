// 基础类型推断
// let a = 1
// let b = ''

// let c = (x=1) => x + 1

// 上下文类型推断
window.onkeydown = (event) => {
  // console.log(event.key)
}

// 类型断言
// let foo = {} as Foo

// 类型兼容
let s: string = 'a'

// 接口兼容性
interface X {
  a: any
  b: any
}

interface Y {
  a: any
  b: any
  c: any
}

let z: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
x=y

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 1) 参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}

a = b
a = c
// b = c  // 需要关闭 strictFunctionTypes

// 2)参数类型
let handler3 = (a: string) => {}
// hof(handler3)  不兼容

// 3) 返回值类型
let f = () => ({name: 'Alice'})
let g = () => ({name: 'Alice', location: 'Beijing'})
f = g
// g = f

// 枚举兼容性, 枚举之间完全不兼容，与number类型兼容
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple

// 类兼容性，比较的时候，静态类型和构造函数是不参与比较的
// 如果两个类的实例成员一样就能兼容，如果有私有成员，两个类的实例也不兼容


// 泛型兼容性, T被使用的时候就不兼容了
interface Empty<T> {
  value: T
}

let obj1: Empty<number> = {value: 1}
let obj2: Empty<string> = {value: '2'}
// obj1 = obj2