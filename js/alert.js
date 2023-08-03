
function fakealertdisplay(x,y) {
	
	push()
	alert.clear();
	alert.fill('#FFFFFF03')
	alert.textFont('Yu Gothic UI',24);
	alert.text('Windows のライセンス認証', x-450, y-50);
	alert.textFont('Yu Gothic UI',16);
	alert.text('設定を開き、Windowsのライセンス認証を行ってください。', x-450, y-30);
	pop()
}