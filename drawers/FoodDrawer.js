class FoodDrawer extends Drawable {
	constructor(food, size, startX, endX, startY, endY) {
		super(food, color(255, 0, 0))
		this.size = size

		this.startX = startX
		this.endX = endX
		this.startY = startY
		this.endY = endY

		this.restart()
		this.dir(0, 0)
	}
	draw() {
		fill(this.color)
		stroke(0)
		strokeWeight(0.5)
		rect(this.object.x, this.object.y, this.size, this.size)
		super.draw()
	}
	dir(xSpeed, ySpeed) {
		this.object.dir(xSpeed, ySpeed)
	}
	restart() {
		this.object.x = random(this.startX, this.endX)
		this.object.y = random(this.startY, this.endY)
	}
}