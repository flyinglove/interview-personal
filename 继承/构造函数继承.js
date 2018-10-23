var Animal = require('./baseClass.js')

function Cat(name) {
	Animal.call(this)
	this.name = name || 'Tom'
}

// 核心： 使用父类的构造函数来增强子类实例， 相当于复制父类的实例给子类
// 优点：　创建子类实例时，　可以向父类传递参数，　可以实现多继承，父类原型上的属性不会被子类共享
// 缺点： 实例不是父类的实例， 只是子类的实例
//		  不能继承父类原型上的属性和方法，
// 		  每个子类都有父类实例函数的副本， 影响性能
