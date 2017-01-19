const SPACEBAR = 32


var loops, maxLoop, width, height, baseSize
var snakeDrawer, startX, startY, startXSpeed, startYSpeed, baseSpeed
var foodDrawer, foodSize, eaten

function setup() {
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
	baseSpeed = 3

	snakeDrawer = new SnakeDrawer(new SnakeHead(startX, startY, startXSpeed, startYSpeed, baseSpeed), baseSize)
	snakeDrawer.restrict(0, width - baseSize -1, 0, height - baseSize -1)
	
	// Food
	eaten = 0
	foodSize = 10
	foodDrawer = new FoodDrawer(new Food(), foodSize, 0, width, 0, height)
	// foodDrawer = new FoodDrawer(new Food(), foodSize, 0, 0, 0, 0)

	console.log('setting up...')

	createCanvas(width,height)

	container = new Container([snakeDrawer, foodDrawer])
	container.setup()
}

function draw() {
	background(25)
	container.draw()
	checkColisions(container.colisions())
}

function checkColisions(colisions) {
	colisions = container.colisions(baseSize)
	console.log(colisions)
	for(let i = 0; i < colisions.length; i++) {
		colision = colisions[i]
		if(Food.is(colision.obj1) && SnakeHead.is(colision.obj2)) {
			colision.obj1.restart(random(0, width), random(0, height))
			// colision.obj2.increaseSnake
			break
		}
		
		if(Food.is(colision.obj2) && SnakeHead.is(colision.obj1)) {
			colision.obj2.restart(random(0, width), random(0, height))
			// colision.obj1.increaseSnake
			break
		}
	}
}

function keyPressed() {
	switch(keyCode) {
		case LEFT_ARROW:
			snakeDrawer.dir(-1, 0)
			break
		case RIGHT_ARROW:
			snakeDrawer.dir(1, 0)
			break
		case UP_ARROW:
			snakeDrawer.dir(0, -1)
			break
		case DOWN_ARROW:
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
	paused = !paused
	if(paused)
		noLoop()
	else
		loop()
}

function restart () {
	paused = true
	pause()
	for(let i = 0; i < container.objects.length; i++) {
		container.objects[i].restart()
	}
}