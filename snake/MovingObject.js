class MovingObject {
	constructor(x, y, xSpeed, ySpeed, baseSpeed = 1) {
		this.className = 'MovingObject'
		this.x = this.startX = x
		this.y = this.startY = y
		this.xSpeed = this.startXSpeed = xSpeed
		this.ySpeed = this.startYSpeed = ySpeed
		this.baseSpeed = baseSpeed
	}

	nextX() {
		return this.x + this.xSpeed
	}

	nextY() {
		return this.y + this.ySpeed
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