class Food extends MovingObject {
	constructor() {
		super(0, 0, 0, 0)
		this.className = 'Food'

	}

	restart(x, y) {
		this.x = x
		this.y = y
	}

	static is(obj) {
		return obj.className === 'Food'
	}

	static find(array) {
		return array.find((obj) => Food.is(obj))
	}
}