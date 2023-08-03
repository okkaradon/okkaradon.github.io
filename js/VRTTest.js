let spawned = 0
let spawntime = 0
let vrt = 0
let score

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}
function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  spawn()
  spawntime+=3000
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function spawn(){
  spawntime = random(2000,6000)
}

function draw() {
  frameRate(1000)
  background(40)
  fill(0,255,0)
  textSize(40)
  text(score + " ms", windowWidth/2, windowHeight/2)
  if(spawntime > 0){
    vrt = 0
    spawntime -= deltaTime
    if(spawntime <= 0){
      spawned = 1
      fill(0,255,0)
      circle(windowWidth/2, windowHeight/2,500) 
	  fill(0)
	  text("click", windowWidth/2-40, windowHeight/2-20)
    }
  }else{
    spawned = 1
    fill(0,255,0)
    circle(windowWidth/2, windowHeight/2,500)
	fill(0)
	text("click", windowWidth/2-40, windowHeight/2-20)
    vrt += deltaTime
    if(mouseIsPressed){
       score = vrt
       spawn()
    }
  }
}