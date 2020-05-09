export const CREATE_OPERATOR = [{
  name: 'create',
  type: '静态',
  value: '直接调用Observable构造函数',
  fun: '',
  introduce: ''
}, {
  name: 'of',
  type: '静态',
  value: '创建指定数据集合,同步返回数据后调用complete函数',
  fun: 'of(x,y,z,...)',
  introduce: '参数为任意类型',
}, {
  name: 'range',
  type: '静态',
  value: '创建连续数字的数据集合(每次+1),同步返回数据后调用complete函数',
  fun: 'range(start,number)',
  introduce: 'start:初始数字,number:数据长度'
}, {
  name: 'generate',
  type: '静态',
  value: '循环产生满足某个条件的数据序列,类似for循环',
  fun: 'generate(start,condition,change,result)',
  introduce: 'start:初始值,condition:需要满足的条件,change:每次值的变化,result:结果'
}, {
  name: 'repeat',
  type: '动态',
  value: '重复订阅并完成返回整个数据,必须保证上游的Observable对象一定会完结',
  fun: 'repeat(num)',
  introduce: 'num:重复的次数'
}, {
  name: 'empty/throwError/never',
  type: '静态',
  value: '分别产生一个空数据/抛出错误/什么也不做',
  fun: 'empty()/throwError(new Error(error))/never()',
  introduce: ''
}, {
  name: 'interval/timer',
  type: '静态',
  value: '类似JS的setTimeout和setInterval',
  fun: 'interval(number)',
  introduce: ''
}, {
  name: 'from',
  type: '静态',
  value: '将任何类似Observable的都转为一个实际的Observable',
  fun: 'from(x)',
  introduce:'x:数组,类似数,或者promise'
}]