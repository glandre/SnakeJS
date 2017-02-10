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
		return Colision.check(this.getChildren(), precision)
	}

	getChildren() {
		let children = []
		for (let obj of this.objects) {
			let c = obj.getChildren()
			children = children.concat(obj.getChildren())
		}
		return children
	}
}