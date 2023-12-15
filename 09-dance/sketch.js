let song;
let fft;
let canvasBackground = '#3c0019';
let waveColor = '#87003c';

function preload() {
	song = loadSound('./assets/tomcbumpz.mp3');
}

function setup() {
	createCanvas(700, 500);
	angleMode(DEGREES);
	fft = new p5.FFT();
}

function draw() {
	background(canvasBackground);
	stroke(waveColor);
	strokeWeight(3);
	noFill();

	//bring to center
	translate(width / 2, height / 2);

	let wave = fft.waveform();

	//first half
	beginShape();
	for (let i = 0; i < 182; i++) {
		let index = floor(map(i, 0, 182, 0, wave.length - 1));

		let r = map(wave[index], -1, 1, 75, 350);

		let x = r * sin(i);
		let y = r * cos(i);
		point(x, y);
		vertex(x, y);
	}

	endShape();

	//second half
	beginShape();
	for (let i = 0; i < 180; i++) {
		let index = floor(map(i, 0, 180, 0, wave.length - 1));

		let r = map(wave[index], -1, 1, 75, 350);

		let x = r * -sin(i);
		let y = r * cos(i);
		point(x, y);
		vertex(x, y);
	}

	endShape();
}
