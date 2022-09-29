
let cfr; // current frame rate

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background('#56CBF9');//再描画後に背景を再描画する
        
    cfr = frameRate();
    text(cfr, 15, 15);
}

function setup() {
    
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background('#56CBF9');
    
}

function draw(){
    background('#56CBF944');
    canvas.position(0,0);
    noStroke();
    
    fill('#09ACEC77')
    rect(0, 0, mouseX, mouseY);
    
    fill('#B0E7FC77')
    rect(mouseX, mouseY, windowWidth-mouseX, windowHeight-mouseY);

    fill('#D3C4D157')
    rect(windowWidth-mouseX, windowHeight-mouseY, windowHeight-mouseY, windowHeight-mouseY);

    fill('#FFFFFF57')
    rect(mouseX-100, mouseY-300, mouseX, mouseY);

    fill('#FF99B957')
    rect(0,mouseY-400,mouseX/2,mouseY/2);

    fill('#FFFFFF99')
    cfr = frameRate();
    text(int(cfr)+"fps", 20, windowHeight-10);
}
  