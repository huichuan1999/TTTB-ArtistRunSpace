let img;
let vehicles = [];

function preload() {
  img = loadImage('./Assets/TTTBLOGO.png'); // 替换为您的图片路径
}
function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.parent('p5-tttbLOGOcontainer');
  img.loadPixels();

  let spacing = 7; // 定义点阵的间距
  let xOffset = (width - img.width) / 2; // 计算水平偏移量
  let yOffset = (height - img.height) / 2; // 计算垂直偏移量

  for (let x = 0; x < img.width; x += spacing) {
    for (let y = 0; y < img.height; y += spacing) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      if (r + g + b > 750) { // 检测白色或接近白色的像素
        let vehicle = new Vehicle(x + xOffset, y + yOffset); // 添加偏移量
        vehicles.push(vehicle);
      }
    }
  }
}

function draw() {
  background(0,15);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function Vehicle(x, y) {
  this.pos = createVector(random(width), random(height));//position
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();//createVector();//velocity
  this.acc = createVector();//acceleration
  this.r = 8;
  this.maxspeed = 10;
  this.maxforce = 1;
}

Vehicle.prototype.behaviors = function () {
  let arrive = this.arrive(this.target);
  let mouse = createVector(mouseX, mouseY);
  let flee = this.flee(mouse);
  arrive.mult(1);
  flee.mult(5);
  this.applyForce(arrive);
  this.applyForce(flee);
}

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function () {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function () { //定义点阵的颜色，描边等
  //stroke(255);
  fill(255);
  noStroke();
  //strokeWeight(5);
  rectMode(CENTER);
  // point(this.pos.x, this.pos.y);
  rect(this.pos.x, this.pos.y,5,5)
}

Vehicle.prototype.arrive = function (target) {
  let desired = p5.Vector.sub(target, this.pos);
  let d = desired.mag();
  let speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}


Vehicle.prototype.flee = function (target) {
  let desired = p5.Vector.sub(target, this.pos);
  let d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

