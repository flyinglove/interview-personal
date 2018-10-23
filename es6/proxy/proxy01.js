var obj = new Proxy({}, {
	get: function(target, key, receiver) {
		console.log(`getting ${key}!`)
		return Reflect.get(target, key, receiver)
	},
	set: function(target, key, value, receiver) {
		console.log(`setting ${key}!`)
		return Reflect.set(target, key, value, receiver)
	}
})
//  通过proxy对象去访问某个对象的属性， 实际上实在目标对象和访问之间加了一层代理， 我通过访问代理proxy对象的方式访问了目标对象的属性

