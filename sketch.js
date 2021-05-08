var hr, mn, sc;
var hrAngle, minAngle, scAngle;

function setup() {
  createCanvas(800, 400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(10);
  noFill();

  stroke("blue");
  arc(0, 0, 300, 300, 0, scAngle);

  stroke("red");
  arc(0, 0, 280, 280, 0, minAngle);

  stroke("green");
  arc(0, 0, 260, 260, 0, hrAngle);


}