var drawingList = [];//array of drawings
var writingList = [];//array or writings
var drawingCount = 48;
var writingCount = 47;

function preload() {
  //The images need to be preloaded.  Here they are loaded into an array (essentially a list)
  pictureList = [];
  
  //use a for loop to load all 47 images into the array
  for (var i = 0; i < drawingCount; i++) {
    drawingList[i] = loadImage("d" + (i + 1) + ".jpg");
  }
  for (var i = 0; i < writingCount; i++) {
    writingList[i] = loadImage("w" + (i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//   noLoop();
  imageMode(CENTER);
  frameRate(4);
}

function draw() {
  background('#ffedcb');
  //choose random images for head, nose and chin
  var rand1 = int(random(1,drawingCount));
  var rand2 = int(random(1,writingCount))
  var randDrawing = drawingList[rand1];
  var randWriting = writingList[rand2];
  randDrawing.resize(500,500);
  randDrawing.filter(THRESHOLD);
  randWriting.resize(500,500);
  randWriting.filter(THRESHOLD);
  image(randWriting, width/2-255,height/2 );
  image(randDrawing, width/2+255, height/2)
}

function mouseClicked(){
  redraw();
}

//save image of canvas if 's' pressed
function keyPressed() {
  if (key == 's' || key == 'S' )
    save('myCanvas.jpg');
}