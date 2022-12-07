// 抽象类
abstract class Animal {
  eat() {                 // 子类可以直接访问
    console.log('eat')
  }
  abstract sleep(): void  // 抽象方法，子类需要实现
}

class Dog extends Animal {
  // private constructor  表示类不能被实例化，也不能被继承
  // protected constructor 表示类不能被实例化，只能被继承，一般用作基类
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string  // 等于 public
  run() {}
  private pri() {}  // 之类不能调用
  protected pro() {}  // 只能在类或者子类中访问，不能在实例中访问
  readonly legs: number = 4
  static food: string = 'bones'  // 只能类名访问，不能实例访问

  sleep() {
    console.log('dog sleep')
  }
}

console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri()


class Husky extends Dog {
  // (name: string, public color: string) {}  // 表示color已经是实例属性了，不需要再声明
  constructor(name: string, color: string) {
    super(name)
    this.color = color
    this.pro()
  }
  color: string
  sleep() {
    console.log('Husky sleep')
  }
}

class Cat extends Animal {
  sleep(): void {
    console.log('Cat sleep')
  }
}

let cat = new Cat()
let husky = new Husky('lala', 'red')

// 多态
let animals: Animal[] = [dog, cat, husky]
animals.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    return this
  }

  step2() {
    return this
  }
}

new WorkFlow().step1().step2()  // 链式调用

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}

new MyFlow().step1().next().step2()

