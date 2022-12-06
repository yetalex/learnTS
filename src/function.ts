// 函数定义
function add1(x:number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

// 不确定个数参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重载，先定义函数声明，然后在最宽泛版本中实现函数；
// 最常用的参数版本写在最前面
function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any{
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  } else {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
