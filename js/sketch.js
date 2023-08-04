let angle = -0.0016566726255890928;//角回転速度 
let xo;
let yo;

let tracearr = [];
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
    
  randomslider = createSlider(0, 30, 2);
  randomslider.position(10, 60);
  randomslider.style('width', '200px');

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

    if(abs(angle) >= 0.01) {angle /= 1.002;}
    //キャンパスの回転
    push();
        translate(width/2, height/2);
        rotate(angle);
        image(canvas,-xo,-yo);
    pop();


    push();
        translate(2*xo + randomslider.value() * (noise(millis())-0.5),2*yo + randomslider.value() * (noise(millis())-0.5));
	    image(alert,-xo,-yo);
    pop();

    let trace = {
        x: mouseX-xo,
        y: mouseY-yo
      }
      
      tracearr.push(trace);

    if (tracearr.length > 60) {
        tracearr.splice(0,1);
    }
    //線の描画
    push();
        strokeWeight(1);
        stroke(255);
        noFill();
        translate(width/2, height/2);

        beginShape();
        for (let i = 0; i < tracearr.length; i++) {
          let n = tracearr.length - 1 - i;
          curveVertex(
            tracearr[n].x * cos(angle * i) - tracearr[n].y * sin(angle * i) + randomslider.value() * (noise(millis()+pmouseX)-0.5), 
            tracearr[n].x * sin(angle * i) + tracearr[n].y * cos(angle * i) + randomslider.value() * (noise(millis()+pmouseY)-0.5)
          );
        }
        endShape();
        /*
        line(
            //始点 マウスの座標
            mouseX-xo,
            mouseY-yo,
            //終点 前フレームマウスの座標 回転行列で変換
            (pmouseX-xo)*cos(angle)-(pmouseY-yo)*sin(angle),
            (pmouseX-xo)*sin(angle)+(pmouseY-yo)*cos(angle)
        );
        */
    pop();

    print(angle);
    
    fakealertdisplay(xo,yo);
}