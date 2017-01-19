class Drawable {

	constructor(object, color) {
		this.color = color
		this.object = object
		this.restricted = false
	}

	setup(){}

	draw() {
		console.log(`${this.object.className}(${this.object.x.toFixed(2)},${this.object.y.toFixed(2)})`)
		if(this.isAllowed(this.object.nextX(), this.object.nextY())) {
			this.object.move()
		}
	}

	restrict(startX, endX, startY, endY) {
		this.startX = startX 
		this.startY = startY 
		this.endX = endX 
		this.endY = endY

		this.restricted = true
	}

	isAllowed(x, y) {
		// console.log('checking if it is allowed: (' + x + ', ' + y + ')')
		return !this.restricted || this.startX <= x && x <= this.endX && this.startY <= y && y <= this.endY
	}

	restart() {
		this.object.restart()
	}
}
