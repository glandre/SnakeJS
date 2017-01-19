class Colision {
	constructor(obj1, obj2) {
		this.obj1 = obj1
		this.obj2 = obj2
	}

	static check(objects, precision) {

		const between = (left, mid, right) => {
			return left <= mid && mid <= right
		}

		let colisions = Array()
		for(let i = 0; i < objects.length; i++) {
			let obj1 = objects[i].object
			for(let j = i+1; j < objects.length; j++) {
				let obj2 = objects[j].object
				if(obj1 !== obj2) {
					if(between(obj1.x - precision, obj2.x, obj1.x + precision)) {
						if(between(obj1.y - precision, obj2.y, obj1.y + precision)) {
							colisions.push(new Colision(obj1, obj2))
						}
					}
				}
			}
		}
		return colisions
	}
}