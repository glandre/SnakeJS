class MovingObject {
	constructor(x, y, xSpeed, ySpeed, baseSpeed = 1) {
		this.className = 'MovingObject'
		this.x = this.startX = x
		this.y = this.startY = y
		this.xSpeed = this.startXSpeed = xSpeed
		this.ySpeed = this.startYSpeed = ySpeed
		this.baseSpeed = baseSpeed
		this.parent = null
	}

	setParent(parent) { this.parent = parent }
	
	getParent() { return this.parent }

	getX() { return this.x }

	getY() { return this.y }

	getXSpeed() { return this.xSpeed }

	getYSpeed() { return this.ySpeed }

	nextX() {
		return this.getX() + this.xSpeed
	}

	nextY() {
		return this.getY() + this.ySpeed
	}

	dir(xSpeed, ySpeed) {
		this.xSpeed = xSpeed
		this.ySpeed = ySpeed
	}

	move() {
		this.x += this.xSpeed * this.baseSpeed
		this.y += this.ySpeed * this.baseSpeed
	}

	restart() {
		this.x = this.startX
		this.y = this.startY
		this.xSpeed = this.startXSpeed
		this.ySpeed = this.startYSpeed
	}
}