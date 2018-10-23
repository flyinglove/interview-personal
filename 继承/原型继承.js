// 将父类的实例作为子类的原型
// import {Animal} from './baseClass.js'
var Animal = require('./baseClass.js')
function Cat() {
}
Cat.prototype = new Animal()
Cat.prototype.name = 'cat'

// 优点： 实现简单，父类新增的原型属性和方法子类都能直接访问到
// 缺点： 创建子类实例时， 无法向父类构造函数传参, 要想为子类新增原型属性和方法， 需要在new Animal()之后去执行



