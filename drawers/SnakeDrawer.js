class SnakeDrawer extends Drawable {
	constructor(object, size) {
		super(object, color(255))
		this.size = size
	}

	draw() {
		fill(this.color)
		rect(this.object.x, this.object.y, this.size, this.size)
		super.draw()
	}

	dir(xSpeed, ySpeed) {
		this.object.dir(xSpeed, ySpeed)
	}
}