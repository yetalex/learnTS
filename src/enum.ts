// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// 实现原理
// var Obj = {}
//  Obj[Obj['Developer'] = 1]='Developer'  // 反向映射

// 字符串枚举，不允许反向映射
enum Message {
  Success = '恭喜，成功',
  Fail = '失败'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1+3,
  d = Math.random()
}