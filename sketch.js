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
	startX = 10
	startY = 10
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
	showMessage('START!')
}

function draw() {
	background(25)
	noFill()
	stroke(255)
	strokeWeight(20)
	color(255)
	rect(0, 0, width, height)
	noStroke()
	frameRate(10)
	container.draw()
	checkColisions(container.colisions(baseSize))
	if (snakeDrawer.crashed()) {
		pause()
		showMessage('GAME OVER! FINAL SCORE:', eaten)
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
					random(baseSize, width - 1.2*baseSize), 
					random(baseSize, height - 1.2*baseSize)
				)
				snakeFound.increase()
				eaten++
				showMessage('SCORE: ', eaten)
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
			turnLeft(snakeDrawer)
			break
		case RIGHT_ARROW:
			turnRight(snakeDrawer)
			break
		case UP_ARROW:
			turnUp(snakeDrawer)
			break
		case DOWN_ARROW:
			turnDown(snakeDrawer)
			break
		case ENTER:
			restart()
			break
		case SPACEBAR:
			pause()
			break
	}
}

function mousePressed() {
	if (topScreen(mouseX, mouseY)) {
		turnUp(snakeDrawer)
	} else if (bottomScreen(mouseX, mouseY)) {
		turnDown(snakeDrawer)
	} else if(leftScreen(mouseX, mouseY)) {
		turnLeft(snakeDrawer)
	} else if (rightScreen(mouseX, mouseY)) {
		turnRight(snakeDrawer)
	}
}

function topScreen(x, y) {
	return y > 0 && y <= height/4
}

function bottomScreen(x, y) {
	return y >= 3*height/4 && y <= height
}

function leftScreen(x, y) {
	return y > height/4 && y < 3*height/4 && x > 0 && x < width/2
}

function rightScreen(x, y) {
	return y > height/4 && y < 3*height/4 && x > width/2 && x < width
}

function turnLeft(snakeDrawer) {
	if(snakeDrawer.getXSpeed() === 0)
		snakeDrawer.dir(-1, 0)
}

function turnRight(snakeDrawer) {
	if(snakeDrawer.getXSpeed() === 0)
		snakeDrawer.dir(1, 0)
}

function turnUp(snakeDrawer) {
	if(snakeDrawer.getYSpeed() === 0)
		snakeDrawer.dir(0, -1)
}

function turnDown(snakeDrawer) {
	if(snakeDrawer.getYSpeed() === 0)
		snakeDrawer.dir(0, 1)
}

function pause() {
	if (started) {
		paused = !paused 
	
		if(paused) {
			noLoop()
			showMessage('PAUSED!')
		} else {
			loop()
			showMessage('GO!')
		}
	}
}

function restart () {
	showMessage('START!')
	eaten = 0
	started = true
	paused = true
	for(let object of container.objects) {
		object.restart()
	}
	pause()
}

function showMessage () {
	let message = ''
	for (let i = 0; i < arguments.length; i++) {
		message += arguments[i] + ' '
	}
	let span = document.getElementById('msg');
	span.innerHTML = message
	console.log(message)
}
