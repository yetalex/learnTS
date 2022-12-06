//1. 对象类型接口
interface List {
  readonly id: number
  name: string
  age?: number
  [x: string]: any  // 索引签名
}
interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
  });
}

let result = {
  data: [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'}
  ]
}
render(result)


// 2. 函数类型接口

// let add: (x: number, y: number) => number

// interface Add {
//   (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number

let add: Add = (a, b) => a + b

// 混合类型

interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}

  return lib
}

