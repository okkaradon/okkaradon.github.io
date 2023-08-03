let cangle = 0;
let cfr = 0;

function setup() {
	createCanvas(windowWidth, windowHeight,);
	   
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background('#2A3362');
	angleMode(DEGREES);
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
	
}

function draw() {
	frameRate(1000);
	background('#2A336210');
	cangle = cangle + 0.1;
	translate(
		width / 2, height / 2
	);
	noStroke();
	var realmouseX = mouseX-width/2;
	var realmouseY = mouseY-height/2;

	fill(
		255,
		255*mouseX/windowWidth,
		255*mouseY/windowHeight,
	);
	
	ellipse(realmouseX, realmouseY, 60, 60);

	if(keyIsPressed){
		ellipse(-realmouseX, -realmouseY, 100, 100);
	  }
	//ellipse(-realmouseX, -realmouseY, 100, 100);
	//
	//fill(
	//	255*mouseX/windowWidth,
	//	255*mouseY/windowHeight,
	//	100
	//);
	//ellipse(-realmouseY, realmouseX, 100, 100);
	//ellipse(realmouseY, -realmouseX, 100, 100);

	
	fill(
		255*mouseX/windowWidth,
		255*mouseY/windowHeight,
		200
	);
	
	push();
		translate(realmouseX, realmouseY);
		rotate(cangle);
		ellipse(100,40,30,30);
		ellipse(40,-60,10,10);
		ellipse(-80,20,20,20);
	pop();
	
	fill(
		255*mouseX/windowWidth,
		255*mouseY/windowHeight,
		100
	);
	push();
		translate(realmouseX, realmouseY);
		rotate(cangle);
		ellipse(-140,-40,30,30);
		ellipse(30,20,10,10);
		ellipse(-40,50,20,20);
	pop();


	translate(-width / 2, -height / 2);
	fill('#FFFFFF30')
	cfr = frameRate();
    text(int(cfr)+"fps", 20, windowHeight-10);
	
	//ellipse(-1.5*realmouseY, 1.5*realmouseX, 100, 100);
	//ellipse(1.5*realmouseY, -1.5*realmouseX, 100, 100);
	//ellipse(1.5*realmouseX, 1.5*realmouseY, 100, 100);
	//ellipse(-1.5*realmouseX, -1.5*realmouseY, 100, 100);
	
	fill('#FFFFFF10');
    textFont('Yu Gothic UI',24);
    text('Windows のライセンス認証', windowWidth-450, windowHeight-50);
    textFont('Yu Gothic UI',16);
    text('設定を開き、Windowsのライセンス認証を行ってください。', windowWidth-450, windowHeight-30);
}