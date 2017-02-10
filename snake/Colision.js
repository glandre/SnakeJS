class Colision {
	constructor(obj1, obj2) {
		this.objects = [obj1, obj2]
	}

	static check(objects, precision) {
		const between = (left, mid, right) => {
			return left < mid && mid < right
		}

		let colisions = Array()
		for(let i = 0; i < objects.length; i++) {
			let obj1 = objects[i]
			for(let j = i+1; j < objects.length; j++) {
				let obj2 = objects[j]
				if(obj1 !== obj2) {
					if(between(obj1.getX() - precision, obj2.getX(), obj1.getX() + precision)) {
						if(between(obj1.getY() - precision, obj2.getY(), obj1.getY() + precision)) {
							colisions.push(new Colision(obj1, obj2))
						}
					}
				}
			}
		}
		return colisions
	}
}