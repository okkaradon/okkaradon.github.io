
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
    background('#2A7F62');
    
}

function draw(){
    background('#2A7F6230');
    canvas.position(0,0);
    noStroke();
    
    fill('#53808330')
    rect(0, 0, mouseX, mouseY);
    
    fill('#89909F30')
    rect(mouseX, mouseY, windowWidth-mouseX, windowHeight-mouseY);

    fill('#C3ACCE57')
    rect(windowWidth-mouseX, windowHeight-mouseY, windowHeight-mouseY, windowHeight-mouseY);

    fill('#FFFFFF57')
    rect(mouseX-100, mouseY-300, mouseX, mouseY);

    fill('#DFD9E257')
    rect(0,mouseY-400,mouseX/2,mouseY/2);

    fill('#FFFFFF30')
    cfr = frameRate();
    text(int(cfr)+"fps", 20, windowHeight-10);

    fill('#FFFFFF10')
    textFont('Yu Gothic UI',24);
    text('Windows のライセンス認証', windowWidth-450, windowHeight-50);
    textFont('Yu Gothic UI',16);
    text('設定を開き、Windowsのライセンス認証を行ってください。', windowWidth-450, windowHeight-30);

}
  