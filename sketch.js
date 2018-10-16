function preload() {
  // put preload code here
}

var balls = [];

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  var ballNumber = 50;
  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(random(0, width), random(0, height), 10);
    myBall.diameter= random(10,50);
    myBall.speed= random(1,5);
    myBall.color= color(random(255),random(255),random(255));


    balls.push(myBall);


  }

}

function draw() {
  // put drawing code here
    background(255,255,255,100);
for( var j=0; j< balls.length; j++){

  balls[j].move();
  balls[j].display();
  balls[j].diameter+=1;
}

}

function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = color('blue');
  this.speed = 2;
  var yDir = 1;
  var xDir = 1;
  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter);

  }
  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  }
}
