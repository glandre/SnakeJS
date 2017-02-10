class Snake extends MovingObject {
	constructor(x, y, xSpeed, ySpeed, baseSpeed = 1) {
		super(x,y,xSpeed,ySpeed,baseSpeed)
		this.className = 'Snake'
		this.head = new SnakeHead(x,y,xSpeed,ySpeed,baseSpeed)
		this.head.setParent(this)
		this.body = [] // MovingObject[]
		this.increased = false
		this.crashForced = false
	}

	getX() { return this.head.getX() }

	getY() { return this.head.getY() }

	getXSpeed() { return this.head.getXSpeed() }

	getYSpeed() { return this.head.getYSpeed() }

	nextX() {
		return this.head.nextX()
	}

	nextY() {
		return this.head.nextY()
	}

	dir(xSpeed, ySpeed) {
		this.head.dir(xSpeed,ySpeed)
	}

	increase() {
		this.increased = true
	}

	crash() {
		this.crashForced = true
	}

	crashed() {
		return this.crashForced
	}

	restart() {
		this.head.restart()
		this.body = []
	}

	move() {
		if (this.increased) {
			this.addPiece()
			this.increased = false
		}
		this.step()
	}

	addPiece() {
		let piece = new MovingObject(this.head.x, this.head.y, this.head.xSpeed, this.head.ySpeed, this.head.baseSpeed)
		piece.setParent(this)
		this.body.push(piece)
	}

	step() {
		if(this.body.length > 0) {
			for (let i = this.body.length - 1; i > 0; i-- ) {
				this.copyVector(this.body[i-1], this.body[i])
			}
			this.copyVector(this.head, this.body[0])
		}
		this.head.move()
	}

	copyVector (vecOrigin, vecDestin) {
		vecDestin.x = vecOrigin.x
		vecDestin.y = vecOrigin.y
		vecDestin.xSpeed = vecOrigin.xSpeed
		vecDestin.ySpeed = vecOrigin.ySpeed
	}

	static is(obj) {
		return obj.className === 'Snake'
	}
}