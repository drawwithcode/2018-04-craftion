var numSegments = 10,
  x = [],
  y = [],
  angle = [],
  segLength = 80,
  targetX, targetY;

for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);


  drop1 = new waterDrops();
  drop2 = new waterDrops();
  drop3 = new waterDrops();
  drop4 = new waterDrops();


  x[x.length - 1] = width / 2; // Set base x-coordinate
  y[x.length - 1] = height; // Set base y-coordinate
}

function draw() {
  background(0);
  pop();
  fill('blue');
  stroke('#56B7FF');
  drop1.move();
  drop1.display();
  drop2.move();
  drop2.display();
  drop3.move();
  drop3.display();
  drop4.move();
  drop4.display();

  push();
  reachSegment(0, mouseX, mouseY);
  for (var i = 1; i < numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for (var j = x.length - 1; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  for (var k = 0; k < x.length; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }

}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  stroke('#FF91CB');
  line(0, 0, segLength, 0);
  pop();
}

function waterDrops() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(30, 50);
  this.speed = random(1, 5);
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

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
