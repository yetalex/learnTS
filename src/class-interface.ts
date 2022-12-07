// 接口与类的关系

// 接口只能约束类的公有成员，可以相互继承
interface Human {
  name: string
  eat(): void
}

class Asian implements Human {
  constructor(public name: string) {
    this.name = name
  }
  eat() {}
}