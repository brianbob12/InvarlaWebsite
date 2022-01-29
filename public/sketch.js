const sizeX = window.innerWidth
const sizeY = window.innerHeight

var myBoids = []

var myGrid = null


var frameNum = 0;

var hideBoids = true

var n = 100

function setup() {
  createCanvas(sizeX, sizeY);

  myGrid = new Grid(100, sizeX / 100, sizeY / 100)

  generateBoids(n)


  myBoids.forEach((b) => {
    b.toggleShowConnection()
    b.move(1, myGrid, sizeX, sizeY)
  })
  myBoids.forEach((b) => {
    b.collisionCheck(1, myGrid, sizeX, sizeY, frameNum)
  })

}

function draw() {
  frameNum += 1
  background(0);
  myGrid.clearGrid()
  myBoids.forEach((b) => {
    b.move(1, myGrid, sizeX, sizeY)
  })
  myBoids.forEach((b) => {
    b.collisionCheck(1, myGrid, sizeX, sizeY, frameNum)
  })
  myBoids.forEach((b) => {
    b.drawLines()
  })

  if (!hideBoids) {
    myBoids.forEach((b) => {
      b.draw()
    })
  }


}
function generateBoids(n) {
  for (var i = 0; i < n; i++) {
    myBoids.push(new Boid(i, Math.random() * sizeX, Math.random() * sizeY, Math.random() * PI * 2, 5))
  }
}

function pause() {
  paused = !paused
  if (paused) {
    pauseButton.html("PLAY")
  }
  else {
    pauseButton.html("PAUSE")
  }
}

function reset() {
  myBoids = []
  try {
    generateBoids(int(numBoidsInput.value()))
  }
  catch {
    generateBoids(n)
  }
  drawConnectionsCheckbox.value(false)
  debugCheckbox.value(false)
}

function toggleShowConnections() {
  myBoids.forEach((value) => { value.toggleShowConnection() })
}
function toggleDebug() {
  myBoids.forEach((value) => { value.toggleDebug() })
}

