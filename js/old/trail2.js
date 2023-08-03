let cangle = 0;
let cfr = 0;

function setup() {
	createCanvas(windowWidth, windowHeight,);
	   
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background('#434363');
	angleMode(DEGREES);
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    canvasSetup();
	
}

function draw() {
	background('#43436301');
	frameRate(1000);
	cangle = cangle + 0.1;
	translate(
		width / 2, height / 2
	);
	noStroke();
	var realmouseX = mouseX-width/2;
	var realmouseY = mouseY-height/2;

	if(mouseIsPressed){
		fill(
			255*mouseX/windowWidth,
			255*mouseY/windowHeight,
			200
		);
		ellipse(realmouseX, realmouseY, 10, 10);
		ellipse(realmouseX, realmouseY, 30, 30);
	}else{
	}

	if(keyIsPressed){
		background('#43436310');
	}

	translate(-width / 2, -height / 2);
	fill('#222222');
	rect(18, windowHeight-28, 50, 25);

	fill('#FFFFFF')
	cfr = frameRate();
    text(int(cfr)+"fps", 20, windowHeight-10);
	
	fill('#FFFFFF01');
    textFont('Yu Gothic UI',24);
    text('Windows のライセンス認証', windowWidth-450, windowHeight-50);
    textFont('Yu Gothic UI',16);
    text('設定を開き、Windowsのライセンス認証を行ってください。', windowWidth-450, windowHeight-30);
}