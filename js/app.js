//board
let tileSize = 32
let rows = 16
let columns = 16

let board
let boardWidth = tileSize * columns
let boardHeight = tileSize * rows
let context

//ship
let shipWidth = tileSize*2
let shipHeight = tileSize
let shipX = tileSize * columns/2 - tileSize
let shipY = tileSize * rows - tileSize*2

let ship = {
  x : shipX,
  y : shipY,
  width: shipWidth,
  height: shipHeight,
}

let shipImg
let shipVelocityX = tileSize

// alien
let alienArray = []
let alienWidth = tileSize*2
let alienHeight = tileSize
let alienX = tileSize
let alienY = tileSize
let alienImg

let alienRows = 2
let alienColumns = 3
let alienCount = 0

window.onload = function(){
  board = document.getElementById('board')
  board.width = boardWidth
  board.height = boardHeight
  context = board.getContext('2d')

  // draw ship
  // context.fillStyle='green'
  // context.fillRect(ship.x, ship.y, ship.width, ship.height)

  shipImg = new Image()
  shipImg.src = './ship.png'
  shipImg.onload = function() {
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)
  }

  alienImg = new Image()
  alienImg.src = './alien.png'

  requestAnimationFrame(update)
  document.addEventListener('keydown', moveShip)
}

function update() {
  requestAnimationFrame(update)

  context.clearRect(0,0, board.width, board.height)
  context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height)
}

function moveShip(e) {
  if (e.code == 'ArrowLeft' && ship.x - shipVelocityX >= 0) {
    ship.x -= shipVelocityX // move left
  }
  else if (e.code == 'ArrowRight' && ship.x + shipVelocityX + shipWidth <= board.width) {
    ship.x += shipVelocityX // move right
  }
}

function createAliens() {
  for (let c = 0; c < alienColumns; c++){
    for (let r = 0; r < alienRows; r++){
      let alien = {
        img : alienImg,
        x : alienX + c*alienWidth,
        y : alienY + r*alienHeight,
        width: alienWidth,
        height: alienHeight
      }
    }
  }
}