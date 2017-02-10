const SPACEBAR = 32


var loops, maxLoop, width, height, baseSize
var snakeDrawer, startX, startY, startXSpeed, startYSpeed, baseSpeed
var foodDrawer, foodSize, eaten

function setup() {
	started = true
	paused = false
	loops = 0
	maxLoop = 1000
	width = 300
	height = 450
	baseSize = 10

	// Snake
	startX = 0
	startY = 0
	startXSpeed = 1
	startYSpeed = 0
	baseSpeed = 10

	snakeDrawer = new SnakeDrawer(new Snake(startX, startY, startXSpeed, startYSpeed, baseSpeed), baseSize)
	snakeDrawer.restrict(0, width - 1.2*baseSize, 0, height - 1.2*baseSize)
	
	// Food
	eaten = 0
	foodSize = 10
	foodDrawer = new FoodDrawer(new Food(), foodSize, 0, width - 1.2*baseSize, 0, height - 1.2*baseSize)

	createCanvas(width,height)

	container = new Container([snakeDrawer, foodDrawer])
	container.setup()
	console.log('START!')
}

function draw() {
	background(25)
	frameRate(10)
	container.draw()
	checkColisions(container.colisions(baseSize))
	if (snakeDrawer.crashed()) {
		console.log('Game Over! FINAL SCORE:', eaten)
		pause()
		started = false
	}
}
function checkColisions(colisions) {
	colisions = container.colisions(baseSize)
	for(let i = 0; i < colisions.length; i++) {
		colision = colisions[i]
		snakeHeadFound = SnakeHead.find(colision.objects)
		foodFound = Food.find(colision.objects)
		if(snakeHeadFound) {
			snakeFound = snakeHeadFound.getParent()
			if(foodFound) {
				foodFound.restart(
					random(0, width - 1.2*baseSize), 
					random(0, height - 1.2*baseSize)
				)
				snakeFound.increase()
				eaten++
				break
			} else {
				snakeFound.crash()
				break
			}
		}
	}
}

function keyPressed() {
	switch(keyCode) {
		case LEFT_ARROW:
			if(snakeDrawer.getXSpeed() === 0)
				snakeDrawer.dir(-1, 0)
			break
		case RIGHT_ARROW:
			if(snakeDrawer.getXSpeed() === 0)
				snakeDrawer.dir(1, 0)
			break
		case UP_ARROW:
			if(snakeDrawer.getYSpeed() === 0)
				snakeDrawer.dir(0, -1)
			break
		case DOWN_ARROW:
			if(snakeDrawer.getYSpeed() === 0)
				snakeDrawer.dir(0, 1)
			break
		case ENTER:
			restart()
			break
		case SPACEBAR:
			pause()
			break
	}
}

function pause() {
	if (started) {
		paused = !paused 
	
		if(paused)
			noLoop()
		else
			loop()
	}
}

function restart () {
	console.log('START!')
	eaten = 0
	started = true
	paused = true
	for(let object of container.objects) {
		object.restart()
	}
	pause()
}
