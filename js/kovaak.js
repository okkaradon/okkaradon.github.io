let xoff = 0;
let yoff = -2000;
let xincrement = 0.001;
let yincrement = 0.001;
let HP = 100;
let killTime = 0;
let score = 0;
let radius = 100

function setup() {
  createCanvas(windowWidth, windowHeight,);
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style('z-index','-1');//canvasを後ろに移動する
  background(0);
  noStroke();
  colorMode(HSB, 100)
  
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Create an alpha blended background
  background(64,20,20,30);
  frameRate(240)

  //let n = random(0,width);  // Try this line instead of noise

  // Get a noise value based on xoff and scale
  // it according to the window's width
  let x = noise(xoff) * windowWidth;
  let y = noise(yoff) * 300;

  // With each cycle, increment xoff
  xoff += xincrement;
  yoff += yincrement;
  // Draw the ellipse at the value produced by perlin noise
  if(killTime==0){
    fill(50,90,90);
    ellipse(x, y, radius, radius);
    if(dist(mouseX, mouseY, x, y)<=radius/2){
        HP -= 1;
        push()
          stroke(0, 100, 100)
          translate(mouseX, mouseY)
          line(-40,-40,-20,-20)
          line(40,40,20,20)
          line(40,-40,20,-20)
          line(-40,40,-20,20)
        pop()
        if(HP <= 0){
          xoff += 500
          yoff += 500
          killTime = 100
          score += 1 
          xincrement+=0.0003
          yincrement+=0.0002
          radius *= 0.95
          HP = 100
      }
    }
  }else if(killTime>=80){
    push()
      stroke(0, 100, 100)
      translate(mouseX, mouseY)
      line(-40,-40,-20,-20)
      line(40,40,20,20)
      line(40,-40,20,-20)
      line(-40,40,-20,20)
    pop()
    killTime -= 1;
  }else{
    killTime -= 1; 
  }
  
  textSize(16);
  text("score " + score, 20, 20);

	fill('#222222');
	rect(18, windowHeight-28, 50, 25);

  fill('#FFFFFF')
	let cfr = frameRate();
    text(int(cfr)+"fps", 20, windowHeight-10);

  fill('#FFFFFF01');
    textFont('Yu Gothic UI',24);
    text('Windows のライセンス認証', windowWidth-450, windowHeight-50);
    textFont('Yu Gothic UI',16);
    text('設定を開き、Windowsのライセンス認証を行ってください。', windowWidth-450, windowHeight-30);
}