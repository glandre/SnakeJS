class SnakeDrawer extends Drawable {
	constructor(object, size) {
		super(object, color(255))
		this.size = size
	}

	draw() {
		fill(this.color)
		rect(this.object.head.x, this.object.head.y, this.size, this.size)
		for(let piece of this.object.body) {
			rect(piece.x, piece.y, this.size, this.size)
		}
		super.draw()
	}

	getXSpeed() { return this.object.head.xSpeed }
	getYSpeed() { return this.object.head.ySpeed }

	dir(xSpeed, ySpeed) {
		this.object.head.dir(xSpeed, ySpeed)
	}

	crashed() {
		return this.object.crashed() || !this.isAllowed(this.object.head.nextX(), this.object.head.nextY())
	}

	increase() {
		this.object.increase()
	}

	getChildren () {
		return this.object.body.concat([this.object.head])
	}
}