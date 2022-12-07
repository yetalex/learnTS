function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['a', 'b'])
log(['a', 'b'])

// 定义泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log  // 完成泛型函数的实现

// 泛型接口
// interface Log {
//   <T>(value: T): T
// }

// 约束整个接口
// interface Log<T = string> {
//   (value: T): T
// }

// let myLog: Log<number> = log

// 泛型类
class Log<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}

// 和泛型约束
interface Length {
  length: number
}
function log1<T extends Length>(value: T): T {  // extends Length 就是泛型约束，只要传入的参数有length就可以了
  console.log(value, value.length)
  return value
}
