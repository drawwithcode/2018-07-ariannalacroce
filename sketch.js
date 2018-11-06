var capture;
var x = 0;

function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(320,480);
    background(50);
    frameRate(35);
    background(130);

    textAlign(CENTER);
      textSize(20);
      fill(255);
      textFont('Chakra Petch');
      text('Try to move your face in all directions', width/2,530);

}

function draw() {
  capture.loadPixels();
  var w = capture.width;
  var h = capture.height;

  copy(capture, w/2, 0, 1, h, x, 0, 1, h);
  x = x+3;

  if(x>width) {
    x=0;
  }
}
