class SnakeHead extends MovingObject 	{

	constructor(x, y, xSpeed, ySpeed, baseSpeed = 1) {
		super(x, y, xSpeed, ySpeed, baseSpeed)
		this.className = 'SnakeHead'
	}

	static is(obj) {
		return obj.className === 'SnakeHead'
	}
	
}