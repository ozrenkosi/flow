let frequency = 0.02;
let amplitude = 80;
let particleSizeMAX = 20;
let particleSize;
let columns = 16;
let rows = 10;
let xPos;
let yPos;
let offset;
let rowSpacing = 16;
let margin = 100;
let strandOffset;
let rowSizeOffset;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(4, 58, 74);
  translate(0, height/2);

  let colorA = color(253, 174, 120);
  let colorB = color(226, 129, 161);

  offset = 0;

	noStroke();

  for (let strand = 0; strand < 2; strand++) {
    strandOffset = (PI/4)*strand;

    for (let col = 0; col < columns; col++) {
      xPos = map(col, 0, columns-1, margin, width-margin);

      for (let row = 0; row < rows; row++) {
        rowSizeOffset = row/rows;

        particleMoveDown = row*rowSpacing - (rows*rowSpacing)/2;
        yPos = sinFunc(frequency, offset+strandOffset, -amplitude, amplitude) + particleMoveDown;

        particleSize = cosFunc(frequency, offset-rowSizeOffset+strandOffset, 0, particleSizeMAX);

        fill(lerpColor(colorA, colorB, row/rows));
        ellipse(xPos, yPos, particleSize);
      }

      offset = offset + PI/20;
    }
  }
}

function sinFunc(freq, off, min, max) {
	return map(sin(frameCount*freq + off), -1, 1, min, max);
}

function cosFunc(freq, off, min, max) {
	return map(cos(frameCount*freq + off), -1, 1, min, max);
}
