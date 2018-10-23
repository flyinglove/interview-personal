var Animal = require('./baseClass.js')
function Cat(name) {
	var instance = new Animal()
	instance.name = name || 'Tom'
	return instance
}