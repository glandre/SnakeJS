class Container extends Drawable {

	constructor (objs) {
		super()
		this.objects = objs
	}
	
	setup() {
		for(let i = 0; i < this.objects.length; i++) {
			this.objects[i].setup()
		}
	}

	draw() {
		for(let i = 0; i < this.objects.length; i++) {
			this.objects[i].draw()
		}
	}

	colisions(precision) {
		return Colision.check(this.objects, precision)
	}
}