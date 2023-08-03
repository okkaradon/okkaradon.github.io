let angle = 0;//角回転速度 
let xo;
let yo;
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    canvas.style('z-index','-1');
    alert.style('z-index','-2');
    background('#111111');//再描画後に背景を再描画する
    xo = windowWidth / 2;//xo x原点
    yo = windowHeight / 2;//yo y原点
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  alert = createGraphics(windowWidth, windowHeight); 
  
  alert.position(0,0);
  canvas.position(0,0);
  canvas.style('z-index','-1');//canvasを後ろに移動する
  alert.style('z-index','-2');

  xo = windowWidth / 2;//xo x原点
  yo = windowHeight / 2;//yo y原点

  background('#111111');
}


function mouseWheel(event) {
    //マウスホイールの読み取り  
    angle += event.delta / 190000;
    print(angle);
}

function draw() {  
    background('#11111101');
    if(abs(angle) <= 0.001){
        background('#11111115');
    }
    angleMode(RADIANS);//ラヂヤン

    if(angle > 0.01) {angle /= 1.002;}
    if(angle < -0.01) {angle /= 1.002;}
    //キャンパスの回転
    push();
        translate(width/2, height/2);
        rotate(angle);
        image(canvas,-xo,-yo);
    pop();
    push();
        translate(2*xo,2*yo);
	    image(alert,-xo,-yo);
    pop();
    //線の描画
    
    push();
        strokeWeight(10-movedX/4-movedY/4);
        stroke(255);    
        translate(width/2, height/2);
        line(
            //始点 マウスの座標
            mouseX-xo,
            mouseY-yo,
            //終点 前フレームマウスの座標 回転行列で変換
            (pmouseX-xo)*cos(angle)-(pmouseY-yo)*sin(angle),
            (pmouseX-xo)*sin(angle)+(pmouseY-yo)*cos(angle)
        );
    pop();

    print(angle);
    
    fakealertdisplay(xo,yo);
}